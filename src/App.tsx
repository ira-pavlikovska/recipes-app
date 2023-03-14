import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
} from 'react-router-dom';
import LoginPage from "./containers/LoginPage";
import RecipesPage from "./containers/RecipesPage";
import PersonalAccountPage from "./containers/PersonalAccountPage";
import RecipePage from "./containers/RecipePage";
import CreateAccountPage from "./containers/CreateAccountPage";
import {RecipeType} from "./models";

// type Props = {
//     recipe: RecipeType,
//     handleDeleteRecipe: (recipe: RecipeType) => void
// }


function App() {


    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<LoginPage/>}/>
                    <Route path='/createAccount' element={<CreateAccountPage/>}/>
                    <Route path='/recipes' element={<RecipesPage/>}/>
                    <Route path='/personalAccount' element={<PersonalAccountPage/>}/>
                    <Route path='/recipe/:id' element={<RecipePage/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
