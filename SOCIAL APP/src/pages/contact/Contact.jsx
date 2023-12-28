import Topbar from "../../components/Topbar/Topbar";
import Sidebar from "../../components/Sidebar/Sidebar";
// import Feed from "../../components/Feed/Feed";
// import Rightbar from "../../components/Rightbar/Rightbar";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import "./Contact.css"

const Contact = () => {
  return (
    <>
      <Topbar />
      <div className="contactContainer">
        <Sidebar  className="sidebar"/>
        {/* <Feed className="feeds"/> */}
        {/* <Rightbar className="rightbar"/> */}
        <div className="contact">
          Contact:
          <div className="contactIcon">
            <span><WhatsAppIcon/></span>
            <span>+91 96**7 849**</span>
          </div>
          <div className="contactIcon">
            <LinkedInIcon/> 
          </div>
          <div className="contactIcon">
            <InstagramIcon/> 
          </div> 
        </div>
        
      </div>
    </>
  );
}


export default Contact