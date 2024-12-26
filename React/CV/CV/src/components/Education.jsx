export default function Education({education, setEducation}){
    function handleSubmit(e){
        e.preventDefault();
    }

    function handleChange(e){
        setEducation({
            ...education,
            [e.target.name] : e.target.value
        })
    }

    return(
        <>
        <form onSubmit={handleSubmit}>
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

    <button type="submit">Save</button>
</form>

        </>
    )
}