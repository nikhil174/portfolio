import React from 'react'

const WorkItem = ({ item }) => {
  return (
    <div className="work__card">
      <div className="work__img-div">
        <img src={item.image} alt="" className='work__img' />
      </div>

      <h3 className="work__title">{item.title}</h3>
      <p className='tech__section'><span className='work__tech'>Tech : </span>{item.tech.join(', ')}</p>
      <p>{item.description}</p>
      <div className="work__links">
        <a href={item.github} target='_blank' className="work__button">Code</a>
        <a href={item.demo} target='_blank' className="work__button">Demo</a>
      </div>
    </div>
  )
}

export default WorkItem
