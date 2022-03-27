import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import { Navar } from './components/Navar/Navar';
import { Container } from './components/home/Container/Container';
import { Footer } from './components/Footer/Footer'

function App() {
  return (
    <div className="App">
			<Router>
				<Navar />
				<Container />
				<Footer />
			</Router>
    </div>
  );
}

export default App;
