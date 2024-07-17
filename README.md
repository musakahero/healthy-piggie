# mypiggyeats.com - Check if your guinea pig can eat certain foods

## The issue
As a guinea pig owner, it is tough to find information about the foods your piggie can or cannot eat in one place. There is a fair amount of foods that are toxic to them or should be provided in lower quantity.  

## The solution
To solve this issue, we created this simple search tool, where you can look up any types of food (vegetables, fruits, nuts etc.) and you'll receive all the important information, with first and foremost answering the question **"Can your guinea pig eat that?"**. The idea for the app is to be as straightforward as possible - least clicks possible, most important information provided and as accurate as possible. 

## Features
- Lightweight Web UI with self-explanatory color-coding, responsive on most display sizes
- Straightforward Search bar with autocomplete, no additional clicks required
- Answers on a few core questions:
  - Can my guinea pig eat X food?
  - What should I keep in mind when I give X to my guinea pig?
  - How much X should I give my guinea pig per day?
  - If X should be given with caution, which are the other foods that we should not combine it with?
- Caution badges - if the food should be provided with caution (orange-colored result box) - a badge will be displayed containing the specific issue of that food. Hovering over the badge will expand on that, via a tooltip
- Source badges - for every dietary tip given under the **"How much food should I give"** section, there is a **"Source"** link, so that you can reference the source if you wish to fact-check or get more information about it
- Most popular searches - this section keeps track of the most searched foods on our app
- Dark mode - simply click the switch to turn off the lights B)

## Tech stack
- HTML5/CSS3/JS
- ReactJS (create-react-app)
- Supabase ([PostgreSQL database](https://supabase.com/))

## Disclaimer
The content provided on **mypiggyeats.com is** for informational purposes only and is not intended to be a substitute for professional veterinary advice, diagnosis, or treatment. Always seek the advice of a qualified veterinarian.

# Additional information on the project build
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

