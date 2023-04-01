import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import {Scene} from './views/scene'
import {Welcome} from './views/welcome'
import {NotFound} from './views/notfound'

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<Welcome />} />
      <Route exact path='/scene' element={<Scene />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  </BrowserRouter>
)

export default App