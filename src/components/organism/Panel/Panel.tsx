import React, { useContext } from 'react'
import type { ThemeContextValue } from '@/src/lib/context/types'
import ThemeContext from '../../../lib/context/ThemeContext'

const Panel: React.FC = () => {
  const { weather, main, windSpeed } =
    useContext<ThemeContextValue>(ThemeContext)
  if (weather && main) {
    const weatherInfo = [
      { key: 'Max', value: main.temp_max, unit: '°' },
      { key: 'Min', value: main.temp_min, unit: '°' },
      { key: 'Humidity', value: main.humidity, unit: '%' },
      { key: 'Wind', value: windSpeed, unit: 'km/h' },
    ]

    return (
      <section className='h-full w-full content-end pt-12 tablet:px-12 tablet:pt-16 desktop:w-100 desktop:px-0'>
        <div className='h-full rounded-t-lg bg-white/30 backdrop-blur-md dark:bg-black/30'>
          <div className='flex flex-col gap-8 p-4 tablet:px-22 desktop:px-7'>
            <p className='text-center uppercase text-lightSubtle dark:text-darkSubtle'>
              {weather.description}
            </p>
            {weatherInfo.map(({ key, value, unit }) => (
              <div className='flex' key={key}>
                <span className='flex-1'>{key}</span>
                <span className='flex-1 text-end'>
                  {Math.round(value as number)}
                  {unit}
                </span>
              </div>
            ))}
            <hr />
          </div>
        </div>
      </section>
    )
  }
  return <div />
}

export default Panel
