import React from "react";
import person from "../asset/person.png";
import cart from "../asset/cart.png";
import {useNavigate} from "react-router-dom";


function Fashion() {
  const navigate = useNavigate()

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
    <h1 className="fashion-h1">FASHION CLOTHS</h1>
    <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="https://m.media-amazon.com/images/G/31/img21/MA2024/JUPITER/PHASE3/SD/HERO/PC/Buy_more_save_more_1500x460._CB545102217_.png" class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img src="https://m.media-amazon.com/images/G/31/img21/MA2024/JUPITER/PHASE3/SD/HERO/PC/Ethnic_1500x460._CB545102217_.png" class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img src="https://m.media-amazon.com/images/G/31/img21/MA2024/JUPITER/PHASE3/SD/HERO/PC/Most_loved_brands__T-shirts_jeans__more_copy_1_1500x460._CB545102217_.png" class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img src="https://m.media-amazon.com/images/G/31/img21/MA2024/JUPITER/STEAL_DEALS/winter_1500x460._CB543355142_.png" class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img src="https://m.media-amazon.com/images/G/31/img21/MA2024/JUPITER/PHASE3/SD/HERO/PC/Premium_clothing_lacoste_min40_1500x460._CB545102217_.png" class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img src="https://m.media-amazon.com/images/G/31/img21/MA2024/JUPITER/PHASE3/SD/HERO/PC/New_launches_1500x460_1._CB545102217_.png" class="d-block w-100" alt="..." />
        </div>
      </div>
    </div>

    <div className="card-container">
      <div class="card" style={{ width: "35rem" }}>
        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img24/Fashion/Event/Jupiter24/AF/Phase3/Bankstripes/V1/PC_phase_3B.jpg" class="card-img-top" alt="..." />
      </div>
      <div class="card" style={{ width: "35rem" }}>
        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img24/Fashion/Event/Jupiter24/AF/Phase3/Bankstripes/V1/PC_phase_3B.jpg" class="card-img-top" alt="..." />
      </div>
    </div>

    <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="https://m.media-amazon.com/images/G/31/img2020/fashion/WA_2020/gif/event/Womens_Hero_pc-1._CB562560485_.gif" class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img src="https://m.media-amazon.com/images/G/31/img2020/fashion/WomensApparel2024/Jupiter/Womens-Hero_pc_Kurta-Page._CB562457941_.gif" class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img src="https://m.media-amazon.com/images/G/31/img23/WA/2024/sept/jupiter/kurta/hero/New_Launch_1500x400._CB562046800_.png" class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img src="https://m.media-amazon.com/images/G/31/img23/WA/2024/sept/jupiter/kurta/hero/Kurtas_sets__more_1500x400._CB562046800_.png" class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img src="https://m.media-amazon.com/images/G/31/img23/WA/2024/sept/jupiter/kurta/hero/Kurtas_sets__more_1500x400._CB562046800_.png" class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img src="" class="d-block w-100" alt="..." />
        </div>
      </div>

    </div>

    <div >
      <h1 className="fashion-h1">CHOOSE YOUR GENDER</h1>
      <div className="couples">
        <div className="couples2" onClick={()=>navigate("/men")}><img className="couples-img" src="https://img.freepik.com/free-photo/elegant-young-handsome-man_1301-5870.jpg?ga=GA1.1.735808131.1721850184&semt=ais_hybrid" class="rounded mx-auto d-block" alt="..." /></div>
        <div className="couples2" onClick={()=>navigate("/women")}><img className="couples-img" src="https://img.freepik.com/premium-photo/skirt-is-long-sleeved-shirt-with-skirt_662214-60686.jpg?ga=GA1.1.735808131.1721850184&semt=ais_hybrid" class="rounded mx-auto d-block" alt="..." /></div>
      </div>
      
    </div>

  </div>)
}

export default Fashion;