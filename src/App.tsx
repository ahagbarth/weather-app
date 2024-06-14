import { useContext, useState } from 'react'
import type { AxiosError } from 'axios'
import WeatherContent from './components/Template/WeatherContent'
import NavBar from './components/organism/NavBar'
import ThemeContext from './lib/context/ThemeContext'
import type { WeatherDataBody } from './lib/hooks/types'
import useWeatherCondition from './lib/hooks/useWeatherCondition'
import useWeatherQuery from './lib/hooks/useWeatherQuery'

const App = () => {
  const { backgroundImage } = useContext(ThemeContext)
  const [location, setLocation] = useState('New York')
  const { data, error } = useWeatherQuery({ city: location })
  useWeatherCondition(data as WeatherDataBody)

  const backgroundImageStyle = {
    backgroundImage: `url('/img/${backgroundImage}.png')`,
  }
  return (
    <main
      id='App'
      data-testid='app'
      className='h-screen max-h-screen w-screen overflow-clip bg-cover bg-center text-black dark:text-darkDefault'
      style={backgroundImageStyle}
    >
      <NavBar city={location} setLocation={(input) => setLocation(input)} />
      {error && error.response && (
        <div
          data-testid='error-message'
          className='text-center text-2xl text-red-500'
        >
          Error:
          {(error.response.data as AxiosError).message}
        </div>
      )}

      <WeatherContent />
    </main>
  )
}

export default App
