import '@testing-library/jest-dom'
import * as React from 'react'
import { render } from '@testing-library/react'
import { Banner } from '../Banner'

test('shows Banner when clone is shown ', () => {
  render(<Banner />)
})
