export type WeatherQueryProps = {
  city: string
}

export type WeatherData = {
  description: string
  icon: string
  main: string
}

export type WeatherDataResponse = {
  main: string
  name: string
  weather: WeatherData
}
