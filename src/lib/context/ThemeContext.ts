/* eslint-disable @typescript-eslint/no-unused-vars */
import { createContext } from 'react'
import type { MainData, WeatherData } from '../hooks/types'
import type { ThemeContextValue } from './types'

const defaultValue: ThemeContextValue = {
  currentTheme: 'light',
  changeCurrentTheme: (_newTheme: 'light' | 'dark') => {},
  backgroundImage: '',
  changeBackgroundImage: (_img: string) => {},
  weather: undefined,
  main: undefined,
  city: 'London',
  windSpeed: undefined,
  setWeather: (_data: WeatherData) => {},
  setMain: (_data: MainData) => {},
  setCity: (_city: string) => {},
  setWindSpeed: (_speed: number) => {},
}

const ThemeContext = createContext<ThemeContextValue>(defaultValue)

export default ThemeContext
