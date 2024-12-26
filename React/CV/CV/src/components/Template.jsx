export default function Template({data}){
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
      <p><strong>School Name:</strong> <span id="schoolName">{data["Education"].schoolName}</span></p>
      <p><strong>Title of Study:</strong> <span id="titleOfStudy">{data["Education"].titleOfStudy}</span></p>
      <p><strong>DatesFrom:</strong> <span id="educationDates1">{data["Education"].dateFrom}</span></p>
      <p><strong>DatesUntil:</strong> <span id="educationDates2">{data["Education"].dateUntil}</span></p>
    </div>
  </section>

  <section className="cv-section experience">
    <h2>Experience</h2>
    <div className="experience-item">
      <p><strong>Company Name:</strong> <span id="companyName">{data["Experience"].companyName}</span></p>
      <p><strong>Position Title:</strong> <span id="positionTitle">{data["Experience"].positionTitle}</span></p>
      <p><strong>Main Responsibilities:</strong></p>
      <p id="responsibilities">{data["Experience"].responsibilities}</p>
      <p><strong>DatesFrom:</strong> <span id="experienceDates1">{data["Experience"].dateFrom}</span></p>
      <p><strong>DatesUntil:</strong> <span id="experienceDates2">{data["Experience"].dateUntil}</span></p>
    </div>
  </section>

  <section className="cv-section awards">
    <h2>Awards</h2>
    <div className="award-item">
      <p><strong>Award Title:</strong> <span id="awardTitle">{data["Awards"].awardTitle}</span></p>
      <p><strong>Organization:</strong> <span id="organization">{data["Awards"].organization}</span></p>
      <p><strong>Date Received:</strong> <span id="dateReceived">{data["Awards"].dateReceived}</span></p>
      <p><strong>Description:</strong></p>
      <p id="awardDescription">{data["Awards"].description}</p>
    </div>
  </section>
</div>

        </>
    ) 
}