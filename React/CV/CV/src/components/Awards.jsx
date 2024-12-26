import {useState} from 'react'

export default function Awards({initials, awards, setAwards }) {
    const [addSection, setAddSection] = useState(false);

    function toggle(){
        setAddSection(!addSection);
    }
    function handleSubmit(e) {
        e.preventDefault();
        const section = document.querySelector(".sectionHolder");
        const form = e.currentTarget.closest("form");
        const p = document.createElement("p");
        const award = form.querySelector("#awardTitle");
        p.innerHTML = award.value;

        section.append(p);

        setAddSection(!addSection);
        setAwards(initials)
        
    }

    function handleChange(e) {
        setAwards({
            ...awards,
            [e.target.name]: e.target.value,
        });
    }

    return (
        <div className='sectionHolder'>
            <button onClick={toggle}>Add Award</button>
            {addSection && <form >
                <fieldset>
                    <legend>Award Details</legend>
                    
                    <label htmlFor="awardTitle">Award Title:</label>
                    <input 
                        type="text" 
                        id="awardTitle" 
                        name="awardTitle"
                        value={awards.awardTitle} 
                        onChange={handleChange} 
                    />
                    
                    <label htmlFor="organization">Awarding Organization:</label>
                    <input 
                        type="text" 
                        id="organization" 
                        name="organization" 
                        value={awards.organization}
                        onChange={handleChange} 
                    />
                    
                    <label htmlFor="dateReceived">Date Received:</label>
                    <input 
                        type="date" 
                        id="dateReceived" 
                        name="dateReceived"
                        value={awards.dateReceived} 
                        onChange={handleChange} 
                    />
                    
                    <label htmlFor="description">Description:</label>
                    <textarea 
                        id="description" 
                        name="description" 
                        rows="4" 
                        cols="30" 
                        value = {awards.description}
                        onChange={handleChange}
                    ></textarea>
                </fieldset>
                
                <button type="submit" onClick={handleSubmit}>Save</button>
            </form>}
        </div>
    );
}
