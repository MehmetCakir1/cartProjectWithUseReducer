import React, { useContext} from "react";
import { AppContext } from "../context/AppContextProvider";
import { FaPlus, FaMinus } from "react-icons/fa";
const initialValues={
  
}
const Main = () => {
  const { cart,removeItem,increase,decrease} = useContext(AppContext);


  return (
    <div className="text-center">
      
      {cart.length!==0 ? (
        <div>
          <h1 className="text-uppercase text-danger">Your Cart</h1>
        </div>
      ):
      (
        <div style={{marginTop:"10rem"}}>
        <h1 className="text-uppercase text-danger">Your Cart</h1>
        <h3>is empty...</h3>
      </div>
      )}
      {cart.map((item) => {
        const { id, title, img, price, amount } = item;
        return (
          <div
            key={id}
            className="d-flex align-items-center main-container flex-column flex-sm-row justify-content-between m-auto my-2"
          >
            <div className="d-flex flex-column flex-sm-row align-items-center">
              <div className="img-div">
                <img src={img} alt={title} />
              </div>
              <div className="text-center text-sm-start">
                <h2>{title}</h2>
                <h4>${price}</h4>
                <button className="btn bg-transparent text-primary fs-4 p-0 border-0" onClick={()=>removeItem(id)}>
                  remove
                </button>
              </div>
            </div>

            <div className="d-flex justify-content-center align-items-center">
              <button className="border-0 fs-3 d-flex align-items-center text-primary" onClick={()=>decrease(id)}>
                <FaMinus />
              </button>
              <h5 className="px-3 fs-3">{amount}</h5>
              <button className="border-0 fs-3 d-flex align-items-center text-primary" onClick={()=>increase(id)}>
                <FaPlus />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Main;
