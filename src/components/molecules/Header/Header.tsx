import { useContext } from 'react'
import ThemeContext from '../../../lib/context/ThemeContext'

const Header = () => {
  const { main, city } = useContext(ThemeContext)
  if (main) {
    return (
      <section className='pt-20 text-lightEmphasis dark:text-darkEmphasis tablet:pt-20 desktop:pt-56'>
        <div className='flex justify-center gap-x-6 align-bottom desktop:justify-start'>
          <h1 className='text-6xl font-semibold tracking-tight tablet:text-8xl desktop:text-10xl'>
            {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
            {Math.round(main.temp)}°
          </h1>
          <div className='flex items-end'>
            <div className='flex flex-col gap-y-4'>
              <h2
                data-areaid='city-name'
                className='text-3xl tracking-tight tablet:text-5xl desktop:text-7xl'
              >
                {city}
              </h2>
              <p className='pl-1 text-lg'>{new Date().toDateString()}</p>
            </div>
          </div>
        </div>
      </section>
    )
  }
  return null
}

export default Header
