import s from './Docs.module.css'
export function Docs() {
  return (
    <article id="documentation" className={`container ${s.docs}`}>
      <h3>Nutritional Calculator</h3><br />
      <p>In this WebApp you will be able to:</p><br />
      <ul>
        <li>Search For Recipes:</li>
        <p>You are going to be able to search a big Open Food and Recipes Database API, using keywords and list each one of the results.</p>
        <p>You can look the specific nutritional data of each one of them, ingredients, and the source data of the recipe</p>
        <p>And, you can add your prefered recipes to a personal list</p>
        <br />
        <li>Nutritional Calculator:</li>
        <p>You can calculate the total amount of nutrients from your personal list of recipes and compare the data you need for by example a new recipe, or a gluten free recipe, and more options.</p>
      </ul>
      <br />
      <h3>Getting Started</h3><br />
      <ul>
        <li>Recipes:</li>
        <p>Go to Recipes.</p>
        <p>Write the keywords you want and clic in search recipe</p>
        <p>Select or Add the recipe you want</p>
        <br />
        <li>Nutrition:</li>
        <p>Select or Add the recipe you want previously</p>
        <p>Look all the nutrients from your recipes</p>
      </ul>
    </article>
  );
}
