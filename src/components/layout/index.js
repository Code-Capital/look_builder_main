import React from 'react';
import TopNavigation from "../base/TopNavigation";

function LayoutDefault({children}) {
    return (
        <div className={"app"}>
            <header>
                <TopNavigation/>
            </header>
            <main className={"main"}>
                {children}
            </main>
            <footer/>
        </div>
    );
}

export default LayoutDefault;
