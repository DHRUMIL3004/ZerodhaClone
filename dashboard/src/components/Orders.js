// import React from "react";
// import { Link } from "react-router-dom";

// const Orders = () => {
//   return (
//     <div className="orders">
//       <div className="no-orders">
//         <p>You haven't placed any orders today</p>

//         <Link to={"/"} className="btn">
//           Get started
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Orders;



import React ,{useState,useEffect} from "react";
import axios  from "axios";


// import { positions } from "../data/data";


const Orders= () => {

  const [orders,setOrders]=useState([]) ;

  useEffect(()=>{
     axios.get("http://localhost:3002/allOrders").then((res)=>{
      setOrders(res.data);
     });
  },[]);


  return (
    <>
      <h3 className="title">Orders ({orders.length})</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Name</th>
            <th>Qty.</th>
            <th>BuyPrice</th>
            <th>mode</th>
    
          </tr>

          {orders.map((stock, index) => {
            

            return (
              <tr key={index}>
                
                <td>{stock.name}</td>
                <td>{stock.qty}</td>
                <td>{stock.price.toFixed(2)}</td>
                <td>{stock.mode}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </>
  );
};

export default Orders;

