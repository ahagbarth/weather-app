import React from 'react'
import './App.css'
import useWeatherQuery from './lib/hooks/useWeatherQuery'

const App = () => {
  const test = useWeatherQuery({ city: 'valencia' })
  return <main data-testid='app'> Hello world </main>
}

export default App
