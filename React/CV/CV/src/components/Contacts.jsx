export default function Contact({contact,setContact}){

    function handleSubmit(e){
        e.preventDefault();
        // e.target.reset();
    };
    function handleChange(e){
        setContact({
            ...contact,
            [e.target.name] : e.target.value
        })
    }
    return (
        <>
        <form onSubmit={handleSubmit}>
    <legend>
        First Name: <input type="text" name="FirstName" 
        value={contact.FirstName}
        onChange={handleChange}
        />
        </legend>
    <legend>
        Last Name: <input type="text" name="LastName" 
        value={contact.LastName}
        onChange={handleChange}
        />
        </legend>
    <legend>
        Email: <input type="email" name="Email"
         value={contact.Email}
         onChange={handleChange}
         />
        </legend>
    <legend>
        Phone No.: <input type="tel" name="PhoneNumber"
         value={contact.PhoneNumber}
         onChange={handleChange}
         />
        </legend>
    <legend>
        City: <input type="text" name="City"
         value={contact.City}
         onChange={handleChange}
         />
        </legend>
    <legend>
        Country: <input type="text" name="Country"
         value={contact.Country}
         onChange={handleChange}
         />
        </legend>
    <legend>
        Postal Code: <input type="text" name="PostalCode"
         value={contact.PostalCode}
         onChange={handleChange}
         />
        </legend>
    <button type="submit">Submit</button>
</form>

        </>
        
    )
}