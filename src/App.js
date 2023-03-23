import 'bootstrap/dist/css/bootstrap.min.css';
import "./components/styles/global.scss"

import LayoutDefault from "./components/layout";
import LookBuilder from "./pages/LookBuilder";

function App() {
    return (
        <LayoutDefault>
            <LookBuilder/>
        </LayoutDefault>
    );
}

export default App;
