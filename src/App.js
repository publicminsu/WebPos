import logo from './logo.svg';
import './App.css';
import LoginForm from './views/LoginForm';
import SignUp from './views/SignUp';
import Main from './views/Main';
import Home from './views/home';
import { Routes, Route, Link } from 'react-router-dom'
import { Container,Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'


function App() {
  return (
    // <LoginForm></LoginForm>
    <> 
    {/* fragment 문법 = <> </> */}
    <Routes>
      <Route path='/' element={<LoginForm></LoginForm>}/>
      <Route path='/main' element={<Main></Main>}/>
      <Route path='/detail' element={<div>디테일 페이지임</div>}/>
      <Route path='/signUp' element={<SignUp></SignUp>}/>
      <Route path='*' element={<div>404에러</div>}/>
      <Route path='/start' element={<Home></Home>}/>
      <Route/>
    </Routes>
    </>  
  );
}

export default App;
