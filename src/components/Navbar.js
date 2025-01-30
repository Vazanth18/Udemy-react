import search from "../assets/images/search.png"
import shopping from "../assets/images/shopping-cart.png"
import bell from "../assets/images/bell.png"
import user from "../assets/images/user.png"

function Navbar() {
  return (
    <div className="navbar">

      <div className="navbar__section">
        <h1 style={{fontSize: "42px", color: "#863DB5"}}>Udemy</h1>
      </div>

      <div className="navbar__input">
        <img src={search} alt="" style={{width: "20px", padding: "2px"}}></img>
        <input type="text" placeholder="Search for anything to here.,Tech,Business,Art" style={{width: "800px", padding: "10px", border: "none",}}></input>
      </div>

      <div className="navbar__list" style={{fontSize: "18px"}}>
          <p>Courses</p>
          <p>My Learning</p>
          <img src={shopping} alt="img" style={{width: "20px"}}></img>
          <img src={bell} alt="img" style={{width: "20px"}}></img>
          <img src={user} alt="img" style={{width: "20px"}}></img>
      </div>
    </div>
  )
}

export default Navbar