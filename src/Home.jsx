import React, { useContext } from "react";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import { AppContext } from "./context/AppContextProvider";

const Home = () => {
  const { loading,total,clearAll,cart } = useContext(AppContext);
  return (
    <div>
      {loading ? (
        <h1 className="text-center" style={{marginTop:"10rem"}}>Loading...</h1>
      ) : (
        <>
          <Navbar />
          <Main />
          <div className={`${cart.length==0 ? "d-none" : "text-center mt-3 border-top border-1 border-dark btnDiv m-auto p-3"}`}>
            <h4 className="d-flex justify-content-between align-items-center"><span>TOTAL</span><span>${total}</span></h4>
            <button className="btn border border-1 border-danger px-5 py-2 fs-5 fw-bold text-danger" onClick={clearAll}>
              CLEAR ALL
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
