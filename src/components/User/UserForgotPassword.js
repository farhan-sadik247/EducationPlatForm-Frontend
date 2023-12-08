import React, { useState } from 'react';
import {Link, useHistory, useNavigate } from 'react-router-dom';
import './UserForgotPassword.css';
const UserForgotPassword = () => {

    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState('');
    const [username, setUsername] = useState("")
    const [warning, setWarning] = useState(false)
    const navigate = useNavigate()
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        let res = await fetch(`/auth/change_pass/${username}$${question}$${answer}`)
        let data = await res.json()
        console.log(data)
        if(data === "f")setWarning(true)
        else(navigate("/user-forgot-change-password"))
    };

    return (
        <div className="container mt-4">
            <h1>Forgot Password</h1>
            <form onSubmit={handleSubmit}>
            <div className="form-floating">
            <input type="text" className="form-control mb-2" id="floatingUsername" placeholder="Username" value = {username} onChange={(e) => setUsername(e.target.value)}/>
            <label htmlFor="floatingUsername">Username</label>
            </div>
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
                    <label htmlFor="answer">{`What is the answer to your question?`}</label>
                    <input type="text" name="answer" id="answer" value={answer} onChange={(e) => setAnswer(e.target.value)} required/>
                </div>
            )}
            {question === "" && <div><button type="submit" disabled>Submit</button></div>}
            {question !== "" && <div><button type="submit">Submit</button></div>}
            </form>
            {warning && <div>Unknown Cred</div>}
        </div>
    );
};

export default UserForgotPassword;
