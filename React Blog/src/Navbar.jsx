import { NavLink } from 'react-router-dom';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import SearchIcon from '@mui/icons-material/Search';
import Typography from '@mui/material/Typography';
// import Link from '@mui/material/Link';

const Navbar = () => {
  return (
    <div>
      <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>

        <Button size="small"
        
        
        
        >
          <NavLink to="/"  className="abc">HOME</NavLink>

        </Button>
        <Button size="small">
        <NavLink to="/about" className="abc">ABOUT</NavLink>

        </Button>
        <Button size="small">
        <NavLink to="/contact" className="abc">CONTACT</NavLink>


        </Button>
        
        <Typography
          component="h1"
          variant=""
          color="inherit"
          align="center"
          noWrap
          sx={{ flex: 1 }}
        >

          RaghavBlog
          
        </Typography>


        <IconButton>
          <GitHubIcon/>
      
        </IconButton>
        
        <IconButton>
          <TwitterIcon/>
      
        </IconButton>
        <IconButton>
          <LinkedInIcon/>
      
        </IconButton>
        

        <Button variant="contained">

        <NavLink to="/blog" className="def">BLOG</NavLink>

        </Button>

          
      </Toolbar>
       
       
    </div>
  )
}

export default Navbar