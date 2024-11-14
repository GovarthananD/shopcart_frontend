import React, { useEffect } from "react";
import person from "../asset/person.png";
import cart from "../asset/cart.png";
import { useDispatch, useSelector } from "react-redux";
import { getToys, setSelectedItem } from "../redux/productslice";
import { useNavigate } from "react-router-dom";

function Toys() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {women} = useSelector((state) => state.products)

  useEffect(() => {
    dispatch(getToys())
  }, [dispatch])

  const handleClick = (pro) => {
    dispatch(setSelectedItem(pro));
    navigate(`/toys/${pro._id}`)
  }
  return (<div>

    <nav class="navbar navbar-expand-lg bg-dark" data-bs-theme="dark" border-body fixed-top>
      <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <a class="navbar-brand" href="/">SHOP CART</a>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0" >
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li class="nav-item">
              {/* <img  src={profile} alt="pic" /> */}
              <img src={person} className="profile" alt="Bootstrap" width="20" height="20" />
            </li>
            <li class="nav-item">
              <img src={cart} className="profile2" alt="Bootstrap" width="30" height="30" />
            </li>
          </ul>
          <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>

    <div className="womens-container">
    {women.getToys?.map((pro,index) =>{
      return (
        <div className="womens-card" key={pro.index}>
            <img src={pro.image} alt="pic" style={{ width: "100%" }} />
            <div className="container">
              <p>{pro.title}</p>
              <h5>₹ {pro.price}</h5>
              <button type="button" class="btn btn-secondary" onClick={()=>handleClick(pro)}>View</button>
            </div>
          </div>
      )
    })}
  </div>


  </div>)
}

export default Toys;