import React, { useState, useEffect } from "react";
import { createPost, updatePost, getPost } from "../redux/postSlice";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

const AddEdit = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const [data, setData] = useState({
    title: "",
    body: "",
  });
  const { post } = useSelector((state) => state.post);
  const { title, body } = data;

  useEffect(() => {
    if (id) {
      dispatch(getPost({ id }));
       setData({ ...post[0] });
    }
  }, [id]);
  console.log("edit data", post, data);

  const onSubmit = () => {
    if (!title && !body) {
      alert("plz fill the data");
    } else {
      if (!id) {
        dispatch(createPost({ data }));
        setData({body:"", title:""});
        navigate("/");
      } else {
        dispatch(
          updatePost({ id: post[0].id, body: data.body, title: data.title })
        );
        setData({body:"", title:""});
        navigate("/");
      }
    }
  };

  // const handleInput = (e) => {
  //    e.preventDefault();
  //   const { name, value } = e.target;
  //   setData({ ...data, [name]: value });
  // };
  return (
    <div
      className="container"
      style={{
        display: "grid",
        placeItems: "center",
        marginTop: "80px",
        boxShadow: "revert-layer",
      }}
    >
      <form action="" onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="title"
          name="title"
          value={title}
          onChange={(e) => setData({ ...data, title: e.target.value })}
          style={{
            padding: "7px",
            borderRadius: "6px",
            marginBottom: "10px",
            width: "250px",
            backgroundColor: "yellowgreen",
            color: "white",
          }}
        />
        <br />
        <textarea
          type="text"
          placeholder="body"
          name="body"
          value={body}
          onChange={(e) => setData({ ...data, body: e.target.value })}
          style={{
            padding: "7px",
            borderRadius: "10px",
            marginBottom: "10px",
            width: "250px",
            height: "100px",
            backgroundColor: "green",
            color: "white",
          }}
        />
        <br />
        {/* <input type="status" placeholder='status' value={status} onChange={(e)=>setData({status:e.target.value})}/> */}
        <button
          type="submit"
          style={{
            display: "flex",
            paddingLeft: "40%",
            color: "white",
            width: "265px",
            borderRadius: "10px",
            backgroundColor: "blue",
          }}
        >
          save
        </button>
      </form>
    </div>
  );
};

export default AddEdit;
