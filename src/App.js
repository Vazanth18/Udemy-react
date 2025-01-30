import Navbar from "./components/Navbar"
import List from "./components/List"
import Saleimage from "./components/Saleimg"
import Coursecard from "./components/Coursecard"
import Topics from "./components/Topics"
import Popularcourse from "./components/Popularcourse"
import Footer from "./components/Footer"

function App()
{
  return(
    <div>
      <Navbar></Navbar>
      <List></List>
      <Saleimage></Saleimage>
      <Coursecard></Coursecard>
      <Topics></Topics>
      <Popularcourse></Popularcourse>
      <Footer></Footer>
    </div>
  )
}

export default App