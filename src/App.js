import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import About from './Components/About';
import Bussiness from './Components/Bussiness';
import Contact from './Components/Contact';
import Csr from './Components/Csr';
import Digital from './Components/Digital';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Join from './Components/Join';
import Navbar from './Components/Navbar';
import Talent from './Components/Talent';
import Teamdetail from './Components/Teamdetail';
import Topheader from './Components/Topheader';
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom"
import ScrolToTop from './ScrolToTop';
import Learningcafe from './Components/Learningcafe';
import Signin from './Components/Signin';
import Addnews from './News & Event/Addnews';
import Allnews from './News & Event/Allnews';
import Admin from './News & Event/Admin';
import News from './Components/News';
import Organization from './Products/Organization';
import Recruitment from './Products/Recruitment';
import HRPolicy from './Products/HrPolicy';
import RecruitmentServices from './Products/RecruitmentServices';
import TrainingSolutions from './Products/TrainingSolutions';
import SpecializedTraining from './Products/SpecializedTraining';
import OrganizationalDiagnosis from './Products/OrganizationalDiagnosis';
import BehaviouralDiagnosis from './Products/BehaviouralDiagnosis';
import EmployeeManagement from './Products/EmployeeManagement';
import DigitalProducts from './Products/DigitalProducts';
function App() {
  return (
    <div>
      <Router>
      <Topheader/>
      <Navbar/>
        <ScrolToTop/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/bussiness-soloution' element={<Bussiness/>}/>
        <Route path='/talent-soloution' element={<Talent/>}/>
        <Route path='/digital-soloution' element={<Digital/>}/>
        <Route path='/csr-policy' element={<Csr/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/news-&-events' element={<News/>}/>
        <Route path='/join' element={<Join/>}/>
        <Route path='/team' element={<Teamdetail/>}/>
        <Route path='/learning-cafe' element={<Learningcafe/>}/>
        <Route path='/organization-design' element={<Organization/>}/>
        <Route path='/recruitment-&-selection' element={<Recruitment/>}/>
        <Route path='/HR-policy' element={<HRPolicy/>}/>
        <Route path='/recruitment-services' element={<RecruitmentServices/>}/>
        <Route path='/employees-training' element={<TrainingSolutions/>}/>
        <Route path='/specialized-training' element={<SpecializedTraining/>}/>        
        <Route path='/organizational-diagnosis' element={<OrganizationalDiagnosis/>}/>                
        <Route path='/behavioural-diagnosis' element={<BehaviouralDiagnosis/>}/>                
        <Route path='/employee-management' element={<EmployeeManagement/>}/> 
        <Route path='/our-digital-products' element={<DigitalProducts/>}/>  
        {/* <Route path='/signup' element={<Signup/>}/> */}
        <Route path='/admin' element={<Signin/>}/>
        <Route path='/adminpanel' element={<Admin/>}>
        <Route index element={<Navigate to="Addnews"/>}/>
        <Route path='addnews' element={<Addnews/>}/>
        <Route path='allnews' element={<Allnews/>}/>
        </Route>
      </Routes>
      <Footer/>
      </Router>
    </div>
  );
}

export default App;
