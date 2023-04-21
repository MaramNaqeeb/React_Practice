import React from 'react'
import Tour from './Tour'
const Tours = ({tours,removeTour,removeAll}) => {
  return (
    <section>

        <div className='title'>
            <h2>Our Tours</h2>
 

        <div className='underline'></div>

        </div>
<button style={{color:'blue',fontSize:'20px',backgroundColor:'transparent',border:'none'}}
onClick={()=>removeAll()}>remove All</button>    

        <div>

            {tours.map((tour)=>{
            
            return <Tour key={tour.id}{...tour} removeTour={removeTour} removeAll={removeAll}></Tour>
          
          
            })}
        </div>
    </section>
    
  )
}

export default Tours
