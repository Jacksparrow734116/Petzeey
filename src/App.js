
import './App.css';
import LoginForm from './components/LoginForm';
import LoginImgTitle from './components/Login-WebImgTitle';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Dashboard from './components/Dashboard';
import NewAppointment from './components/NewAppointment';
import Review from './components/Review';
function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={
          <div className="App">
            <LoginImgTitle />
            <div className='vertical-line'></div>
            <LoginForm />
          </div>
        } />
       
       <Route path='/dashboard' element={<Dashboard/>}></Route>
       <Route path='/newAppointment' element={<NewAppointment/>}></Route>
       <Route path='/review/:id' element={<Review />}></Route>
      </Routes>
    </Router>
   
  );
}

export default App;
