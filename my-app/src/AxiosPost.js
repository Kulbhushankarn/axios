import axios from 'axios';
import React, { useState } from 'react'

//peform CRUD operation in API's

function AxiosPost() {
    const data = {fname:"", lastName:""};
    const [inputData, setInputdata] = useState(data)
    const handleData = (event)=>{
        setInputdata({...inputData, [event.target.name]:event.target.value})
    }


    const handelSubmit = (event)=>{
        event.preventDefault();
        axios.post("https://jsonplaceholder.typicode.com/users", inputData)
        .then((response)=>{
            console.log(response)
        })
    }


    const handelUpdate = (event)=>{
        event.preventDefault();
        axios.put("https://jsonplaceholder.typicode.com/users/1", inputData)
        .then((response)=>{
            console.log(response)
        })

    }

    const handelDelete = (event)=>{
        event.preventDefault();
        axios.delete("https://jsonplaceholder.typicode.com/users/1")
        .then((response)=>{
            console.log(response)
        })
    }


  return (
    <>
    <label>First name:</label>
    <input type="text" name='fname' value={inputData.fname} onChange={handleData}></input><br/>
    <label>last Name:</label>
    <input type="text" name='lastName' value={inputData.lastName} onChange={handleData}></input>


    <button onClick={handelSubmit}>Submit</button>
    <button onClick={handelUpdate}>Update</button>
    <button onClick={handelDelete}>Delete</button>
    </>
  )
}

export default AxiosPost;
