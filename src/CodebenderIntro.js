import { useState } from 'react';

const CodebenderIntro = () => {
  const [result, setResult] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [prompt, setPrompt] = useState("");

  const getData = async (input = prompt) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/openai?prompt=${input}`);
      const body = await response.json();
      const aiResponse = body;
      setResult(aiResponse);
      setLoading(false);
      setError("");
    } catch (e) {
      setError("Something went wrong.")
    }
  };

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
      <div className="response" placeholder="Your answer will be displayed here!">
            <div dangerouslySetInnerHTML={{ __html: error || result }} />
      </div>
    )
  }

  return (
    <>
      <form className="mainForm" onSubmit={submitForm}>
        
      <textarea name="input-field" maxLength="280" spellCheck="true" placeholder=" Write a tweet less than 280 characters..." onChange={updatePrompt} value={prompt}></textarea>
        
        <button type="submit" className="mainButton">
          
            {loading ? <i className="fa fa-circle-o-notch fa-spin" /> : <i className="fa fa-light fa-location-arrow" />}
        </button>
      </form>    
      {renderResponse()}
    </>
  );
}

export default CodebenderIntro;