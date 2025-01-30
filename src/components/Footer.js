//Footer Components
function Footer() {
    return (
      <div className="footer" style={{ padding: "10px", marginTop: "10px" , backgroundColor: "black", color: "white"}}>
        <div className="footer__list">
          <div className="footer__list__s1">
            <ul style={{listStyleType: "none"}}>
              <li>Udemy Business</li>
              <li>Teach on Udemy</li>
              <li>Get the App</li>
              <li>About Us</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="footer__list__s1">
            <ul style={{listStyleType: "none"}}>
              <li>Careers</li>
              <li>Blog</li>
              <li>Help and Support</li>
              <li>Affiliate</li>
              <li>Investors</li>
            </ul>
          </div>
        </div>
        <div className="footer__bottom">
          <h1>Udemy</h1>
          <p>&copy; Udemy,Inc</p>
        </div>
      </div>
    )
  }

  export default Footer