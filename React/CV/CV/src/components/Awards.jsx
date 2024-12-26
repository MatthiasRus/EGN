export default function Awards({ awards, setAwards }) {
    function handleSubmit(e) {
        e.preventDefault();
        
    }

    function handleChange(e) {
        setAwards({
            ...awards,
            [e.target.name]: e.target.value,
        });
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>Award Details</legend>
                    
                    <label htmlFor="awardTitle">Award Title:</label>
                    <input 
                        type="text" 
                        id="awardTitle" 
                        name="awardTitle" 
                        onChange={handleChange} 
                    />
                    
                    <label htmlFor="organization">Awarding Organization:</label>
                    <input 
                        type="text" 
                        id="organization" 
                        name="organization" 
                        onChange={handleChange} 
                    />
                    
                    <label htmlFor="dateReceived">Date Received:</label>
                    <input 
                        type="date" 
                        id="dateReceived" 
                        name="dateReceived" 
                        onChange={handleChange} 
                    />
                    
                    <label htmlFor="description">Description:</label>
                    <textarea 
                        id="description" 
                        name="description" 
                        rows="4" 
                        cols="30" 
                        onChange={handleChange}
                    ></textarea>
                </fieldset>
                
                <button type="submit">Submit</button>
            </form>
        </>
    );
}
