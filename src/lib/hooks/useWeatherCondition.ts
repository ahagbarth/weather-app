import { useContext } from 'react'
import ThemeContext from '../context/ThemeContext'
import type { WeatherDataBody } from './types'

const useWeatherCondition = (data: WeatherDataBody) => {
  const {
    changeCurrentTheme,
    changeBackgroundImage,
    setWeather,
    setCity,
    setMain,
    setWindSpeed,
  } = useContext(ThemeContext)

  if (data) {
    const { weather, name, main, wind } = data
    setWeather(weather[0])
    setCity(name)
    setMain(main)
    setWindSpeed(wind.speed)
    switch (weather[0].main) {
      case 'Rain':
        changeCurrentTheme('dark')
        changeBackgroundImage('rain')

        break
      case 'Thunderstorm':
        changeCurrentTheme('dark')
        changeBackgroundImage('storm')

        break
      case 'Clouds':
        changeCurrentTheme('light')
        changeBackgroundImage('partial')

        break
      case 'Clear':
        changeCurrentTheme('light')
        changeBackgroundImage('sunny')

        break
      default:
    }
  }
  return ''
}
export default useWeatherCondition
