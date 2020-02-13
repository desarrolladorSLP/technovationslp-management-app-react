/* global test, expect */
import React from 'react'
import { render } from '@testing-library/react'
import App from './App'

test('renders hello world', () => {
  const { getByText } = render(<App />)
  const helloWorldParagraph = getByText(/hello world/i)
  expect(helloWorldParagraph).toBeInTheDocument()
})
