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
            onChange={handleChange} 
        />

        <label htmlFor="titleOfStudy">Title of Study:</label>
        <input 
            type="text" 
            id="titleOfStudy" 
            name="titleOfStudy" 
            onChange={handleChange} 
        />

        <label htmlFor="dateFrom">Date From:</label>
        <input 
            type="date" 
            id="dateFrom" 
            name="dateFrom" 
            onChange={handleChange} 
        />

        <label htmlFor="dateUntil">Date Until:</label>
        <input 
            type="date" 
            id="dateUntil" 
            name="dateUntil" 
            onChange={handleChange} 
        />
    </fieldset>

    <button type="submit">Submit</button>
</form>

        </>
    )
}