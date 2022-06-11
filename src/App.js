
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Appointment from './Pages/Appointment/Appointment/Appointment';
import Navigation from './Pages/Shared/Navigation/Navigation';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import AuthProvider from './Context/AuthProvider/AuthProvider';
import PrivateRoute from './Pages/Login/Login/PrivateRoute/PrivateRoute';
import DashBoard from './Pages/DashBoard/DashBoard';
import DeshBoardHome from './Pages/DashBoard/DeshBoardHome/DeshBoardHome';
import Footer from './Pages/Shared/Footer/Footer';
import PageNotFound from './Pages/PageNotFound/PageNotFound';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Navigation></Navigation>

        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/home' element={<Home></Home>}></Route>

          <Route path='/appointment' element={
            <PrivateRoute>
              <Appointment></Appointment>
            </PrivateRoute>
          }></Route>

          <Route path='/deshboard/*' element={
            <PrivateRoute>
              <DashBoard></DashBoard>
            </PrivateRoute>
          }
          >

            <Route path='deshboardhome'></Route>
            <Route path='admin'></Route>
          </Route>

          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/register' element={<Register></Register>}></Route>

          <Route path='*' element={<PageNotFound></PageNotFound>}></Route>
        </Routes>
        <Footer></Footer>
      </AuthProvider>
    </div>
  );
}

export default App;
