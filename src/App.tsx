import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom';
import LoginPage from "./containers/LoginPage";
import RecipesPage from "./containers/RecipesPage";


function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<LoginPage/>}/>
                    <Route path='/recipes' element={<RecipesPage/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
