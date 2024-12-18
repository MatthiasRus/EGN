import React from "react"

export default function Main() {

    const [ingredients, setIngredients] = React.useState([])

    const ingredientsListItems = ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ))
    
    //React nineteen function, passed to action
    // <! -- action={addIngredient} -->

    // function addIngredient(formData) {
    //     const newIngredient = formData.get("ingredient")
    //     setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    // }
        
    function handleSubmit(e){
        e.preventDefault();
        let formData = new FormData(e.currentTarget);
        let newIngredient = formData.get("ingredient");
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
        e.currentTarget.reset();
    }
    return (
        <main className="mainContainer">
            <form onSubmit={handleSubmit} className="add-ingredient"> 
                <input
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button>Add ingredient</button>
            </form>
            <ul className="list-item">
                {ingredientsListItems}
            </ul>
        </main>
    )
}