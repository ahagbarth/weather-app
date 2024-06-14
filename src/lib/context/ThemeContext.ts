/* eslint-disable @typescript-eslint/no-unused-vars */
import { createContext } from 'react'
import type { MainData, WeatherData } from '../hooks/types'
import type { ThemeContextValue } from './types'

const defaultValue: ThemeContextValue = {
  currentTheme: 'light',
  changeCurrentTheme: (newTheme: 'light' | 'dark') => {},
  backgroundImage: '',
  changeBackgroundImage: (img: string) => {},
  weather: undefined,
  main: undefined,
  city: 'London',
  windSpeed: undefined,
  setWeather: (data: WeatherData) => {},
  setMain: (data: MainData) => {},
  setCity: (city: string) => {},
  setWindSpeed: (speed: number) => {},
}

const ThemeContext = createContext(defaultValue)

export default ThemeContext
