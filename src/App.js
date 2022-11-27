// import React, {useState, Fragment} from "react"
// import './App.css';
// import Homepage from './components/homepage/homepage';
// import Login from './components/login/login';
// import Register from './components/register/register';
// import {BrowserRouter as Router, Routes, Route } from "react-router-dom"

// function App() {
//   const [user, setLoginUser] = useState({})
//   return (
//     <div className="App">
//       <Router>
//       <Fragment>
//         <Routes>
//         <Route exact path="/"
//           element={
//             user && user._id ? <Homepage setLoginUser={setLoginUser}/> : 
//             <Login setLoginUser={setLoginUser} />
//           }
//         />
//         <Route path="/login" element={<Login setLoginUser={setLoginUser}/>}/>
//         <Route path="/register" element={<Register/>}/>
//         </Routes>
//         </Fragment>
//       </Router>
//     </div>
//   );
// }

// export default App;

//2
//import React, {useEffect} from 'react'
//import Counter from './features/counter/Counter'
//import AddPosts from './features/posts/AddPosts'
//import PostsList from './features/posts/PostsList'
// import { useSelector, useDispatch } from 'react-redux'
// import "./index.css"
// import { getPosts } from './redux/postSlice'
// const App = () => {
//   const dispatch = useDispatch();
//   const {posts, loading} = useSelector(state => state.post);

//   useEffect(()=>{
//     dispatch(getPosts());
//   }, []);
//   if(loading){
//     return <h2>Loading...</h2>
//   }
//   return (
//     <div className='App'>
//       {/* <Counter/> */}
//       {/* <AddPosts/>
//       <PostsList /> */}
//       {posts.map((item)=>(
//         <h2>{item.title}</h2>
//       ))}
//     </div>
//   )
// }

// export default App


import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import AddEdit from "./pages/AddEdit"
import Home from "./pages/Home"
import View from "./pages/View"

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/addPost" element={<AddEdit/>}/>
          <Route path="/update/:id" element={<AddEdit/>}/>
          <Route path="/view/:id" element={<View/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
