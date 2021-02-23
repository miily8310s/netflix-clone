import '@testing-library/jest-dom'
import * as React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import { Nav } from '../Nav'

test('shows navbar when clone is shown ', () => {
  render(<Nav />)
})
