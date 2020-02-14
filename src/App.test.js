import React from 'react'
import { render } from '@testing-library/react'
import App from './App'

render.test('render(<App />)', () => {
  const { getByText } = render(<App />)
  return getByText
})
