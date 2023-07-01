import CodebenderIntro from './CodebenderIntro';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <img className="twitlogo" src="/twitlogo.webp" alt="twitter logo" width="50px" height="40px"/>
        
        <h1 className="title">Make your tweets go viral with the world's first
          <br></br> AI-powered Tweet Improver.</h1>
        <CodebenderIntro />
        <changeborder />
      </div>
    </div>
  );
}

export default App;