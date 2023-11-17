import { Link, useNavigate } from "react-router-dom";




function Test(){
    const goHome = useNavigate()

    const handleSubmit = () => {
        // const credential = { pass1, pass2}
        // fetch("/auth/change_pass", {
        //     method: "POST",
        //     headers: {"Content-Type": "application/json"},
        //     body: JSON.stringify(credential)})
        // .then(res => {return res.json()})
        // .then(data => {
        //     if (data === "g"){usercheck(true)}   
        //     if (data === "gg") {goHome("/")}  
        // })
        let asd = "asdd"
        fetch("/auth/test",
            {method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(asd)}
        )
        .then(res => {
            return res.json()})
        .then(data => {
            console.log(data)
        })
    }

    return(
        <div className="card">
            
            <div className="list-group list-group-flush">
                <Link to="/teacher-dashboard" className="list-group-item list-group-item-action"><center>Dashboard</center></Link>
                <button className="w-100 btn btn-lg btn-primary" type="submit" onClick={handleSubmit}>Register</button>
            </div>
        </div>
    );
}

export default Test;