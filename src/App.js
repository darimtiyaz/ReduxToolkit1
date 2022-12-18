
// import React from 'react'
// import {BrowserRouter, Routes, Route} from "react-router-dom"
// import AddEdit from "./components/AddEdit"
// import Home from "./components/Home"
// import View from "./components/View"

// const App = () => {
//   return (
//     <BrowserRouter>
//       <div className="app">
//         <Routes>
//           <Route exact path="/" element={<Home/>}/>
//           <Route path="/addPost" element={<AddEdit/>}/>
//           <Route path="/update/:id" element={<AddEdit/>}/>
//           <Route path="/view/:id" element={<View/>}/>
//         </Routes>
//       </div>
//     </BrowserRouter>
//   )
// }

// export default App


import React, {useState, useEffect} from 'react'
import { useGetUsersQuery } from './randomStore/userApi'
import {FaEnvelopeOpen, FaUser, FaAccessibleIcon, FaMap, FaPhone, FaLock} from "react-icons/fa";

const App = () => {
  const [person, setPerson] = useState(null);
  const [value, setValue] = useState("Random Person");
  const [title, setTitle] = useState("name");

  const {data, isLoading, refetch} = useGetUsersQuery();
  console.log("dataaaaaaaaaaa", data?.results[0])

  useEffect(()=>{
    if(data){
      const randomPerson = data?.results[0];
      const {phone, email} = randomPerson
      const {large: image} = randomPerson?.picture;
      const {password} = randomPerson?.login;
      const {first, last} = randomPerson?.name;

      const {dob:{age},} = randomPerson;
      const {street: {number, name },} =randomPerson.location;
      const newPerson = {image, phone, email, password, age, 
        street: `${number} ${name}`, name: `${first} ${last}`};

      setPerson(newPerson);
      setTitle("name");
      setValue(newPerson?.name);
    }
  },[data]);

  const handleValue = (e) => {
    if(e.target.classList.contains("icon")){
      const newValue = e.target.dataset.label;
      setTitle(newValue);
      setValue(person[newValue]);
    }
  };

  return (
    <main className='App'>
    <div className="container" style={{backgroundColor:'green', padding:'15px'}}>
      <img src={person && person.image} alt="img" className='user-img'
        style={{marginLeft:'110px', borderRadius: '80px', padding:'15px'}}
      />
      <p className="user-title" style={{textAlign:'center'}}>My {title}</p>
      <p className="user-value" style={{textAlign:'center'}}>{value}</p>
      <div className="values-list">
        <button data-label="name" onMouseOver={handleValue} className="icon" style={{margin:'15px'}}><FaUser/></button>
        <button data-label="email" onMouseOver={handleValue} className="icon" style={{margin:'15px'}}><FaEnvelopeOpen/></button>
        <button data-label="age" onMouseOver={handleValue} className="icon" style={{margin:'15px'}}><FaAccessibleIcon/></button>
        <button data-label="street" onMouseOver={handleValue} className="icon" style={{margin:'15px'}}><FaMap/></button>
        <button data-label="phone" onMouseOver={handleValue} className="icon" style={{margin:'15px'}}><FaPhone/></button>
        <button data-label="password" onMouseOver={handleValue} className="icon" style={{margin:'15px'}}><FaLock/></button>
      </div>
      <button className='btn' type="button" onClick={()=>refetch()} style={{marginLeft: '140px', padding:'7px', backgroundColor:'blue', color: 'white'}}>{isLoading ? "loading..." : "random user"}</button>
    </div>
    </main>
  )
}

export default App
