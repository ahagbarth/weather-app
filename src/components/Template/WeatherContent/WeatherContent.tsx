import React from 'react'
import Header from '../../molecules/Header'
import Panel from '../../organism/Panel'

const WeatherContent = () => (
  <div className='flex h-full flex-col justify-items-center px-6 tablet:px-10 desktop:flex-row desktop:justify-between desktop:px-22 desktop:pt-12'>
    <Header />
    <Panel />
  </div>
)

export default WeatherContent
