import React, { Component } from "react";
import Data from "../../asssets/data/data.json";
import Category from "./Category/Category";
class Categories extends Component {
  state = {
    data: []
  };

  render() {
    const american = Data.filter(m => m.cuisineType.title === "American");
    const salad = Data.filter(m => m.menuType.title === "Salad");
    const pizza = Data.filter(m => m.menuType.title === "Pizza");
    const mainCourse = Data.filter(m => m.courseType.title === "Main Course");
    console.log(Data);
    return (
      <main style={{textAlign:'left', marginTop:90}} className='Categories-container'> 
        <div>
          <h3>American</h3>
          <hr />
          <Category data={american} />
        </div>
        <div>
          <h3>Salad</h3>
          <hr />
          <Category data={salad} />
        </div>
        <div>
          <h3>Main Course</h3>
          <hr />
          <Category data={mainCourse} />
          <div>
          <h3>Pizza</h3>
          <hr />
          <Category data={pizza} />
        </div>
        </div>
        <div style={{width:100}}>
  
        </div>
       
      </main>
    );
  }
}

export default Categories;

