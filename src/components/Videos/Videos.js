import React from 'react'
import Card from '../Card/Card'
import './videos.css'

const Videos = ({videos}) => {


  return (
    <div className='videos_container'>
           {
        videos?.map((item)=>(
          <Card heading={item?.heading} tags={item?.tags} video={item?.video} />
        ))
      }
    </div>
  )
}

export default Videos