import { useState } from 'react'
import './App.css'
import SideBar from './components/SideBar.jsx'
import Info from './components/Info.jsx'
import Template from './components/Template.jsx'

function App() {
  const [activeState, setActiveState] = useState("Contact");
  const initialContact = {
    FirstName:"",
    LastName:"",
    Email:"",
    PhoneNumber:"",
    City:"",
    Country:"",
    PostalCode:""
}

const [contact, setContact] = useState(initialContact);
const initialExperience = {
  companyName : "",
  positionTitle: "",
  responsibilities:"",
  dateFrom:"",
  dateUntil:""
}
const [experience, setExperience] = useState(initialExperience);

const initialEduc = {
  schoolName : "",
  titleOfStudy: "",
  dateFrom:"",
  dateUntil:""
}
const [education, setEducation] = useState(initialEduc);
const initialAward = {
  awardTitle : "",
  organization: "",
  dateReceived:"",
  description:"",
}
const [awards, setAwards] = useState(initialAward);

function handleClick(e){  
    e.preventDefault()
    setActiveState(e.target.innerText)
}

  return (
    <div className='container'>
      <div className="sideBar">
        <SideBar handleClick={handleClick}/>
      </div>
      <div className="main"><Info
            buttonValue={activeState}
            initials = {{
              cont : initialContact,
              educ : initialEduc,
              exp : initialExperience,
              awards : initialAward,
            }}
            ContactInfo={[contact,setContact,]}
            EducationInfo={[education, setEducation]}
            ExperienceInfo={[experience, setExperience]}
            AwardsInfo={[awards, setAwards]}
      /></div>
      <div className="template"><Template active={activeState}
       data={
        {
          "Contact": contact,
          "Education" : education,
          "Experience" : experience,
          "Awards" : awards
       }}/></div>
    </div>
  )
}

export default App
