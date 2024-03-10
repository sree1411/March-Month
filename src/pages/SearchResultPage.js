import React from 'react'
import { useParams } from 'react-router-dom';
import { mobileData } from '../stores/data/mobiles';
import NavBar from '../stores/components/NavBar';

const SearchResultPage = () => {
  const { searchQuery } = useParams();
  
  // Filter mobileData based on the search query
  const filteredMobiles = mobileData.filter((item) => {
    return item.company.toLowerCase().includes(searchQuery.toLowerCase());
  });
  
  return (
    <>
     <div>
       <NavBar/>
      <ul>
        {filteredMobiles.map((mobile) => (
          <li key={mobile.id}>
            <div>{mobile.company}</div>
             <div>
              <img src={mobile.image} alt="" />
             </div>
          </li>
        ))}
      </ul>
    </div>
    
    </>
  )
}

export default SearchResultPage