import "./App.css";
import Home from "./Home_search";
import NavBar from "./components/navBar/NavBar.js";
import HowToUse from "./HowToUse";
import WhoMadeThis from "./WhoMadeThis";
import Rank from "./Rank";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<Router>
				<NavBar />
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/howtouse" component={HowToUse} />
					<Route path="/whomadethis" component={WhoMadeThis} />
					<Route path="/rank" component={Rank} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
