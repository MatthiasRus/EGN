export default function Experience({experience, setExperience}){

    function handleSubmit(e){
        e.preventDefault();
    }

    function handleChange(e){
        setExperience({
            ...experience,
            [e.target.name] : e.target.value
        })
    }
    return (
        <>
        <form onSubmit={handleSubmit}>
    <fieldset>
        <legend>Experience Details</legend>

        <label htmlFor="companyName">Company Name:</label>
        <input 
            type="text" 
            id="companyName" 
            name="companyName" 
            value={experience.companyName}
            onChange={handleChange} 
        />

        <label htmlFor="positionTitle">Position Title:</label>
        <input 
            type="text" 
            id="positionTitle" 
            name="positionTitle" 
            value={experience.positionTitle}
            onChange={handleChange} 
        />

        <label htmlFor="responsibilities">Main Responsibilities:</label>
        <textarea 
            id="responsibilities" 
            name="responsibilities" 
            rows="4" 
            cols="30" 
            value={experience.responsibilities}
            onChange={handleChange}
        ></textarea>

        <label htmlFor="dateFrom">Date From:</label>
        <input 
            type="date" 
            id="dateFrom" 
            name="dateFrom" 
            value={experience.dateFrom}
            onChange={handleChange} 
        />

        <label htmlFor="dateUntil">Date Until:</label>
        <input 
            type="date" 
            id="dateUntil" 
            name="dateUntil" 
            value={experience.dateUntil}
            onChange={handleChange} 
        />
    </fieldset>

    <button type="submit">Save</button>
</form>


        </>
    )
}