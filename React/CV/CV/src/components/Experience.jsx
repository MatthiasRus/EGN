export default function Experience(){
    return (
        <>
        <form>
    <legend>Company Name: <input type="text" name="companyName" /></legend>
    <legend>Position Title: <input type="text" name="positionTitle" /></legend>
    <legend>Main Responsibilities:</legend>
    <textarea name="responsibilities" rows="4" cols="30"></textarea>
    <legend>Date From: <input type="date" name="dateFrom" /></legend>
    <legend>Date Until: <input type="date" name="dateUntil" /></legend>
    <button type="submit">Submit</button>
</form>

        </>
    )
}