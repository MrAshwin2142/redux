import React from "react";

function Project() {
  return (
    <div className="container bg-primary" style={{width:'500px', margin:'auto',backgroundColor:'fff'}}>
      <ul className="list-group">
        <li className="list-group-item">Project Name : iPhone 14 Pro</li>
        <li className="list-group-item">Price : $1,089</li>
        <li className="list-group-item">Cash on Delivery : True</li>
        <li className="list-group-item">Repplacement & Refund : True</li>
        <button type="button" class="list-group-item list-group-item-action">Add to Cart</button>
      </ul>
    </div>
  );
}

export default Project;
