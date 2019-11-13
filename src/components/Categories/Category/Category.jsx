import React from "react";
import MyCarousel from "../../common/MyCarousel";

const Category = ({ data }) => {
  return (
    <MyCarousel>
      {data.map(m => (
        <div  key = {m.id} style={{width:350}}>
          <img src={m.image} width='340'  style={{margin:'auto'}} />
          <h3>{m.title}</h3>
          <div >
            <span style={{color:' #026764'}} >{m.menuType.title}</span>{'  '}
            <span>{m.cuisineType.title} </span>{'  '}
            <span>{m.mealType.title} </span>
          </div>
          <div>
            <span>10-15 Mins</span>
            <span>{m.price} $ </span>
          </div>
        </div>
      ))}
    </MyCarousel>
  );
};

export default Category;
