import React, {useEffect} from 'react'
import { BrowserRouter, Link, useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getPost } from '../redux/postSlice'
const View = () => {
  const {posts} = useSelector((state) => state.post)
  const dispatch = useDispatch();
  const {id} = useParams();
  useEffect(() => {
    dispatch(getPost({id}));
  }, [id]);
   console.log("view data", posts, id)

  return (
    <div className='container'>
    <h1>welcome to view page</h1>
      <ul key={id}>
        <li>{posts[0]?.id}</li>
        <li>{posts[0]?.title}</li>
        <li>{posts[0]?.body}</li>
        {/* <li>{contact.status}</li> */}
      </ul>
     
        <Link to ="/">Home</Link>
    </div>
  )
}

export default View
