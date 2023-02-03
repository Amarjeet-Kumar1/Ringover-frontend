import './App.css';
import NavHeader from './components/NavHeader';
import ContactScreen from './screens/ContactScreen';
import JourneyScreen from './screens/JourneyScreen';
import StoreScreen from './screens/StoreScreen';
import TeamScreen from './screens/TeamScreen';

function App() {
  return (
    <div className="App">
      <header>
        <NavHeader />
      </header>
      <main>
        {/* <TeamScreen /> */}
        {/* <ContactScreen /> */}
        {/* <JourneyScreen /> */}
        <StoreScreen />
      </main>
    </div>
  );
}

export default App;
