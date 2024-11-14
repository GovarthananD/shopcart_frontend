import React, { useEffect } from "react";
import person from "../asset/person.png";
import cart from "../asset/cart.png";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getData, setSelectedItem } from "../redux/productslice";




function ProductDetails() {

  const { id } = useParams();
  const dispatch = useDispatch();
  const { selectedItem, women } = useSelector((state) => state.products);

  const item = selectedItem || women.find((item) => item.id === parseInt(id));

  useEffect(() => {
    if (!item) {
      dispatch(getData(id));
    } else {
      dispatch(setSelectedItem(item))
    }
  }, [item, id, dispatch]);

  if (!item) return <p>Loading item details...</p>;

  return (
    <div>

      <nav class="navbar navbar-expand-lg bg-dark" data-bs-theme="dark" border-body fixed-top>
        <div class="container-fluid">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <a class="navbar-brand" href="/home">SHOP CART</a>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0" >
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/home">Home</a>
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
      {/* <img src={product.image} alt="pic" />
            <p>${product.title}</p>
            <h5>{product.price}</h5> */}

      {/* <div className="detail-card-container">
        <p>uygtyftycucty</p>
      <img src={product.image} class="img-thumbnail" alt="..."/>
        <div >
          <h4>{product.title}</h4>
          <h3>{product.price}</h3>
          <p>{product.description}</p>
        </div>
      </div> */}
     
     <div className="card-container">
      <div class="card" style={{ width: "70rem" }} className="detail-card">
        <img src={item.image} class="card-img-top" alt="..." className="detail-img"/>
        <div>
          <h3>{item.title}</h3>
          <h5>₹ {item.price}</h5>
          <p>{item.description}</p>
          <div className="detail-btn">
          <button type="button" class="btn btn-secondary">Buy Now</button>
          <button type="button" class="btn btn-secondary">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>



    </div>

  )
}

export default ProductDetails;