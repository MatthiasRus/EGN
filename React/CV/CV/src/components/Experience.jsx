export default function Experience({Experience, setExperience}){

    function handleSubmit(e){
        e.preventDefault();
    }

    function handleChange(e){
        setExperience({
            ...Experience,
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
            onChange={handleChange} 
        />

        <label htmlFor="positionTitle">Position Title:</label>
        <input 
            type="text" 
            id="positionTitle" 
            name="positionTitle" 
            onChange={handleChange} 
        />

        <label htmlFor="responsibilities">Main Responsibilities:</label>
        <textarea 
            id="responsibilities" 
            name="responsibilities" 
            rows="4" 
            cols="30" 
            onChange={handleChange}
        ></textarea>

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