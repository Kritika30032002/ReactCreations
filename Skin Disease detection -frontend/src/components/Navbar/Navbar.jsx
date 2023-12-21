import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>

      <div className="left">

        <img src="public/asset/logo1.jpg" alt="" className="logo1" />

      </div>

      <div className="center">
        <ul>

            <li><a href="/home">HOME</a></li>
            <li><a href="/aboutus">ABOUT US</a></li>
            <li><a href="/contact">CONTACT US</a></li>

            </ul>


      </div>

      <div className="right">

      <a href='#'><button className='ab'>
      <span className="button_top"> 
      
       SCAN/ANALYSE 
        </span>
        </button></a>

      </div>



    </div>
  )
}

export default Navbar