import React from "react";
import app from './firebase'

const Logged = () => {
    return (
        <>
            <h1>You are Logged!</h1>
            <button onClick={() => app.auth().signOut()}>Sign Out</button>
        </>
    );
};

export default Logged;

