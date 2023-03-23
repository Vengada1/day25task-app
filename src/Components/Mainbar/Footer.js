import {CardFooter} from 'reactstrap'
// import { Search1 } from './Components/Mainbar/Header/searchbox';
const Footercomp =()=>{
    const mystyle={backgroundColor:'lightgreen',width:"100%",height:"50px",display:'flex',alignItems: "center",textAlign: "center",justifyContent:'center'
    }

  return    <CardFooter style={mystyle}>Copyright &copy; Your Website 2021 </CardFooter>
                
}



export default Footercomp;