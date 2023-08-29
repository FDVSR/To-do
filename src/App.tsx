import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import Projects from './pages/Projects/Projects';
import Tasks from './pages/Tasks/Tasks';

export function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route>
                    <Route path="/" element={<Projects />} />
                    <Route path="/tasks/:project" element={<Tasks />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
export default App;
