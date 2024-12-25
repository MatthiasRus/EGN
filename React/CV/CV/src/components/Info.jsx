import Contact from "./Contacts"
import Education from "./Education"
import Experience from "./Experience"
import Awards from "./Awards"

export default function Info({buttonValue, contact, setContact}){

    if  (buttonValue === 'Contact'){
          return  <Contact contact={contact} setContact={setContact}/>
        }else if (buttonValue === "Education"){
            return <Education/>
        }
        else if (buttonValue === "Experience"){
            return <Experience/>
        }
        else if (buttonValue === "Awards"){
            return <Awards/>
        }
  
}