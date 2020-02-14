/* global test */
import React from 'react'
import { render } from '@testing-library/react'
import App from './App'

test('render(<App />)', () => {
  const { getByText } = render(<App />)
})
