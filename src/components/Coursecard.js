import one from "../assets/images/c1.jpg"
import two from "../assets/images/c2.jpg"
import three from "../assets/images/c3.jpg"
import four from "../assets/images/c4.jpg"

//Course-card Components
function Coursecard()
{
  return(
    <div className="coursecard" style={{margin: "10px"}}>
      <div>
        <h1>Recommended For You</h1>
        <p>Pick The Best Fit</p>
      </div>
      <div className="coursecard__images">
        <div className="coursecard__images__s1">
          <img src={one} alt="img"></img>
          <p>Python Data Visaulaisation Masterclass 2023</p>
          <p>Col Steele</p>
          <p>4.9 ⭐⭐⭐⭐</p>
          <p>499 <span>1449</span></p>
        </div>
        <div className="coursecard__images__s1">
          <img src={two} alt="img"></img>
          <p>Basic to Advance Programming With EMC</p>
          <p>Col Steele</p>
          <p>4.3 ⭐⭐⭐⭐</p>
          <p>699 <span>1699</span></p>
        </div>
        <div className="coursecard__images__s1">
          <img src={three} alt="img"></img>
          <p>Web Development Bootcamp 2023</p>
          <p>Col Steele</p>
          <p>3.8 ⭐⭐⭐</p>
          <p>399 <span>1399</span></p>
        </div>
        <div className="coursecard__images__s1">
          <img src={four} alt="img"></img>
          <p>Master UI/UX Designing With Figma</p>
          <p>Col Steele</p>
          <p>4.9 ⭐⭐⭐⭐⭐</p>
          <p>799 <span>1799</span></p>
        </div>
      </div>
    </div>
  )
}

export default Coursecard