import { useState } from 'react';

const CodebenderIntro = () => {
  const [result, setResult] = useState();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [prompt, setPrompt] = useState("");

  const getData = async (input = prompt) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/openai?prompt=${input}`);
      const body = await response.json();
      const aiResponse = body.content;
      setResult(aiResponse);
      setLoading(false);
      setError("");
    } catch (e) {
      setError("Something went wrong.")
    }
  };
 
  // .charcount {

  // }

  const updatePrompt = (event) => {
    event.preventDefault();
    setPrompt(event.target.value);
  };

  const submitForm = (event) => {
    event.preventDefault();
    setLoading(true);
    getData(prompt).then();
  };

  const renderResponse = () => {
    return (
      <div className="response">
         <div dangerouslySetInnerHTML={{ __html: error || result }} />
      </div>
    )
  }

  return (
    <>
      <form className="mainForm" onSubmit={submitForm}>
        {/* <input name="input-field" placeholder="Type your tweet" onChange={updatePrompt} value={prompt}/> */}
        {/* <textarea name="input-field" placeholder="Write something..." onChange={updatePrompt} value={prompt}></textarea> */}
        <textarea name="input-field" maxlength="280" oninput="countChar(this)" spellcheck="true" placeholder=" Write a tweet..." onChange={updatePrompt} value={prompt}></textarea>
        <button type="submit" className="mainButton">
          
          <div className="icons">
            {loading ? <p class="loading">Loading</p> : <p>Analyze Tweet</p>}
            </div>
        </button>
      </form>    
      {renderResponse()}
    </>
  );
}

export default CodebenderIntro;