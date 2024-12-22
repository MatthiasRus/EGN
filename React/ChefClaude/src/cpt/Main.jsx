import React from "react"
import IngredientList from "./IngredientList";
import ClaudeRecipe from "./chefClaude";
export default function Main() {

    const [ingredients, setIngredients] = React.useState(["all the main spices", "pasta", "ground beef", "tomato paste"])

    const [recipeShown, setRecipeShown] = React.useState(false)
    
    function toggleRecipeShown() {
        setRecipeShown(recipeShown => !recipeShown)
    }
    //React nineteen function, passed to action
    // <! -- action={addIngredient} -->

    // function addIngredient(formData) {
    //     const newIngredient = formData.get("ingredient")
    //     setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    // }
        function addIngredient(newIngredient){
            setIngredients(prevIngredients => [...prevIngredients, newIngredient])
        }
    function handleSubmit(e){
        e.preventDefault();
        let formData = new FormData(e.currentTarget);
        let newIngredient = formData.get("ingredient");
        addIngredient(newIngredient)
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
            {ingredients.length> 0 && <IngredientList
             
            ingredients={ingredients}
                toggleRecipeShown = {toggleRecipeShown}
            />}

            {recipeShown&&<ClaudeRecipe/>}
        </main>
    )
}