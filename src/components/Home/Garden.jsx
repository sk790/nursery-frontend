const Garden = () => {
  return (
    <section className="banner-grid">
      <div className="banner-title">Garden Decor & Care</div>
      <div className="banner-section">
        <div className="left-garden">
          <div className="banner-left1">
            <img src="Images/garden1.jpg" alt="" />
            <div className="banner-text">
              <div className="tital-image">Planters - Starting ₹129</div>
              <div className="discription-image">
                Add color to your garden. 400+ pots of different colors, shapes,
                and materials.
              </div>
              <button className="button-shop">Shop Now</button>
            </div>
          </div>
          <div className="banner-left1">
            <img src="Images/garden2.jpg" alt="" />
            <div className="banner-text">
              <div className="tital-image">
                Soil & Fertilizers - Starting ₹100
              </div>
              <div className="discription-image">
                Healthy food is a key for healthy plants. Choose from a wide
                range of soil and fertilizers.
              </div>
              <button className="button-shop">Shop Now</button>
            </div>
          </div>
        </div>
        <div className="right-garden">
          <div className="banner-right1">
            <img src="Images/garden3.jpg" alt="" />
            <div className="banner-text">
              <div className="tital-image">Pebbles - Starting ₹79</div>
              <div className="discription-image">
                Add visual and textural features to your garden with a wide
                range of natural pebbles.
              </div>
              <button className="button-shop">Shop Now</button>
            </div>
          </div>
          <div className="banner-right1">
            <img src="Images/garden4.jpg" alt="" />
            <div className="banner-text">
              <div className="tital-image">Tools - Starting ₹129</div>
              <div className="discription-image">
                Get a tool for every gardening activity and make it a fun
                experience.
              </div>
              <button className="button-shop">Shop Now</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Garden;
