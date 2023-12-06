
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
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
          <option value="favorite Place">What was your favorite Place?</option>
          <option value="favourite author">What is your favourite author?</option>
          <option value="favourite movie">What is your favourite movie?</option>
          <option value="favourite book">What is your favourite book?</option>
        </select>
        {question && (
          <div>
            <label htmlFor="answer">{`What is the answer to "${question}"?`}</label>
            <input type="text" name="answer" id="answer" value={answer} onChange={(e) => setAnswer(e.target.value)} />
          </div>
        )}
        <Link to="/teacher-forgot-change-password/1"><button type="submit">Submit</button></Link>

      </form>
    </div>
  );
};

export default ForgotPassword;
