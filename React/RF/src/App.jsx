import { useState } from 'react'
import {SayHello as Greeting} from "./greeting.jsx"

function App() {
const [FormattedData,setFormattedData] = useState(
    {
      Firstname:"",
      Lastname:"",
      email:"",
      age:"",
      sex:"",
    }
  );

  return (
  <>

      <Greeting setFormattedData ={ setFormattedData }/>
      {FormattedData.Firstname && (
  <h1>Hello {FormattedData.Firstname} {FormattedData.Lastname}. As per your specification You are a {FormattedData.sex} student age of {FormattedData.age}. Thank you for filling the form we will use {FormattedData.email}
to contact you in the future regarding any update.
</h1> 

  )}
   </>
  )};
     
 export default App
