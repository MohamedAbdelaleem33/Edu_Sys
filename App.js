import Home from './components/Home';
import Register from './components/Register';
import RegisterLec from './components/RegisterLec';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Profile from './components/Profile';
import EditProfile from './components/EditProfile';
import Assignment from './components/Assignment';
import AssDB from './components/AssDB';
import AssComm from './components/AssComm';
import AdminAss from './components/AdminAss';


function App() {
    return (
        <Router>
            <Routes>
                <Route exact path='/' element={<Home />}></Route>
                <Route exact path='/register' element={<Register />}></Route>
                <Route exact path='/registerlec' element={<RegisterLec />}></Route>
                <Route exact path='/login' element={<Login />}></Route>
                <Route exact path='/profile' element={<Profile />}></Route>
                <Route exact path='/editprofile' element={<EditProfile/>}></Route>
                <Route exact path='/editprofile' element={<EditProfile/>}></Route>
                <Route exact path='/Assignment' element={<Assignment/>}></Route>
                <Route exact path='/AssDB' element={<AssDB/>}></Route>
                <Route exact path='/AssComm' element={<AssComm/>}></Route>
                <Route exact path='/AdminAss' element={<AdminAss/>}></Route>

            </Routes>
        </Router>
    )
}

export default App;