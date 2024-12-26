import {useState} from 'react'

export default function Education({initials, education, setEducation}){
    const [addSection, setAddSection] = useState(false);

    function toggleSection(e){
        e.preventDefault();
        setAddSection(!addSection);
    }

    function handleSubmit(e){
        const section = e.currentTarget.closest(".sectionHolder");
        const form = e.currentTarget.closest("form")
        const school = form.querySelector("#schoolName");
        let p = document.createElement("p")

        e.preventDefault();
        setAddSection(!addSection)
        p.innerHTML = school.value
        section.append(
            p
        )
        setEducation(initials)
    }

    function handleChange(e){
        setEducation({
            ...education,
            [e.target.name] : e.target.value
        })
    }
    
    return(
        <div className='sectionHolder'>
        <button onClick={toggleSection}>Add Education</button>
        {addSection && <form >
    <fieldset>
        <legend>Educational Experience</legend>

        <label htmlFor="schoolName">School Name:</label>
        <input 
            type="text" 
            id="schoolName" 
            name="schoolName" 
            value={education.schoolName}
            onChange={handleChange} 
        />

        <label htmlFor="titleOfStudy">Title of Study:</label>
        <input 
            type="text" 
            id="titleOfStudy" 
            name="titleOfStudy" 
            value={education.titleOfStudy}
            onChange={handleChange} 
        />

        <label htmlFor="dateFrom">Date From:</label>
        <input 
            type="date" 
            id="dateFrom" 
            name="dateFrom" 
            value={education.dateFrom}
            onChange={handleChange} 
        />

        <label htmlFor="dateUntil">Date Until:</label>
        <input 
            type="date" 
            id="dateUntil" 
            name="dateUntil" 
            value={education.dateUntil}
            onChange={handleChange} 
        />
    </fieldset>

    <button type="submit" onClick={handleSubmit}>Save</button>
</form>

}
        </div>
    )
}