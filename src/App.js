import "./App.css";
import Home from "./Home_search";
import NavBar from "./components/navBar/NavBar.js";
import HowToUse from "./HowToUse";
import { Link, Route, BrowserRouter as Router } from "react-router-dom";

function App() {
	return (
		<Router>
			<header>
				<Link to="/">
					<button>홈</button>
				</Link>
				<Link to="/howtouse">
					<button>사용방법</button>
				</Link>
			</header>
			<main>
				<div className="App">
					<NavBar />
					<Route path="/" component={Home} exact />
					<Route path="/howtouse" component={HowToUse} />
				</div>
			</main>
		</Router>
	);
}

export default App;
