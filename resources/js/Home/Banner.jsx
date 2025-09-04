import React from 'react';

function Banner() {
  const sliders = [
    { image: "images/Banner/تطوع كبير.jpg" },
    { image: "images/Banner/عيش وملح كبير.jpg" },
    { image: "images/Banner/نخيل كبير.jpg" },
  ];

  return (
    <div>
      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">

        {/* indicators */}
        <ol className="carousel-indicators">
          {sliders.map((slider, index) => (
            <li
              key={index}
              data-target="#carouselExampleIndicators"
              data-slide-to={index}
              className={index === 0 ? "active" : ""}
            ></li>
          ))}
        </ol>

        {/* images */}
        <div className="carousel-inner">
          {sliders.map((slider, index) => (
            <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
              <img src={slider.image} className="d-block w-100" alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </div>

        {/* controls */}
        <button className="carousel-control-prev" type="button" data-target="#carouselExampleIndicators" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </button>

        <button className="carousel-control-next" type="button" data-target="#carouselExampleIndicators" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Banner;
