import React from 'react'
import { describe, expect, it } from 'vitest'
import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import App from './App'
import type { ThemeContextValue } from './lib/context/ThemeContext'
import ThemeContext from './lib/context/ThemeContext'
import useWeatherCondition from './lib/hooks/useWeatherCondition'
import useWeatherQuery from './lib/hooks/useWeatherQuery'

// Mock the custom hooks
vi.mock('./lib/hooks/useWeatherQuery')
vi.mock('./lib/hooks/useWeatherCondition')

const mockUseWeatherQuery = useWeatherQuery as jest.MockedFunction<
  typeof useWeatherQuery
>
const mockUseWeatherCondition = useWeatherCondition as jest.MockedFunction<
  typeof useWeatherCondition
>
const mockThemeContextValue: ThemeContextValue = {
  currentTheme: 'light',
  changeCurrentTheme: vi.fn(),
  backgroundImage: 'sunny',
  changeBackgroundImage: vi.fn(),
  weather: undefined,
  setWeather: vi.fn(),
  main: undefined,
  setMain: vi.fn(),
  city: 'madrid',
  setCity: vi.fn(),
  windSpeed: undefined,
  setWindSpeed: vi.fn(),
}

describe('App', () => {
  beforeEach(() => {
    mockUseWeatherQuery.mockReturnValue({ data: null, error: null })
    mockUseWeatherCondition.mockImplementation(() => {})
  })

  it('renders the App component', () => {
    render(
      <ThemeContext.Provider value={mockThemeContextValue}>
        <App />
      </ThemeContext.Provider>
    )
    expect(screen.getByTestId('app')).toBeInTheDocument()
    expect(screen.getByText('LOGO')).toBeInTheDocument()
  })
  it('displays an error message when error occurs', () => {
    mockUseWeatherQuery.mockReturnValue({
      data: null,
      error: { response: { data: { message: 'City not found' } } },
    })

    render(
      <ThemeContext.Provider value={mockThemeContextValue}>
        <App />
      </ThemeContext.Provider>
    )

    expect(screen.getByTestId('error-message')).toBeInTheDocument()
  })

  it('the correct background image is displayed', () => {
    render(
      <ThemeContext.Provider value={mockThemeContextValue}>
        <App />
      </ThemeContext.Provider>
    )

    const appElement = screen.getByTestId('app')
    expect(appElement).toHaveStyle(`background-image: url('/img/sunny.png')`)
  })
  it('updates location on NavBar input change', () => {
    render(
      <ThemeContext.Provider value={mockThemeContextValue}>
        <App />
      </ThemeContext.Provider>
    )

    const input = screen.getByRole('textbox')
    fireEvent.change(input, { target: { value: 'new york' } })
    fireEvent.click(screen.getByRole('button'))

    expect(mockUseWeatherQuery).toHaveBeenCalled()
  })
})
