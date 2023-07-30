import './App.css';
import LoginPage from './component/auth/login';
import RegistrationPage from './component/auth/register';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BlogPage from './component/blog/blog';
import BlogForm from './component/blog/blogForm';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginPage/>}/>
        <Route path='/register' element={<RegistrationPage/>}/>
        <Route path='/blog' element={<BlogPage/>}/>
        <Route path='/createblog' element={<BlogForm/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
