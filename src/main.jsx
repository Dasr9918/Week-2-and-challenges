/*
App Component

import React from 'react';
import ReacDOM from 'react-dom/client';

function App(){
    return <h1> Hola Mundo</h1>
}

ReactDOM.createRoot( document.getElementById('root')).render(
    <React.StricMode>
        <App />
    </React.StricMode>
)
*/

//Props
import React from 'react';
import ReacDOM from 'react-dom/client';

function App(){
    return <h1> Hola Mundo</h1>
}

ReactDOM.createRoot( document.getElementById('root')).render(
    <React.StricMode>
        <FirstApp title="My First App"/>
    </React.StricMode>
)