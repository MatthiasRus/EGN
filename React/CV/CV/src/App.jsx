import { useState } from 'react'
import './App.css'
import SideBar from './components/SideBar.jsx'
import Info from './components/Info.jsx'
import Template from './components/Template.jsx'

function App() {
  const [activeState, setActiveState] = useState("Contact");
  
  const [contact, setContact] = useState({
    FirstName:"",
    LastName:"",
    Email:"",
    PhoneNumber:"",
    City:"",
    Country:"",
    PostalCode:""
});

const [experience, setExperience] = useState({
  companyName : "",
  positionTitle: "",
  responsibilities:"",
  dateFrom:"",
  dateUntil:""
});

const [education, setEducation] = useState({
  schoolName : "",
  titleOfStudy: "",
  dateFrom:"",
  dateUntil:""
});

const [awards, setAwards] = useState({
  awardTitle : "",
  organization: "",
  dateReceived:"",
  description:"",
});

function handleClick(e){  
    e.preventDefault()
    setActiveState(e.target.innerText)
    console.log(activeState)
}

  return (
    <div className='container'>
      <div className="sideBar">
        <SideBar handleClick={handleClick}/>
      </div>
      <div className="main"><Info
            buttonValue={activeState}
            ContactInfo={[contact,setContact]}
            EducationInfo={[education, setEducation]}
            ExperienceInfo={[experience, setExperience]}
            AwardsInfo={[awards, setAwards]}
      /></div>
      <div className="template"><Template data={contact}/></div>
    </div>
  )
}

export default App
