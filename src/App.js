import "./App.css";
import Home from "./Home_search";
import NavBar from "./components/navBar/NavBar.js";
import HowToUse from "./HowToUse";
import WhoMadeThis from "./WhoMadeThis";
import Rank from "./Rank";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

function App() {
	return (
		<Router>
			<div className="App">
				<NavBar />
				<Route path="/" component={Home} exact />
				<Route path="/howtouse" component={HowToUse} />
				<Route path="/whomadethis" component={WhoMadeThis} />
				<Route path="/rank" component={Rank} />
			</div>
		</Router>
	);
}

export default App;
