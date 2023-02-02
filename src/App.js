import './App.css';
import NavHeader from './components/NavHeader';
import ContactScreen from './screens/ContactScreen';
import TeamScreen from './screens/TeamScreen';

function App() {
  return (
    <div className="App">
      <header>
        <NavHeader />
      </header>
      <main>
        {/* <TeamScreen /> */}
        <ContactScreen />
      </main>
    </div>
  );
}

export default App;
