import React from "react"
import IngredientList from "./IngredientList";
import ClaudeRecipe from "./chefClaude";
import {getRecipeFromMistral} from "../../ai"

export default function Main() {

    const [ingredients, setIngredients] = React.useState([])

    const [recipe, setRecipe] = React.useState("")
    
    async function getRecipe() {
        const result = await getRecipeFromMistral(ingredients)
        setRecipe(() => result)
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
                getRecipe = {getRecipe}
            />}

            {recipe&&<ClaudeRecipe recipe={recipe}/>}
        </main>
    )
}