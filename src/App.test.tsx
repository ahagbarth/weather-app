import React from 'react'
import { describe, expect, it } from 'vitest'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
  it('renders the App component', () => {
    render(<App />)

    expect(screen.getByTestId('app')).toBeVisible()
  })
})
