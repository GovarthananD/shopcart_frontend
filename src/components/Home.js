import React, {useState} from "react";
import "react-multi-carousel/lib/styles.css";
import Slider from "react-slick";
import facebook from "../asset/facebook.png";
import instagram from "../asset/instagram.png";
import linkedin from "../asset/linkedin.png";
import youtube from "../asset/youtube.png";
import twitter from "../asset/twitter.png";
import cart from "../asset/cart.png";
import { useNavigate } from "react-router-dom";





function Home() {
  const navigate = useNavigate()
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState('');

  const handleSearch = async (e) => {
    const searchQuery = e.target.value;
    setQuery(searchQuery);

    if (!searchQuery) {
      setProducts([]); // Clear results if search query is empty
      return;
    }

    try {
      const response = await fetch(`http://localhost:8000/search?query=${searchQuery}`);
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 6,
    speed: 500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  var settingss = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }


  return (<div>

    <nav class="navbar navbar-expand-lg bg-dark" data-bs-theme="dark" border-body fixed-top>
      <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <a class="navbar-brand" href="/home">SHOP CART</a>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0" >
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li class="nav-item">
              
            </li>
            <li class="nav-item">
            <img src={cart} className="profile2" alt="Bootstrap" width="30" height="30"/>
            </li>
          </ul>
          <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={query}
            onChange={handleSearch} />
            <button class="btn btn-outline-success" type="submit" onSearch={handleSearch}>Search</button>
          </form>
        </div>
      </div>
    </nav>

    <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1729519112/Croma%20Assets/CMS/Homepage%20Banners/HP%20Rotating/2024/oct/22102024/Desktop/HP_Rotating_Laptops_22oct2024_ji1cbb.jpg" class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1729519111/Croma%20Assets/CMS/Homepage%20Banners/HP%20Rotating/2024/oct/22102024/Desktop/HP_Rotating_iPhone16Pro_22oct2024_lnxdhz.jpg" class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1729574773/Croma%20Assets/CMS/LP%20Page%20Banners/2024/Sanity/HP/Oct/22102024/HP_Rotating_TV_22oct2024_w0ehgn.jpg" class="d-block w-100" alt="..." />
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>


    <div className="slider-div">
      <Slider {...settings}>
        <div onClick={()=>navigate("/fashion")}>
          <img className="swipe-img" src="https://img.freepik.com/free-photo/portrait-smiling-beautiful-girl-her-handsome-boyfriend-laughing_158538-4877.jpg?t=st=1729605040~exp=1729608640~hmac=795a0eee1448cff4fdeb1a50b92f9bef38a5970b43f5b541c627ab62fae950d0&w=740" alt="pic" />
          <p className="card-list">FASHION</p>
        </div>
        <div onClick={()=>navigate("/mobiles")}>
          <img className="swipe-img" src="https://img.freepik.com/free-vector/pack-three-mobiles-with-elegant-colored-wallpapers_23-2147667014.jpg?t=st=1729605259~exp=1729608859~hmac=d66943639f21923260d621fb1bdb572182f58cbd8f284e3d3658bc4076653183&w=740" alt="pic" />
          <p className="card-list">MOBILES</p>
        </div>
        <div onClick={()=>navigate("/laptops")}>
          <img className="swipe-img" src="https://img.freepik.com/free-photo/view-3d-laptop-device-with-screen-keyboard_23-2150714071.jpg?t=st=1729605475~exp=1729609075~hmac=b5b9b6feb473714250f5a183c4600ce8eb52257c9949b05f497cda2f2a6330eb&w=740" alt="pic" />
          <p className="card-list">LAPTOPS</p>
        </div>
        <div onClick={()=>navigate("/electronics")}>
          <img className="swipe-img" src="https://img.freepik.com/free-photo/smart-microchip-background-motherboard-closeup-technology-remix_53876-104233.jpg?t=st=1729605392~exp=1729608992~hmac=5e8fa397c3bd3773f93f56ec2f45fdc26df05d83718d9f98210d6e4455a69c37&w=826" alt="pic" />
          <p className="card-list">ELECTRONICS</p>
        </div>
        <div onClick={()=>navigate("/cameras")}>
          <img className="swipe-img" src="https://img.freepik.com/free-photo/camera-equipment-capturing-single-macro-object-generative-ai_188544-12096.jpg?t=st=1729605442~exp=1729609042~hmac=5ae864563abe2db6e7ead5d078754f5184e01dbb34250a5545aead3ffc91046c&w=740" alt="pic" />
          <p className="card-list">CAMERAS</p>
        </div>
        <div onClick={()=>navigate("/grooming")}>
          <img className="swipe-img" src="https://img.freepik.com/premium-photo/hair-care-products-isolated-white-background_621955-41120.jpg?w=740" alt="pic" />
          <p className="card-list">GROOMING</p>
        </div>
        <div onClick={()=>navigate("/books")}>
          <img className="swipe-img" src="https://img.freepik.com/premium-photo/stack-colorful-books_1207614-22506.jpg?w=740" alt="pic" />
          <p className="card-list">BOOKS</p>
        </div>
        <div onClick={()=>navigate("/toys")}>
          <img className="swipe-img" src="https://img.freepik.com/free-vector/baby-toy-set-cute-object-small-children-play-with-wooden-plastic-toys-stuffed-animals-fun-activity-vector-illustration_1150-60611.jpg?t=st=1729605624~exp=1729609224~hmac=4e1d500c6f643d5a81a8ac0892ed95a0fbbd591235f2a7581d3af8528f28d8c6&w=740" alt="pic" />
          <p className="card-list">TOYS</p>
        </div>
        <div onClick={()=>navigate("/snacks")}><img className="swipe-img" src="https://img.freepik.com/free-photo/top-view-cone-shape-corn-snacks-wooden-divided-plate-with-shelled-sunflower-seeds-with-spicy-chips-bucket-with-glass-cola-wooden-table_141793-88565.jpg?t=st=1729605650~exp=1729609250~hmac=4ef858be3d28ee02121c1b014cbe34708ad1923da35ee1f89f13c0d1cbbebaa5&w=826" alt="pic" />
          <p className="card-list">SNACKS</p>
        </div>
        <div onClick={()=>navigate("/beauty")}><img className="swipe-img" src="https://img.freepik.com/free-photo/view-red-lipsticks-arrangement_23-2148978119.jpg?t=st=1729605691~exp=1729609291~hmac=221a712c888ee82892f8e5f3ec41bf370d7cde43f529b1f4e91c0b5a18edcd29&w=826" alt="pic" />
          <p className="card-list">BEAUTY</p>
        </div>
      </Slider>
    </div>

    <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
      <h1 className="white">WHAT'S HOT</h1>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="d-flex justify-content-around">
            {/* First Card */}
            <div className="card" style={{ width: "18rem" }}>
              <img src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1729574866/Croma%20Assets/CMS/LP%20Page%20Banners/2024/Sanity/HP/Oct/22102024/HP_New-at-Croma_Cam_22Oct2024_wkc983.jpg?tr=w-1024" alt="pic" />
            </div>
            {/* Second Card */}
            <div className="card" style={{ width: "18rem" }}>
              <img src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1729510518/Croma%20Assets/CMS/LP%20Page%20Banners/2024/Whats%20Hot/OCT/22102024/Desktop/HP_New-at-Croma_watch_22Oct2024_r34y7r.jpg?tr=w-1024" className="card-img-top" alt="..." />

            </div>
            {/* Third Card */}
            <div className="card" style={{ width: "18rem" }}>
              <img src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1729574868/Croma%20Assets/CMS/LP%20Page%20Banners/2024/Sanity/HP/Oct/22102024/HP_New-at-Croma_MW_22Oct2024_nsx5em.jpg?tr=w-1024" className="card-img-top" alt="..." />

            </div>
          </div>
        </div>

        <div className="carousel-item">
          <div className="d-flex justify-content-around">
            {/* Fourth Card */}
            <div className="card" style={{ width: "18rem" }}>
              <img src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1729574771/Croma%20Assets/CMS/LP%20Page%20Banners/2024/Sanity/HP/Oct/22102024/HP_New-at-Croma_TV_22Oct2024_ujzef4.jpg?tr=w-1024" className="card-img-top" alt="..." />

            </div>
            {/* Fifth Card */}
            <div className="card" style={{ width: "18rem" }}>
              <img src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1729574866/Croma%20Assets/CMS/LP%20Page%20Banners/2024/Sanity/HP/Oct/22102024/HP_DOTD_laptops_22Oct2024_brdgko.jpg?tr=w-1024" className="card-img-top" alt="..." />

            </div>
            {/* Sixth Card */}
            <div className="card" style={{ width: "18rem" }}>
              <img src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1729574782/Croma%20Assets/CMS/LP%20Page%20Banners/2024/Sanity/HP/Oct/22102024/HP_DOTD_AC_22Oct2024_bda4xj.jpg?tr=w-1024" className="card-img-top" alt="..." />

            </div>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>

    <div className="card-container">
      <div class="card" style={{ width: "35rem" }}>
        <img src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1721197736/Croma%20Assets/CMS/Homepage%20Banners/neu_offers_desk_tkq4lf.png?tr=w-1024" class="card-img-top" alt="..." />
      </div>
      <div class="card" style={{ width: "35rem" }}>
        <img src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1717075769/Croma%20Assets/CMS/LP%20Page%20Banners/2024/BAU/HP_2Split_MFYMP_Brands_HDFC_ICIC_30May2024_kzbaou.png?tr=w-1024" class="card-img-top" alt="..." />
      </div>
      <div class="card" style={{ width: "35rem" }}>
        <img src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1728297124/Croma%20Assets/CMS/LP%20Page%20Banners/2024/More%20For%20Your%20Money/October/BAU/Wed%20-%20Federal/HP_2Split_MFYMP_Fedrel1_29April2024_anwuvc.png?tr=w-1024" class="card-img-top" alt="..." />
      </div>
      <div class="card" style={{ width: "35rem" }}>
        <img src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1728297123/Croma%20Assets/CMS/LP%20Page%20Banners/2024/More%20For%20Your%20Money/October/BAU/Wed%20-%20Federal/HP_2Split_MFYMP_Federal2_29April2024_grvn1a.png?tr=w-1024" class="card-img-top" alt="..." />
      </div>
    </div>

    <div>
      <h1 className="white1">FANTASTIC FINDS</h1>
      <div className="card-container">
        <div class="card" style={{ width: "30rem" }}>
          <img src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1729593262/Croma%20Assets/CMS/LP%20Page%20Banners/2024/HP%20Widgets/Oct/Fantastic%20Finds/23rd/HP_CC_Monitor_23oct2024_gdelhl.png?tr=w-1024" class="card-img-top" alt="..." />
        </div>
        <div class="card" style={{ width: "30rem" }}>
          <img src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1729593262/Croma%20Assets/CMS/LP%20Page%20Banners/2024/HP%20Widgets/Oct/Fantastic%20Finds/23rd/HP_CC_Printer_23oct2024_vnyupz.png?tr=w-1024" class="card-img-top" alt="..." />
        </div>
      </div>
    </div>

    <div className="card-container">
      <h1>NO MORE WORRYING ABOUT YOUR APPLIANCES</h1>
      <div class="card" style={{ width: "70rem" }}>
        <img src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1728468984/Croma%20Assets/CMS/LP%20Page%20Banners/2024/Zipcare/HP_SP_ZipCare_4Oct2024_mvgukf.png?tr=w-1024" class="card-img-top" alt="..." />
      </div>
    </div>

    <div className="card-container">
      <h1>EXPERIENCE SHOP CART ON Tata Neu!</h1>
      <div class="card" style={{ width: "70rem" }}>
        <img src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1713377573/Croma%20Assets/CMS/LP%20Page%20Banners/2024/Testing/Hybrid%20Homepage/HP_Neubanner_18April24.png_h4axzq.png?tr=w-1024" class="card-img-top" alt="..." />
      </div>
    </div>

    <div className="slider-container2">
      <Slider {...settingss} >
        <div >
          <img className="list-img" src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1727682981/Croma%20Assets/CMS/Brand%20Logos/2024/Brands%20Icons/30092024/Brands%20Logo/Brands%20Logo/Desktop/13_fbzbpw.png?tr=w-720" class="card-img-top" alt="..." />
        </div>
        <div>
          <img className="list-img" src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1727682981/Croma%20Assets/CMS/Brand%20Logos/2024/Brands%20Icons/30092024/Brands%20Logo/Brands%20Logo/Desktop/12_hfsle3.png?tr=w-720" class="card-img-top" alt="..." />
        </div>
        <div>
          <img className="list-img" src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1727682982/Croma%20Assets/CMS/Brand%20Logos/2024/Brands%20Icons/30092024/Brands%20Logo/Brands%20Logo/Desktop/7_uvvozm.png?tr=w-720" class="card-img-top" alt="..." />
        </div>
        <div>
          <img className="list-img" src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1727682982/Croma%20Assets/CMS/Brand%20Logos/2024/Brands%20Icons/30092024/Brands%20Logo/Brands%20Logo/Desktop/6_cruwwo.png?tr=w-720" class="card-img-top" alt="..." />
        </div>
        <div>
          <img className="list-img" src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1727682982/Croma%20Assets/CMS/Brand%20Logos/2024/Brands%20Icons/30092024/Brands%20Logo/Brands%20Logo/Desktop/5_pjm9wd.png?tr=w-720" class="card-img-top" alt="..." />
        </div>
        <div>
          <img className="list-img" src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1727682981/Croma%20Assets/CMS/Brand%20Logos/2024/Brands%20Icons/30092024/Brands%20Logo/Brands%20Logo/Desktop/11_tc1idk.png?tr=w-720" class="card-img-top" alt="..." />
        </div>
        <div>
          <img className="list-img" src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1727682982/Croma%20Assets/CMS/Brand%20Logos/2024/Brands%20Icons/30092024/Brands%20Logo/Brands%20Logo/Desktop/4_wmg1qj.png?tr=w-720" class="card-img-top" alt="..." />
        </div>
        <div>
          <img className="list-img" src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1727682982/Croma%20Assets/CMS/Brand%20Logos/2024/Brands%20Icons/30092024/Brands%20Logo/Brands%20Logo/Desktop/3_voajbz.png?tr=w-720" class="card-img-top" alt="..." />
        </div>
        <div>
          <img className="list-img" src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1727682981/Croma%20Assets/CMS/Brand%20Logos/2024/Brands%20Icons/30092024/Brands%20Logo/Brands%20Logo/Desktop/1_maspxu.png?tr=w-720" class="card-img-top" alt="..." />
        </div>
        <div>
          <img className="list-img" src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1727682982/Croma%20Assets/CMS/Brand%20Logos/2024/Brands%20Icons/30092024/Brands%20Logo/Brands%20Logo/Desktop/2_bki1il.png?tr=w-720" class="card-img-top" alt="..." />
        </div>
        <div>
          <img className="list-img" src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1727682982/Croma%20Assets/CMS/Brand%20Logos/2024/Brands%20Icons/30092024/Brands%20Logo/Brands%20Logo/Desktop/14_xtc6jg.png?tr=w-720" class="card-img-top" alt="..." />
        </div>
        <div>
          <img className="list-img" src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1727682981/Croma%20Assets/CMS/Brand%20Logos/2024/Brands%20Icons/30092024/Brands%20Logo/Brands%20Logo/Desktop/10_iobxyi.png?tr=w-720" class="card-img-top" alt="..." />
        </div>
      </Slider>
    </div>

    <div className="card-container">
      <h1>WHY SHOP CART?</h1>
      <div class="card" style={{ width: "70rem" }}>
        <img src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1710743309/Croma%20Assets/CMS/Testing/2024/March/18th/Why%20Croma/Desktop/JPG/Why-Croma_t2lgxr.png?tr=w-1024" class="card-img-top" alt="..." />
      </div>
    </div>

    <div className="code"></div>

    <div class="grid text-center" className="footer">
      <div><img className="foot-img" src={youtube} alt="..." /></div>
      <div><img className="foot-img" src={facebook} alt="..." /></div>
      <div><img className="foot-img" src={instagram} alt="..." /></div>
      <div><img className="foot-img" src={linkedin} alt="..." /></div>
      <div><img className="foot-img" src={twitter} alt="..." /></div>
    </div>
    <div className="end"><h6>© Copyright 2024 Shop Cart. All rights reserved</h6></div>

    <div className="container mt-3">
        {products.length > 0 ? (
          <ul>
            {products.map((product) => (
              <li key={product._id}>{product.title}</li>
            ))}
          </ul>
        ) : (
          query && <p>No products found for "{query}"</p>
        )}
      </div>    
      
    

  </div>)
}

export default Home;