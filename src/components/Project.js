import React from "react";

function Project(props) {
console.warn("pro",props.cartData.cardItem)
  return (
    <div className="container bg-primary" style={{width:'500px', margin:'auto',backgroundColor:'fff'}}>
      <ul className="list-group">
        <li className="list-group-item">Project Name : iPhone 14 Pro</li>
        <li className="list-group-item">Price : $1,089</li>
        <li className="list-group-item">Cash on Delivery : True</li>
        <li className="list-group-item">Repplacement & Refund : True</li>
        <button type="button" className="list-group-item list-group-item-action"
         onClick={()=>props.AddToCartHandler({name:'iphone'})}
         >Add to Cart</button>
      </ul>
         <div>
            <h3>Items in cart : {props.cartData.cardItem.length}</h3>

         </div>
    </div>
  );
}

export default Project;
