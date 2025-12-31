# This Recipe Discovery App 
It helps users explore and manage recipes using TheMealDB API. On the Home Page, users see a grid of recipe categories; clicking a category takes them to a Category Page showing all recipes in that category. Each recipe links to a Recipe Detail Page, where users can view full details (image, ingredients, instructions) and add or remove the recipe from their favorites.

The Favorites Page lists all recipes the user has marked as favorites, if there are none, a message will display "No favorites yet". A search bar in the navigation bar allows users to search for recipes by name; submitting a search takes them to a Search Results Page displaying matching recipes.

Navigation is simple:

- Home: Browse all categories.<br>
- Click a category: See recipes in that category.<br>
- Click a recipe: View recipe details and manage favorites.<br>
- Favorites: View your saved recipes.<br>
- Use the search bar: Find recipes by name.<br>

The app uses custom hooks for data fetching and local storage, and manages favorites globally with React Context, ensuring a smooth and persistent user experience.
Also, there are two buttons at the end of the page that give the option to go back a step or click home to navigate to the main home page.

Some of my code solutions come from YouTube videos and Google searches. At some points, I was stuck trying to complete tasks like creating a search bar or saving to local storage.

Things to improve are: (return to category) when the user is on the home page, clicks on a category, and then clicks on one of the listed meals, if the user clicks Category on the menu bar, the page is blank because it doesn’t remember which category was selected.