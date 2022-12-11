import React, {useEffect} from 'react'
import { BrowserRouter, Link, useParams } from 'react-router-dom'
import { useContactQuery } from '../cservices/contactsApi'
const View = () => {
  const {id} = useParams();
  const {data, error} = useContactQuery(id)
  
   console.log("view data", data, id)

  return (
    <div className='container'>
    <h1>welcome to view page</h1>
      <ul>
        <li>{data?.id}</li>
        <li>{data?.title}</li>
        <li>{data?.body}</li>
        {/* <li>{data[0]?.phone}</li> */}
      </ul>
     
        <Link to ="/">Home</Link>
    </div>
  )
}

export default View
