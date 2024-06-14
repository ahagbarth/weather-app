import React, { createContext } from 'react'
import { vi } from 'vitest'
import type { ThemeContextValue } from '../context/types'

export interface ThemeContextMockValue {
  changeCurrentTheme: vi.Mock<void, ['light' | 'dark']>
  changeBackgroundImage: vi.Mock<void, [string]>
  setWeather: vi.Mock<void, [any]>
  setCity: vi.Mock<void, [string]>
  setMain: vi.Mock<void, [any]>
  setWindSpeed: vi.Mock<void, [number]>
}

export const mockThemeContextValue: ThemeContextMockValue = {
  changeCurrentTheme: vi.fn(),
  changeBackgroundImage: vi.fn(),
  setWeather: vi.fn(),
  setCity: vi.fn(),
  setMain: vi.fn(),
  setWindSpeed: vi.fn(),
}

const ThemeContext = createContext<ThemeContextValue>(mockThemeContextValue)

export default ThemeContext
