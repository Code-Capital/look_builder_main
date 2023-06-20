import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/styles/global.scss';

import LayoutDefault from './components/layout';
import LookBuilderForm from './pages/LookBuilderForm';
import Footer from './components/layout/footer';
import SuitBuilderRoot from "./pages/SuitBuilderRoot";
import {AppProvider} from "./context/SuitBuilderContext";
import {SelectionProvider} from "./context/UserSelectionContext";
import LookBuilder from "./pages/LookBuilder";
import LookBuilderStandalone from "./components/look-builder-standalone/LB";

function App() {
    return (
        <Router>
            <LayoutDefault>
                <Routes>

                    <Route path="/" element={
                        <>
                            <LookBuilderForm/>
                            <Footer/>
                        </>

                    }/>

                    <Route path="/look-builder" element={
                        <>
                            <LookBuilderStandalone/>
                            <Footer/>
                        </>

                    }/>

                    <Route path="/suit-builder" element={
                        <AppProvider>
                            <SelectionProvider>
                                <SuitBuilderRoot/>
                            </SelectionProvider>
                        </AppProvider>
                    }/>

                </Routes>

            </LayoutDefault>
        </Router>
    );
}

export default App;
