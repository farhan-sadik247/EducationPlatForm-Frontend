
import React, { useState } from 'react';
import {Link, useHistory } from 'react-router-dom';
import './UserForgotPassword.css';
const UserForgotPassword = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState('');
//   const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    
  };

  return (
    <div className="container mt-4">
      <h1>Forgot Password</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="question">Choose a question</label>
        <select name="question" id="question" onChange={(e) => setQuestion(e.target.value)}>
        <option value="">-- Select a Question --</option>
        <option value="1">What was your favorite Place?</option>
        <option value="2">What is your favourite author?</option>
        <option value="3">What is your favourite movie?</option>
        <option value="4">What is your favourite book?</option>
        </select>
        {question && (
          <div>
            <label htmlFor="answer">{`What is the answer to "${question}"?`}</label>
            <input type="text" name="answer" id="answer" value={answer} onChange={(e) => setAnswer(e.target.value)} required/>
          </div>
        )}
        {question === "" && <div to="/user-forgot-change-password/1"><button type="submit" disabled>Submit</button></div>}
        {question !== "" && <Link to="/user-forgot-change-password/1"><button type="submit">Submit</button></Link>}
      </form>
    </div>
  );
};

export default UserForgotPassword;
