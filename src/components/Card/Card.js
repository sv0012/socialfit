import React from 'react';
import './card.css'

const Card = ({ heading, tags, video }) => {
  return (
    <div className='card_container'>
      <iframe src={video} frameborder="0" height='175px'></iframe>
      <div className="card_footer">
        <span className='video_heading'>{heading}</span>
        <ul className="tags">
          {
            tags.map((tag) => (
              <li className='video_tags'>{`#${tag}`}</li>
            ))
          }
        </ul>

      </div>

    </div>
  )
}

export default Card