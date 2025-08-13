import React from 'react'

function Banner({ sliders }) {
  return (
    <div>

      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">

        <ol className="carousel-indicators">
          {sliders.map((slider, index) => (
            <li key={index} data-target="#carouselExampleIndicators" data-slide-to={index} className="active"></li>
          )
          )}
        </ol>

        <div className="carousel-inner">

          {sliders.map((slider, index) => (
            <div key={index} className={`carousel-item ${!index ? 'active' : null}`}>
              <img src={`/storage/${slider.image}`} className="d-block w-100" alt="..." />
            </div>
          )
          )}

        </div>

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
  )
}

export default Banner
