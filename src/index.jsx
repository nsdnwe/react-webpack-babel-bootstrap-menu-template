import React from 'react'
import { render } from 'react-dom'
import Layout from './components/layout.jsx'
import styles from './index.scss'
import '../global/styles.css'

render(<Layout/>, document.querySelector("#app"));