import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAddContactMutation, useEditContactMutation, useContactQuery } from "../cservices/contactsApi";

const AddEdit = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [addContact] = useAddContactMutation();
  const [editContact] = useEditContactMutation();
  const {data} = useContactQuery(id)
  const [postData, setPostData] = useState({
    title: "",
    body: ""
  });
  const { title, body } = postData;

  useEffect(() => {
    if (id) {
      setPostData({...postData, title:data?.title, body:data?.body });
    }
  }, [id, data]);
  console.log("edit data", "dataaaaaaa", data);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!title && !body) {
      alert("plz fill the data");
    } else {
      if (!id) {
        await addContact({ postData });
        setPostData({ title: "", body: ""});
        navigate("/");
      } else {
        await editContact({ id, postData });
        setPostData({ title: "", body: "" });
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
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
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
          onChange={(e) => setPostData({ ...postData, body: e.target.value })}
          style={{
            padding: "7px",
            borderRadius: "6px",
            marginBottom: "10px",
            width: "250px",
            height: "100px",
            backgroundColor: "green",
            color: "white",
          }}
        />
       
        <br />
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
