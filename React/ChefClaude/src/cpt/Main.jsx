import {useState} from "react"

export default function Main(){

        const [ingredients, setIngredients] = useState([])
     const renderIngredients = ingredients?.map(ingredient => <li key={ingredient}>{ingredient}</li>)
    

    function handleSubmit(e){
        e.preventDefault();
        let formData = new FormData(e.currentTarget);
        let newIngredient = formData.get("ingredient");
       setIngredients(prevIngredients => [...prevIngredients,newIngredient]);
           }


    return (
        <main className="mainContainer">
            <form className="add-ingredient" onSubmit={handleSubmit}>
                
                    <input aria-label ="add ingredient" type="text" placeholder="e.g oregano" id="input" name="ingredient" />
                
                <button className="search"> Add ingredient</button>
            </form>
            <ul className="list-item">
                {renderIngredients}
            </ul>
        </main>
    )
}