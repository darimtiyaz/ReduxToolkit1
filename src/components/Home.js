import React, {useEffect} from 'react'
import "../../src/index.css"
import { NavLink } from 'react-router-dom';
//import { useSelector, useDispatch } from 'react-redux';
import { useContactsQuery, useDeleteContactMutation } from '../cservices/contactsApi';
const Home = () => {
  const {data, error, isLoading, isSuccess, isFetching} = useContactsQuery();
  const [deleteContact] = useDeleteContactMutation();
  
console.log("contacts", data);
  return (
    <div  className="container-main" style={{ display: 'grid', placeItems: 'center',marginTop: "60px"}}>
    
      <NavLink to="/addPost">
        <button className='btn btn-center' style={{padding: '8px', borderRadius: '13px', backgroundColor: 'violet'}}>Add Contact</button>
      </NavLink>
      
      <table className="styled-table">
        <thead>
          <tr>
            <th></th>
            <th>No</th>
            <th >title</th>
            <th >body</th>
            <th >Actions</th>

           
          </tr>
        </thead>
        <tbody>
          {data && Array.from(data).slice(0,10).map((item, index)=>{
            return (
              <tr key={index}>
                <th scope='row'></th>
                <td>{item.id}</td>
                <td>{item.title.substr(0,20)}</td>
                <td>{item.body.substr(0,30)}</td>
                {/* <td>{item.contact}</td> */}
                <td>
                  <NavLink to={`/update/${item.id}`}>
                    <button className="btn btn-edit">Edit</button>
                  </NavLink>
                  <button className="btn btn-delete" onClick={()=>deleteContact({id:item.id})}
                  style={{margin: '0px 5px'}}>Delete</button>
                  <NavLink to={`/view/${item.id}`}>
                    <button className='btn btn-view'>View</button>
                  </NavLink>
                  
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Home
