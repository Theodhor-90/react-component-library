import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Button from './components/button/Button'
import './scss/index.scss'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <App />
        <Button />
    </React.StrictMode>
)
