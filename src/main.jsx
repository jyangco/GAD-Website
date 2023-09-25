import React from 'react'
import ReactDOM from 'react-dom/client'
import { 
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom'

import Main from './routes/Router.jsx'

import './index.css'

function Index(){
    return(
        <Router>
            <Routes>
                <Route path="/*" element = {<Main/>} />
            </Routes>
        </Router>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Index />
    </React.StrictMode>,
)
