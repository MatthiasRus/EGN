export default function Education(){
    return(
        <>
        <form>
    <legend>
        School Name: <input type="text" name="schoolName" />
        </legend>
    <legend>
        Title of Study: <input type="text" name="titleOfStudy" />
        </legend>
    <legend>
        Date of Study: <input type="date" name="dateOfStudy" />
        </legend>
    <button type="submit">Submit</button>
</form>

        </>
    )
}