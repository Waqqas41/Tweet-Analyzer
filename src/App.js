import CodebenderIntro from './CodebenderIntro';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <img src="/logo.png" alt="SuperViral.ai logo" width="380" />
        <p>This is an interface to talk to the Last Codebender. Ask him anything you want.</p>
        <CodebenderIntro />
      </div>
    </div>
  );
}

export default App;
