import React from 'react'
import { mobileData } from '../data/mobiles'

const MobileProduct = () => {

   const mobileFiveImages  = mobileData.slice(0,5)

  return (
    <>
      <div>
        Mobile Phone Section
      </div>           
    <div className='mobilesection'>
    {
       mobileFiveImages.length>0 && mobileFiveImages.map((item)=>{
            return <div>
                       <div>
                          <img src={item.image} alt="" width='90%' />
                       </div>
                   </div>
        })
    }
    </div>
    
    
    
    </>
  )
}

export default MobileProduct