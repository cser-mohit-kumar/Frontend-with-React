Question1:
difference between library and framework

answer1:
The technical difference between a framework and library lies in a term called inversion of control.
When you use a library, you are in charge of the flow of the application. You are choosing when and where to call the library. When you use a framework, the framework is in charge of the flow. It provides some places for you to plug in your code, but it calls the code you plugged in as needed.

---> React is called a library because it focuses only on the view layer and does not enforce a full application structure, whereas frameworks like Angular provide a complete architecture and control application flow.

------------------------------------------------------------------------------------------

Question2: current version of react

Answer2: The current version of React is 19.2.5, released on April 8, 2026.
The current version of React is React 19, which introduces features like Actions, the use hook for async handling, improved Server Components, and better performance with reduced boilerplate.

-----------------------------------------------------------------------------------------

Question3: folder and folder names with use case

Answer3: 
src/
│
├── assets/    --> contains: images, SVGs(image format based on XML code, not pixels), Fonts
├── components/ -->reusable ui pieces
├── configs/    --> for managing environment settings and build tools
├── hooks/     --> reusable logic
├── context/    --> context api files
├── services/	--> manages API calls and external interactions
├── utils/	--> stores reusable utility functions used across components to centralize common logic
├── styles/	--> contains CSS or styling files
├── App.jsx	
└── main.jsx

The Basics of Folder Structure : 
At the core of your project, you should create a few main folders. These typically include:

    components: This is where all your React components will go.
    styles: Use this folder for your CSS or style-related files.
    assets: Place all images, fonts, and any other files you need here.

---------------------------------------------------------------------------------------

Question4 : difference between create-react-app and vite app

Answer4:
Create React App (CRA) = older, Webpack-based, bundles everything
Vite = modern, uses native ES modules + fast tooling

-------------------------------------------------------------------------

Question5: difference between spa and mpa

answer5: 
multi page app: the old page is thrashed and a new HTML, CSS, JS page is rendered, takes less time to load at first time, 
example- e-commerce-> high seo

single page application: it doesnt reload, its done when seo is not a priority, uses json, take more time to load for the first time, doesnt change structure
spa: react (when user experience matters), angular(when security matters)


| Feature      | SPA                 | MPA         |
| ------------ | ------------------- | ----------- |
| Page reload  | ❌ No                | ✅ Yes       |
| Routing      | Client-side         | Server-side |
| Initial load | Slower              | Faster      |
| Navigation   | Faster              | Slower      |
| SEO          | Hard (but solvable) | Easy        |
| UX           | Smooth              | Traditional |

------------------------------------------------------------------------------------------

Question6: reconcillation, VDOM, diffing algo

Answer6:
VDOM → Diffing Algorithm → Reconciliation → Real DOM update
Virtual DOM is a lightweight representation of the UI, the diffing algorithm compares old and new Virtual DOM trees, and reconciliation is the overall process React uses to efficiently update the real DOM.

--------------------------------------------------------------------------------------------
