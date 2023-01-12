import React from 'react';
import {useAppSelector} from "../hooks/useAppSelector";
import {RootState} from "../store";


function Header() {
    const {user} = useAppSelector((state: RootState) => state.userReducer);
    return (
        <div>
            <h3>
                {user.firstName + "'" +
                's'} Recipes book
            </h3>
        </div>
    );
}

export default Header;

