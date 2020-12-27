import React from 'react'
import { render} from '@testing-library/react'
import 'jest-styled-components'

import Menu from '../components/Menu'

describe('Menu', () => {
  test('should render Menu', () => {

    const { getByRole } = render(<Menu />)
    const home = getByRole('link', { name: 'Home' })

  })
})
