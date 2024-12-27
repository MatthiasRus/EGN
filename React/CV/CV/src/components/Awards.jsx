import {useState} from 'react'

export default function Awards({addAward, setAddAward,initials, awards, setAwards }) {
    const [addSection, setAddSection] = useState(false);

    function toggle(){
        setAddSection(!addSection);
    }

    function AddAward({title,organization,date,description}){
        return (
            <div className="collection">
                <p className="titleAward">{title}</p>
                <p className="organization" style={{display:'none'}}>{organization}</p>
                <p className="date" style={{display:'none'}}>{date}</p>
                <p className="description" style={{display:'none'}}>{description}</p>
                <button className='editAward'>Edit</button>
            </div>
        )
    }

    function handleSubmit(e) {
        e.preventDefault();
        let newAward = {
            awardTitle : awards.awardTitle,
            organization : awards.organization,
            dateReceived : awards.dateReceived,
            description : awards.description
        }

       setAddAward([...addAward,newAward])
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
       <> <div className='sectionHolder'>
        {!addSection && <div className="awards">
            {addAward.map((award,index) => (
                <AddAward 
                    key={index}
                    title = {award.awardTitle}
                    organization={award.organization}
                    date = {award.dateReceived}
                    description={award.description}
                ></AddAward>
            ))}
        </div>}
            
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
        <button onClick={toggle} className='add'>Add Award</button>
        </>
    );
}
