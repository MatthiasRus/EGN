import { useState } from "react"


function SayHello({setFormattedData}){
 const [FormattedData,FormatData] = useState({
    Firstname:"",
    Lastname:"",
    email:"",
    age:"",
    sex:"",
  }); 
const handlechange = (e) => {
    const {name,value} = e.target;
    const updatedData = {...FormattedData,[name]:value};

    FormatData(updatedData);
    setFormattedData(updatedData);
  };

  return (
    <>
  <h1> Let's Have an introduction</h1>
      <label>
        first name:
        <input
        name = "Firstname"
        value = {FormattedData.Firstname}
        onChange = {handlechange}
        />
        </label> 
  <label>
        Last name:
        <input
        name = "Lastname"
        value = {FormattedData.Lastname}
        onChange = {handlechange}
        /></label> 
      <label>
        email: 
        <input
        name = "email"
        value = {FormattedData.email}
        onChange = {handlechange}
        /></label> 
       <label>
        age:
        <input
        name = "age"
        value = {FormattedData.age}
        onChange = {handlechange}
        /></label>        
       <label>
        sex:
        <input
        name = "sex"
        value = {FormattedData.sex}
        onChange = {handlechange}
        /></label> 
 </>
    
  )
}

export {SayHello }
