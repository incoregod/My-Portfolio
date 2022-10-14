import React from 'react'
import './TimeLine.scss'

const TimeLine = ({active, abouts}) => {
    const navdotEl = abouts.map((item, index) => (
            <a
             key={item + index}
             className= 'app__timeline-dot'
             style={active === index ? {backgroundColor: '#f57f1e'}: {}}
             />
      ));
  return (
    <div className='app__timeline'>
        {navdotEl}
    </div>
  )
}

export default TimeLine