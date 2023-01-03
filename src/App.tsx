import Diff from './Diff';
import './App.css';

function App() {
  return (
    <div>
      <main>
        <h1>Letter-by-letter diff</h1>
        <Diff string1="Kyle Peacock" string2="Kyle Matthews" />
        <br />
        <h2>Word diff</h2>
        <Diff
          string1="It is Wednesday, my dude"
          string2="It is Saturday, my dude"
          mode="words"
        />
      </main>
    </div>
  );
}

export default App;
