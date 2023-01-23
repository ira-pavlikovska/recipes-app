import React from 'react';
import {useAppSelector} from "../hooks/useAppSelector";
import {RootState} from "../store";


function Header() {
    const {user} = useAppSelector((state: RootState) => state.userReducer);
    return (
        <div  style={{color: 'rgba(0, 0, 0, 0.6)'}}>
            <h2>
                {user.firstName + "'" +
                's'} Recipes book
            </h2>
        </div>
    );
}

export default Header;

