import React from 'react'

export default function Experience({initials,experience, setExperience}){
    const [isEditing, setIsEditing] = React.useState(false);
    const [savedExp, setSavedExp] = React.useState(null);
    const [addSection, setAddSection] = React.useState(false);

    function toggle(){
        setAddSection(!addSection);
    }
    function handleSubmit(e){
        e.preventDefault();
        if (isEditing){
            setSavedExp(experience);
            setIsEditing(false);
        }
        else{
            setSavedExp(experience)
        }
        const section = document.querySelector(".sectionHolder");
        const form = e.currentTarget.closest("form");
        const p = document.createElement("p");
        const exp = form.querySelector("#companyName");
        p.innerHTML = exp.value;

        section.append(p);
        setAddSection(!addSection)
        setExperience(initials)
    }

    function handleChange(e){
        setExperience({
            ...experience,
            [e.target.name] : e.target.value
        })
    }

    function handleEditing(){
            if (savedExp){
                setExperience(savedExp);
                setIsEditing(true);
            }
    }
    return (
        <div className="sectionHolder">
            <button onClick={toggle}>Add Experience</button>
        {addSection && <form className='expForm'>
    <fieldset>
        <legend>Experience Details</legend>

        <label htmlFor="companyName">Company Name:</label>
        <input 
            type="text" 
            id="companyName" 
            name="companyName" 
            value={experience.companyName || ''}
            onChange={handleChange} 
        />

        <label htmlFor="positionTitle">Position Title:</label>
        <input 
            type="text" 
            id="positionTitle" 
            name="positionTitle" 
            value={experience.positionTitle || ''}
            onChange={handleChange} 
        />

        <label htmlFor="responsibilities">Main Responsibilities:</label>
        <textarea 
            id="responsibilities" 
            name="responsibilities" 
            rows="4" 
            cols="30" 
            value={experience.responsibilities || ''}
            onChange={handleChange}
        ></textarea>

        <label htmlFor="dateFrom">Date From:</label>
        <input 
            type="date" 
            id="dateFrom" 
            name="dateFrom" 
            value={experience.dateFrom || ''}
            onChange={handleChange} 
        />

        <label htmlFor="dateUntil">Date Until:</label>
        <input 
            type="date" 
            id="dateUntil" 
            name="dateUntil" 
            value={experience.dateUntil || ''}
            onChange={handleChange} 
        />
    </fieldset>

    <button type="submit" onClick={handleSubmit}>Save</button>
    <button onClick={handleEditing}>Edit</button>
</form>}


        </div>
    )
}