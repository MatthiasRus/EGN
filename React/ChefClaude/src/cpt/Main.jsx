import React from "react"
import IngredientList from "./IngredientList";
import ClaudeRecipe from "./chefClaude";
import {getRecipeFromMistral} from "../../ai"

export default function Main() {

    const [ingredients, setIngredients] = React.useState(["chicken", "all the main spices", "corn", "heavy cream", "pasta"])

    const [recipe, setRecipe] = React.useState("")
    const recipeSection = React.useRef(null)
    
    async function getRecipe() {
        const result = await getRecipeFromMistral(ingredients)
        setRecipe(() => result)
    }

   React.useEffect(() => {
    if (recipe !== ""  && recipeSection.current !== null){
        recipeSection.current.scrollIntoView()
    }
    },[recipe])

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
            ref = {recipeSection}
            ingredients={ingredients}
                getRecipe = {getRecipe}
            />}

            {recipe&&<ClaudeRecipe recipe={recipe}/>}
        </main>
    )
}