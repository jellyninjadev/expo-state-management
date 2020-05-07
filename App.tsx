import React from 'react'
import {Provider} from './store'
import Home from './pages/home/index'

export default () => <Provider>
  <Home />
</Provider>