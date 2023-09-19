const recipes = [{
  id: 'greek-salad',
  name: 'Greek Salad',
  ingredients: ['tomatoes', 'cucumber', 'onion', 'olives', 'feta']
}, {
  id: 'hawaiian-pizza',
  name: 'Hawaiian Pizza',
  ingredients: ['pizza crust', 'pizza sauce', 'mozzarella', 'ham', 'pineapple']
}, {
  id: 'hummus',
  name: 'Hummus',
  ingredients: ['chickpeas', 'olive oil', 'garlic cloves', 'lemon', 'tahini']
}];

const recipeComponents = recipes.map((recipe) => (
  <div key={recipe.id}>
    <h2>{recipe.name}</h2>
    <ul>
      {recipe.ingredients.map((ingredient, index) => (
        <li key={index}>{ingredient}</li>
      ))}
    </ul>
  </div>
));

export default function Receipe() {
  return (
    <div>
      <h1>Recipes</h1>
      {/* {recipeComponents} */}
      <div>
        {recipes.map(receipe => (
          <div key={receipe.id}>
            <h2>{receipe.name}</h2>
            <ul>
              {receipe.ingredients.map((ingre, index) => (
                <li key={index}>{ingre}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
