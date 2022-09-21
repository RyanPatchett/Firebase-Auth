import React from 'react';

const Nav = ({user, register, login, logout, loading}) => {
    return (
        <div className='nav__container'>
            <nav className="nav__bar">
                <h1 className="logo__text"> Frontend Simplified </h1>
                    <div className="nav__links">
                        {
                            user.email ?
                                <></>
                            :
                                <>
                                <button className="nav__login--btn btn" onClick={login}>Login</button>
                                <button className="nav__register--btn btn" onClick={register}>Register</button>
                                </>

                        }

                        {
                            user.email ? 
                                <button className="user__btn btn" onClick={logout}>{user.email[0].toUpperCase()}</button>
                            :
                            <></>
                        }
                    </div>
            </nav>
        </div>
    );
}

export default Nav;
