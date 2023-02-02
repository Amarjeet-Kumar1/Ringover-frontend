import './App.css';
import NavHeader from './components/NavHeader';
import TeamScreen from './screens/TeamScreen';

function App() {
  return (
    <div className="App">
      <header>
        <NavHeader />
      </header>
      <main>
        <TeamScreen />
      </main>
    </div>
  );
}

export default App;
