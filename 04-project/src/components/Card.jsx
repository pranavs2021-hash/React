import React from 'react'

const Card = (props) => {

  return (
    <div> <div className='card'>
        
        <div className='comb'>
          <div className='top'>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMKFKirOYXW8Ycz4vJynobWX5Mm_Y_sRevRjWjcVd2Vg&s=10" alt="amazon image" />
          <button ><span>save</span><i className="ri-bookmark-line"></i></button>
        </div>
        <div className='centre'>
          <h3>{props.company}<span>{props.days}</span></h3>
          <h2>senior ui ux dveloper</h2>
          <div className='tag'>
            <h4>Part time</h4>
            <h4>Senior level</h4>
          </div>
        </div>
        </div>
        <div className='bottom'>
          <div>
          <h2>$120$/hr</h2>
            <p>Mumbai, india</p>
            </div>
          <div><button>Apply now</button></div>
        </div>

      </div></div>
  )
}

export default Card