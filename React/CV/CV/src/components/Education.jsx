import {useState} from 'react'

export default function Education({addEduc,setAddEduc,initials, education, setEducation}){
    const [addSection, setAddSection] = useState(false);

    function toggleSection(e){
        e.preventDefault();
        setAddSection(!addSection);
    }

    function handleSubmit(e){
        e.preventDefault();
        let newEduc = {
            schoolName : education.schoolName,
            titleOfStudy : education.titleOfStudy,
            dateFrom : education.dateFrom,
            dateUntil :education.dateUntil

        }

        setAddEduc([...addEduc,newEduc]);
        setAddSection(!addSection)
        setEducation(initials)
    }

    function handleChange(e){
        setEducation({
            ...education,
            [e.target.name] : e.target.value
        })
    }
    
    function AddEduc({school,field,dateFrom,dateUntil}){
        return(
            <div className="collection">
                <p className="school">{school}</p>
                <p className="field" style={{display:'none'}}>{field}</p>
                <p className="dateFrom" style={{display:'none'}}>{dateFrom}</p>
                <p className="dateUntil" style={{display:'none'}}>{dateUntil}</p>
                <button className='editEduc'>Edit</button>
            </div>
        )
    }
    return(
        <>
        <div className='sectionHolder'>
            {!addSection && addEduc.map((educ,index) => (
                <AddEduc
                key={index}
                school={educ.schoolName}
                field={educ.titleOfStudy}
                dateFrom={educ.dateFrom}
                dateUntil={educ.dateUntil}
                />
            ))}
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
        <button onClick={toggleSection}>{addSection ? "Close" : "Add Education"}</button>
        </>
    )
}