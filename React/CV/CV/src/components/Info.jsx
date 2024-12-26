import Contact from "./Contacts"
import Education from "./Education"
import Experience from "./Experience"
import Awards from "./Awards"
export default function Info({buttonValue, initials, ContactInfo, EducationInfo,ExperienceInfo,AwardsInfo}){
    
    if  (buttonValue === 'Contact'){
          return  <Contact contact={ContactInfo[0]} setContact={ContactInfo[1]} initials={initials.cont}/>
        }else if (buttonValue === "Education"){
            return <Education education={EducationInfo[0]} setEducation={EducationInfo[1]} initials={initials.educ}/>
        }
        else if (buttonValue === "Experience"){
            return <Experience experience={ExperienceInfo[0]} setExperience={ExperienceInfo[1]} initials={initials.exp}/>
        }
        else if (buttonValue === "Awards"){
            return <Awards awards={AwardsInfo[0]} setAwards={AwardsInfo[1]} initials={initials.awards}/>
        }
  
}