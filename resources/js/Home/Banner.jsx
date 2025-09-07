import React from "react";

function Banner() {
  const sliders = [
    {

      large: "images/Banner/تطوع كبير.jpg" ,
      medium: "images/Banner/تطوع وسط.jpg",
      small: "images/Banner/تطوع صغير.jpg",
    },
    {
      large: "images/Banner/عيش وملح كبير.jpg",
      medium:"images/Banner/عيش وملح وسط.jpg",
      small: "images/Banner/عيش وملح صغير.jpg",
    },
    {
      large: "images/Banner/نخيل كبير.jpg",
      medium: "images/Banner/نخيل وسط.jpg",
      small: "images/Banner/نخيل صغير.jpg",
    },
  ];

  return (
    <div>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
      >
        {/* indicators */}
        <ol className="carousel-indicators">
          {sliders.map((_, index) => (
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
            <div
              key={index}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
            >
              <picture>
                {/* Small  */}
                <source media="(max-width: 576px)" srcSet={slider.small} />
                {/* Medium */}
                <source media="(max-width: 992px)" srcSet={slider.medium} />
                {/* Large  */}
                <img
                  src={slider.large}
                  className="d-block w-100"
                  alt={`Slide ${index + 1}`}
                />
              </picture>
            </div>
          ))}
        </div>

        {/* controls */}
        <button
          className="carousel-control-prev"
          type="button"
          data-target="#carouselExampleIndicators"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-target="#carouselExampleIndicators"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Banner;



