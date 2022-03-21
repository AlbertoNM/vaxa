import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import { Navar } from './components/Navar/Navar';
import { Container } from './components/home/Container/Container'

function App() {
  return (
    <div className="App">
			<Router>
				<Navar/>
				<Container/>
			</Router>
    </div>
  );
}

export default App;
