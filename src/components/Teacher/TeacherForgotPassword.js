
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './TeacherForgotPassword.css';
const ForgotPassword = () => {
  const [question, setQuestion] = useState(null);
  const [answer, setAnswer] = useState('');
//   const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Send answer to server for verification
    // If answer is correct, redirect to change password page
    // If answer is wrong, display error message
  };

  return (
    <div className="container mt-4">
      <h1>Forgot Password</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="question">Choose a question</label>
        <select name="question" id="question" onChange={(e) => setQuestion(e.target.value)}>
          <option value="">-- Select a Question --</option>
          <option value="question1">What was your favorite childhood pet?</option>
          <option value="question2">What is your mother's maiden name?</option>
        </select>
        {question && (
          <div>
            <label htmlFor="answer">{`What is the answer to "${question}"?`}</label>
            <input type="text" name="answer" id="answer" value={answer} onChange={(e) => setAnswer(e.target.value)} />
          </div>
        )}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ForgotPassword;
