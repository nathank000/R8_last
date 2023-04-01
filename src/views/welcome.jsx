import React from 'react'

import {AFrameScene} from '../lib/aframe-components'
import html from './welcome.html'

const Welcome = () => (
  <AFrameScene sceneHtml={html} />
)

export {Welcome}
