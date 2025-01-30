import sale from "../assets/images/sale-image.jpg"

//Sale Image Components
function Saleimage() {
    return (
      <div className="saleimg">
        <img src={sale} alt="img" style={{ width: "100%" }}></img>
        <div className="saleimg__offer">
          <h1>Udemy Flash Sale! 24 hours to save.</h1>
          <p>Get the top Courses for just 499. Just one day to save but a lifetime to learn.</p>
        </div>
      </div>
    )
  }

  export default Saleimage