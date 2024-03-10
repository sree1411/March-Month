import React from "react";
import NavBar from "../stores/components/NavBar";
import { mobileData } from "../stores/data/mobiles";
import { Link } from "react-router-dom";
 

const MobilePage = () => {
 
   


  return (
    <>
      <NavBar />

     


      <div className="mobilesection1">
        {
           mobileData.map((item) => {
            return (
               <>
               <Link to={`/mobiles/${item.id}`}>
              <div>
                <img src={item.image} alt="" />
                <h3> Company : {item.company}</h3>
                <p>click here to more about Product</p>
              </div>
              </Link>
               </>
            );
          })}
      </div>
    </>
  );
};

export default MobilePage;
