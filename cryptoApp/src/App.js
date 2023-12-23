import logo from './logo.svg';
import './App.css';
import Alert from './components/Alart';
import Header, { header } from './components/Header';
import Homepage from './pages/Homepage';
import Coinpage from  './pages/Coinpage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useNavigate } from 'react-router-dom'
import {makeStyles} from '@material-ui/core/styles';
const useStyles=makeStyles(()=>({
  App:{
backgroundColor:"#14161a",
color: "white",
minHeight: "100vh",
  },
}));
function App() {

  const classes=useStyles()
  return (
    <div className={classes.App}>
    <Header/>
      <BrowserRouter>
      
      
       
        <Routes>
        
          <Route path='/' element={<Homepage />} />
          <Route path='/coins/:id' element={<Coinpage />} />
        </Routes>
        
      </BrowserRouter>
      <alert/>
    </div>
   
  );
}

export default App;
