import React from 'react'
import {render, screen} from '@testing-library/react'
import {BrowserRouter as Router} from 'react-router-dom'
import {Login} from './Login'
import {Provider} from 'react-redux'
import {store} from '../../../store'

describe('Login component', () => {
  it('renders the form correctly', () => {
    render(
      <Provider store={store}>
        <Router>
          <Login />
        </Router>
      </Provider>
    )

    expect(screen.getByText('Pannon Egyetemi email cim')).toBeInTheDocument()
    expect(screen.getByText('Jelszó')).toBeInTheDocument()
    expect(screen.getByText('Belépés')).toBeInTheDocument()
    expect(screen.getByText('Elfelejtett jelszó ?')).toBeInTheDocument()
  })
})
