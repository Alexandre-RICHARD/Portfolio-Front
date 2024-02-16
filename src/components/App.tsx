import React from "react";
import {
    BrowserRouter as Router, Routes, Route
} from "react-router-dom";

import {
    cookieHandler,
    portfolioState,
    useAppSelector,
    Contact,
    Curriculum,
    Footer,
    Header,
    HeaderMenu,
    HomePage,
    LoadingIcon,
    NotFound,
    Projects,
    ProjectDetails,
    ScrollEmergence,
    ScrollTop
} from "@/IndexImporter";
import "./App.scss";

const App: React.FC = () => {
    cookieHandler.handleVisitCookie(365);

    const loading = useAppSelector(portfolioState.Loading);

    return (
        <Router>
            {loading ? <LoadingIcon /> : null}
            <ScrollEmergence />
            <ScrollTop />
            <Header />
            <HeaderMenu />
            <main>
                <Routes>
                    <Route
                        element={<HomePage />}
                        path="/"
                    />
                    <Route
                        element={<Curriculum />}
                        path="/curriculum"
                    />
                    <Route
                        element={<Projects />}
                        path="/projects"
                    />
                    <Route
                        element={<ProjectDetails />}
                        path="/projects/:projectName"
                    />
                    <Route
                        element={<Contact />}
                        path="/contacts"
                    />
                    <Route
                        element={<NotFound />}
                        path="/*"
                    />
                </Routes>
            </main>
            <Footer />
        </Router>
    );
};

export default App;
