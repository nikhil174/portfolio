import React from 'react'
import Works from './Works'
import './work.css'

const Work = () => {
  return (
    <div className="work section" id="projects">
        <h1 className="section__title">Projects</h1>
        <span className="section__subtitle">Most recent works</span>
        <Works />
    </div>
  )
}

export default Work
