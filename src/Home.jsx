import React from "react";

function Home(props) {
  return (
    <>
      <body>
        <div className="container">
          <div className="side-cake-img">
            <img
              className="img-fluid"
              src={`${process.env.PUBLIC_URL}/assets/rainbow-cupcake.jpg`}
              alt="logo"
            />
            <img
              className="img-fluid"
              src={`${process.env.PUBLIC_URL}/assets/rainbow-cupcake.jpg`}
              alt="logo"
            />
            <img
              className="img-fluid"
              src={`${process.env.PUBLIC_URL}/assets/rainbow-cupcake.jpg`}
              alt="logo"
            />
          </div>
          <div className="text-box" id="title">
            <h1>Cake Kart</h1>
            <p>Love at first bite</p>
            <h3>Unleash your sweetest dreams with our heavenly cup cakes!</h3>
            <button type="submit" className="start-button">Get started</button>
          </div>
          <div className="main-cake-img">
            <img
              className="img-fluid"
              src={props.image}
              alt="logo"
            />
          </div>
        </div>
      </body>
    </>
  );
}
export default Home;
