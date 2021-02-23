import '@testing-library/jest-dom'
import * as React from 'react'
import { render } from '@testing-library/react'
import { Row } from '../Row'
import { requests } from '../../request'

test('shows netflix original series when clone is shown ', () => {
  render(
    <Row
      title="NETFLIX ORIGUINALS"
      fetchUrl={requests.feachNetflixOriginals}
      isLargeRow
    />
  )
})
