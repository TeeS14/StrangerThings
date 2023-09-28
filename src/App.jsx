import Post from './components/Post'
import './App.css'
// import PostForm from './components/PostForm'
import {Routes, Route} from "react-router-dom";
import RegisterForm from './components/RegisterForm';

function App() {
  return (
    <>
    <Routes>
      <Route element={<Post/>} path='/posts'/>
      <Route element={<RegisterForm/>} path='/register'/>
      {/* <Route element={<></>} path='/'/>
      <Route element={<></>} path='/'/> */}
    </Routes>
    {/* <PostForm/> */}
    {/* <Post/> */}
    </>
  )
}

export default App