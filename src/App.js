import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Form from './components/Form';
import About from './components/About';
import Alert from './components/Alert';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
    const [mode, setMode] = useState('light');
    const [alert, setAlert] = useState(null);

    useEffect(() => {
        document.body.style.backgroundColor = mode === 'dark' ? 'gray' : 'white';
    }, [mode]);

    useEffect(() => {
        document.title = `TextUtils - ${mode === 'dark' ? 'Dark Mode' : 'Light Mode'}`;
    }, [mode]);

    const showAlert = (message, type) => {
        setAlert({ msg: message, type: type });
        setTimeout(() => {
            setAlert(null);
        }, 3000);
    };

    const toggleMode = () => {
        if (mode === 'light') {
            setMode('dark');
            showAlert('Dark mode has been enabled', 'success');
        } else {
            setMode('light');
            showAlert('Light mode has been enabled', 'success');
        }
    };

    return (
        <Router>
            <>
                <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
                <Alert alert={alert} />
                <div className="container my-3">
                    <Routes>
                        <Route  exact path="/about" element={<About   mode={mode} />} />
                        <Route   exact    path="/" element={<Form showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />} />
                    </Routes>
                </div>
            </>
        </Router>
    );
}

export default App;


