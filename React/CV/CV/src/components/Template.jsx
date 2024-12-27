export default function Template({data}){
    console.log(data)
    return(
        <>
         <div className="cv-container">
            <section className="cv-section contact-info">
                  <h2>Contact Information</h2>
                  <p><strong>Name:</strong> <span id="fullName" >{data["Contact"].FirstName} {data["Contact"].LastName}</span></p>
                  <p><strong>Email:</strong> <span id="email">{data["Contact"].Email}</span></p>
                  <p><strong>Phone Number:</strong> <span id="phone">{data["Contact"].PhoneNumber}</span></p>
                  <p><strong>City:</strong> <span id="city">{data["Contact"].City}</span></p>
                  <p><strong>Country:</strong> <span id="country">{data["Contact"].Country}</span></p>
                  <p><strong>Postal Code:</strong> <span id="postalCode">{data["Contact"].PostalCode}</span></p>
            </section>

  
            <section className="cv-section education">
                    <h2>Education</h2>
                    <div className="education-item">
                      {data["Education"].map(d => 
                        (<>
                         <p><strong>School Name:</strong> <span id="schoolName">{d.schoolName}</span></p>
                      <p><strong>Title of Study:</strong> <span id="titleOfStudy">{d.titleOfStudy}</span></p>
                      <p><strong>DatesFrom:</strong> <span id="educationDates1">{d.dateFrom}</span></p>
                      <p><strong>DatesUntil:</strong> <span id="educationDates2">{d.dateUntil}</span></p>
                      <br/>
                        </>)
                       
                      )}
                      
                    </div>
            </section>

            <section className="cv-section experience">
                  <h2>Experience</h2>
                  <div className="experience-item">
                    {data["Experience"].map(d => (
                      <>
                        <p><strong>Company Name:</strong> <span id="companyName">{d.companyName}</span></p>
                        <p><strong>Position Title:</strong> <span id="positionTitle">{d.positionTitle}</span></p>
                        <p><strong>Main Responsibilities:</strong></p>
                        <p id="responsibilities">{d.responsibilities}</p>
                        <p><strong>DatesFrom:</strong> <span id="experienceDates1">{d.dateFrom}</span></p>
                        <p><strong>DatesUntil:</strong> <span id="experienceDates2">{d.dateUntil}</span></p>
                        <br/>
                      </>
                    ))}
                    
                  </div>
            </section>

            <section className="cv-section awards">
                    <h2>Awards</h2>
                    <div className="award-item">
                      {data["Awards"].map(d => (
                        <>
                          <p><strong>Award Title:</strong> <span id="awardTitle">{d.awardTitle}</span></p>
                          <p><strong>Organization:</strong> <span id="organization">{d.organization}</span></p>
                          <p><strong>Date Received:</strong> <span id="dateReceived">{d.dateReceived}</span></p>
                          <p><strong>Description:</strong></p>
                          <p id="awardDescription">{d.description}</p>
                          <br/>
                        </>
                      ))}
                     
                    </div>
            </section>

            <button>Download</button>
</div>

        </>
    ) 
}