import React, { useState } from 'react'
import { Search } from 'lucide-react'
import { Button } from '../../atom/button'
import { Input } from '../../atom/input'
import type { NavBarProps } from './types'

const NavBar: React.FC<NavBarProps> = ({ city, setLocation }) => {
  const [text, setText] = useState(city)
  return (
    <div className='flex flex-col px-10 pt-8 tablet:flex-row'>
      <div className='flex grow mobile:justify-center tablet:w-12 tablet:justify-start'>
        LOGO
      </div>
      <div className='flex justify-end'>
        <Input value={text} onChange={(input) => setText(input.target.value)} />
        <Button
          variant='outline'
          type='submit'
          onClick={() => setLocation(text)}
        >
          <Search className='h-4 w-4' />
        </Button>
      </div>
    </div>
  )
}

export default NavBar
