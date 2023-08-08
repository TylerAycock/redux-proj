import "./App.css";
import Header from "./Components/Header";
import MainDisplay from "./Components/MainDisplay";
import OptionDisplay from "./Components/OptionDisplay";
import { selectPotentials } from "./redux/slices/potentialCountriesSlice";
import { useSelector } from "react-redux";
import { selectDisplay } from "./redux/slices/displayCountrySlice";
import Loading from './Components/Loading'
import { loadingSubscrition } from "./redux/slices/loadingSlice";

function App() {
    const potentails = useSelector(selectPotentials)
    const currentDisplay = useSelector(selectDisplay)
    let currentLoading = useSelector(loadingSubscrition)

    console.log("display", currentDisplay)
    console.log('potentials', potentails)

    return (
        <div className="App font-link">
            <Header />
            {currentLoading && <Loading />}
            {currentDisplay ? <MainDisplay /> : <OptionDisplay />}
        </div>
    );
}

export default App;
