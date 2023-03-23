import { Sidebar, Menu, MenuItem,SubMenu} from 'react-pro-sidebar';
import './style.css'
import { FaLaughWink } from 'react-icons/fa';
import { AiFillDashboard} from 'react-icons/ai';
import { IoMdSettings} from 'react-icons/io';
import { TiSpanner,TiChartArea} from 'react-icons/ti';
import {  MdFolderShared} from 'react-icons/md';
import {  BsTable} from 'react-icons/bs';


function Sidebarcomp () {

return (
    <div style={{ display: 'flex', height: "100vh" }}> {/* this affecting main bar*/}
      <Sidebar style={{background:"rgb(68 106 215)",textAlign:'left'}}>
        <Menu style={{background:"rgb(68 106 215)"}}>
          {/* bradn title and logo */}
        <div  className='brandName'>
            <FaLaughWink className='emoji'/>
            <span className='companyName'>SB ADMIN &nbsp;<sup>2</sup></span>
        </div><hr />
          <MenuItem style={{background:"blue",color:'white'}}><AiFillDashboard /> Dashboard</MenuItem>
            <hr />
            <SubMenu /*{"...props"}*/ label={           <span><IoMdSettings/>Components</span>
              } style={{background:"blue",color:'white'}} >
                
                <div className='subTabHead'> CUSTOM COMPONENTS:</div><hr />
                <MenuItem > Pie charts</MenuItem>
                <MenuItem> Line charts</MenuItem>
                <MenuItem> Bar charts</MenuItem>
              </SubMenu>
            <SubMenu label={<span><TiSpanner/>Utilities</span>} style={{background:"blue",color:'white'}}>
              <div className='subTabHead'>CUSTOM UTILITIES:</div><hr />
                <MenuItem> Colors</MenuItem>
                <MenuItem> Borders</MenuItem>
                <MenuItem> Animations</MenuItem>
                <MenuItem> Other</MenuItem>
          </SubMenu>  <hr />
          <SubMenu label={<span><MdFolderShared />Pages</span>} style={{background:"blue",color:'white'}}>
              <div className='subTabHead'>CUSTOM UTILITIES:</div><hr />
                <MenuItem> Colors</MenuItem>
                <MenuItem> Borders</MenuItem>
                <MenuItem> Animations</MenuItem>
                <MenuItem> Other</MenuItem>
              </SubMenu>
          <MenuItem style={{background:"blue",color:'white'}}><TiChartArea/> Charts</MenuItem>
          <MenuItem style={{background:"blue",color:'white'}}><BsTable/> Tables</MenuItem>
          
        </Menu>
      </Sidebar>
      <main>
      
      </main>
    </div>
  );
}
export default Sidebarcomp ;