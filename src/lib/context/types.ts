import type { MainData, WeatherData } from '../hooks/types'

export type ThemeContextValue = {
  currentTheme: 'light' | 'dark'
  changeCurrentTheme: (newTheme: 'light' | 'dark') => void
  backgroundImage: string | undefined
  changeBackgroundImage: (img: string) => void
  weather: WeatherData | undefined
  setWeather: (data: WeatherData) => void
  main: MainData | undefined
  setMain: (data: MainData) => void
  city: string | undefined
  setCity: (data: string) => void
  windSpeed: number | undefined
  setWindSpeed: (data: number) => void
}
