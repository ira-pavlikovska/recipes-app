import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom';
import LoginPage from "./containers/LoginPage";
import RecipesPage from "./containers/RecipesPage";
import PersonalAccountPage from "./containers/PersonalAccountPage";


function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<LoginPage/>}/>
                    <Route path='/recipes' element={<RecipesPage/>}/>
                    <Route path='/personalAccount' element={<PersonalAccountPage/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
