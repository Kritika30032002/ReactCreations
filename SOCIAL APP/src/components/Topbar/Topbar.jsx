import "./Topbar.css"
import {Search , Person , Chat , Notifications,} from "@mui/icons-material";
import CallIcon from '@mui/icons-material/Call';
import { useNavigate } from 'react-router-dom';
const Topbar = () => {
  const navigate = useNavigate();

  const handleCallIconClick = () => {
    navigate('/contact');
  };

  const handlePersonClick = () => {
    navigate('/profile');
  }

  const handleLogoClick = () => {
    navigate('/');
  }
  
  return (
    <>
    <div className="topbarContainer" >
    <div className="topbarLeft" onClick={handleLogoClick}>
      <span className="logo" >
        Lamasocial
      </span>
    </div>
    
    <div className="topbarCenter">
      <div className="searchbar">
        <Search />
        <input placeholder="Search for friend, post or video" type="text" className="searchInput" />
      </div>
    </div>
    
    <div className="topbarRight">

      <div className="topbarlinks">

        <span className="topbarlink">Homepage</span>
        <span className="topbarlink">Timeline</span>


      </div>
      <div className="topbaricons">

        <div className="topbarIconItem">
        <Person onClick={handlePersonClick}/>
        <span className="topbarIconBadge">1</span>

      </div>
      <div className="topbarIconItem">
        <Chat/>
        <span className="topbarIconBadge">1</span>

      </div>
      <div className="topbarIconItem">
        <Notifications/>
        <span className="topbarIconBadge">1</span>

      </div>
      <div className="topbarIconItem" onClick={handleCallIconClick}>
        <CallIcon/>
        {/* <span className="topbarIconBadge">1</span> */}
      </div>



      </div>
      <div>
        <img src="/assets/person/1.jpeg" alt="" className="topbarImg"/>
      </div>

    </div>
    </div>

    </>

  )
}

export default Topbar