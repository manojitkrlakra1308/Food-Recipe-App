import RecipeList from "@/components/recipe-list";

async function fetchListOfRecipe() {
  try {
    const apiResponse = await fetch("https://dummyjson.com/recipes");
    const data = await apiResponse.json();
    return data?.recipes;
  } catch (e) {
    throw new Error(e);
  }
}

export default async function Recipes() {
  const recipeList = await fetchListOfRecipe();

  return <RecipeList recipeList={recipeList} />;
}
