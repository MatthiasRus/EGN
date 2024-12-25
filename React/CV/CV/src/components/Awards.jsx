export default function Awards(){
    return (<>
    <form>
    <legend>Award Title: <input type="text" name="awardTitle" /></legend>
    <legend>Awarding Organization: <input type="text" name="organization" /></legend>
    <legend>Date Received: <input type="date" name="dateReceived" /></legend>
    <legend>Description:</legend>
    <textarea name="description" rows="4" cols="30"></textarea>
    <button type="submit">Submit</button>
</form>

    </>)
}