import React from 'react';

const MobileCard = ({ mobile }) => {
    const { image} = mobile; // Corrected company spelling
    return (
        <>
           <div  className='mobileimagesection'>
            <div className='mobileCardImage'>
             <img src={image} alt=""/>
            </div>
      
           </div>
        </>
    );
};

export default MobileCard;