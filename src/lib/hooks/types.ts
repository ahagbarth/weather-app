import type { DefaultError } from '@tanstack/react-query'

export type WeatherQueryProps = {
  city: string
}

export type WeatherData = {
  description: string
  icon: string
  main: string
  id: number
}
export type MainData = {
  temp: number
  pressure: number
  humidity: number
  temp_min: number
  temp_max: number
}
export type WindData = {
  deg: number
  gust: number
  speed: number
}
export type WeatherDataBody = {
  main: MainData
  name: string
  weather: WeatherData[]
  wind: WindData
}

export type WeatherQueryResponse = {
  data: WeatherDataBody | undefined
  error: DefaultError | null
}
