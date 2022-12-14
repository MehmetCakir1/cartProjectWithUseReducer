import React, { useContext } from "react";
import { AppContext } from "../context/AppContextProvider";

const Navbar = () => {
  const {amount}=useContext(AppContext)
  return (
    <nav className="navbar container-fluid bg-primary text-light d-flex justify-content-between align-items-center px-5">
      <p className="text-light fw-bold fs-4">Reducer App</p>
      <div className="cart">
        <svg className="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M16 6v2h2l2 12H0L2 8h2V6a6 6 0 1 1 12 0zm-2 0a4 4 0 1 0-8 0v2h8V6zM4 10v2h2v-2H4zm10 0v2h2v-2h-2z" />
        </svg>
        <div className="nav-amount bg-light text-dark fw-bold fs-5 rounded-circle px-2">{amount}</div>
      </div>
     
    </nav>
  );
};

export default Navbar;
