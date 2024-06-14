/* eslint-disable react/jsx-no-constructed-context-values */
import type { FC, ReactNode } from 'react'
import { useState, useEffect } from 'react'
import type { MainData, WeatherData } from '../hooks/types'
import ThemeContext from './ThemeContext'

const ThemeContextWrapper: FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<'light' | 'dark'>(
    (localStorage.getItem('theme') as 'light' | 'dark') || 'light'
  )
  const [backgroundImage, setBackgroundImage] = useState<string>()
  const [weather, setWeatherData] = useState<WeatherData>()
  const [main, setMainData] = useState<MainData>()
  const [city, setLocation] = useState<string>()
  const [windSpeed, setWindSpeedData] = useState<number>()

  const changeCurrentTheme = (newTheme: 'light' | 'dark') => {
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
  }
  const changeBackgroundImage = (img: string) => {
    setBackgroundImage(img)
    localStorage.setItem('backgroundImage', img)
  }
  const setWeather = (data: WeatherData) => {
    setWeatherData(data)
  }
  const setMain = (data: MainData) => {
    setMainData(data)
  }
  const setCity = (data: string) => {
    setLocation(data)
  }
  const setWindSpeed = (data: number) => {
    setWindSpeedData(data)
  }
  useEffect(() => {
    // if (theme === 'light') document.body.classList.remove('dark')
    // else document.body.classList.add('dark')
    if (
      theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark')
      document.documentElement.setAttribute('data-theme', 'dark')
      document.documentElement.classList.remove('light')
    } else {
      document.documentElement.classList.remove('dark')
      document.documentElement.setAttribute('data-theme', 'light')
      document.documentElement.classList.add('light')
    }
  }, [theme])

  useEffect(() => {
    if (backgroundImage) {
      const body = document.getElementById('App')
      body?.classList.add(backgroundImage)
    }
  }, [backgroundImage])

  return (
    <ThemeContext.Provider
      value={{
        currentTheme: theme,
        changeCurrentTheme,
        backgroundImage,
        changeBackgroundImage,
        weather,
        setWeather,
        main,
        setMain,
        city,
        setCity,
        windSpeed,
        setWindSpeed,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContextWrapper
