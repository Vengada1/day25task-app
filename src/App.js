import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Sidebarcomp from './Components/Sidebar/LayoutSidebar'
import Header from './Components/Mainbar/Header/Header';
import Footercomp from './Components/Mainbar/Footer';
import DashboardHading from './Components/Mainbar/dashboardHeading';
import SmallCards  from './Components/Mainbar/Smallcard';
import EarningOverview from './Components/Mainbar/Earningchart/earningOverview';
import Projects from './Components/Mainbar/projects';

function App() {
  return (<div className="App">
            <div className='contMain'>
              <div className='cont1'>   
                <Sidebarcomp  ></Sidebarcomp>
              </div>
              <div className='cont2'>
                <Header ></Header>
                <div className="container-fluid">
                  <div className=" mb-4" style={{paddingTop:'30px'}}>
                    <DashboardHading/>
                    <SmallCards/>
                    <EarningOverview/>
                    <Projects/>  
                  </div>
                </div>
              <Footercomp />
              </div>
            </div>
          </div>
  )
}

export default App;