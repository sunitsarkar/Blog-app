import logo from './logo.svg';
import './App.css';
import LoginPage from './component/auth/login';
import RegistrationPage from './component/auth/register';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginPage/>}/>
        <Route path='/register' element={<RegistrationPage/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
