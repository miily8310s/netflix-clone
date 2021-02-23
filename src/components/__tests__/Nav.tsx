import '@testing-library/jest-dom'
import * as React from 'react'
import { render } from '@testing-library/react'
import { Nav } from '../Nav'

describe('clone page is shown', () => {
  it('displays a logo and avater', () => {
    render(<Nav />)
    const displayedImages = document.querySelectorAll('img')
    const logoImage = displayedImages[0] as HTMLImageElement
    const logoAvater = displayedImages[1] as HTMLImageElement
    expect(logoImage.src).toContain('logo')
    expect(logoAvater.src).toContain('pinimg')
  })
})
