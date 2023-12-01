import { useEffect,useState } from "react";
import { Link,Navigate, useNavigate } from "react-router-dom";
import Header from "../Header";

function Login(props){


    // const [username, setUsername] = useState("")
    // const [password, setPassowrd] = useState("")
    // const [warning, usercheck] = useState(false)
    // const goHome = useNavigate()



    // const handleSubmit = () => {
    //     const credential = { username, password}
    //     fetch("/auth/signin", {
    //         method: "POST",
    //         headers: {"Content-Type": "application/json"},
    //         body: JSON.stringify(credential)})
    //     .then(data => {
    //         if (data === "f"){usercheck(true)}
    //         if (data === "welcome"){goHome("/")}

    //     })      
    // }
    
    const [username, setUsername] = useState("")
    const [user, setUser] = useState("1")
    const [password, setPassowrd] = useState("")
    const [warning, setWarning] = useState(false)
    const goHome = useNavigate()

    console.log(user)

    const handleSubmit = async (e) => {
        e.preventDefault();
        const credential = { username, password };
        fetch("/auth/signin", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(credential),
        })
          .then(() => getUser())
          .catch((error) => {
            console.error("Error logging in:", error);
          });
      };


    const getUser = async () => {
        try {
          let res = await fetch("/auth/getuser");
          let data = await res.json();
          setUser(data)
        } catch (error) {
          console.error("Error getting user:", error);
        }
      };


    useEffect (
        () => {
            if (user === "")(setWarning(true))
            else{if (user === "1")(setWarning(false))
            else{
                props.user(user)
                goHome("/")
            }}
        }, [user]
    )

    useEffect (()=>{
      document.title = 'Teacher Login'
  })    
    return(
        <div className="container mt-4">
            <div className="row">
                <div className="col-6 offset-3">
                    <div className="card">
                        <h4 className="card-header bg-success">User Login</h4> 
                        <div className="card-body">
                        <form>
                            <img className="mb-3 mt-0 img-thumbnail bg-success" src="logo002.png" alt="" width="600" height="200"/>
                            {/* <h1 className="h3 mb-3 fw-normal">Please sign in</h1> */}
                            {/* <div className="form-floating">
                            <input type="email" className="form-control mb-2" id="floatingInput" placeholder="name@example.com"/>
                            <label htmlFor="floatingInput">Email address</label>
                            </div> */}
                            <div className="form-floating">
                            <input type="text" className="form-control mb-2" id="floatingUsername" placeholder="Username" value = {username} onChange={(e) => setUsername(e.target.value)}/>
                            <label htmlFor="floatingInput">Username</label>
                            </div>
                            <div className="form-floating">
                            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" value = {password} onChange={(e) => setPassowrd(e.target.value)}/>
                            <label htmlFor="floatingPassword">Password</label>
                            </div>
                            {/* <div className="checkbox mb-3 mt-1">
                                <input type="checkbox" className="from-check-input" id="exampleCheck1" />
                                <label className="from-check-label" htmlFor="exampleCheck1">Remember Me</label>
                            </div> */}
                            <button className="w-100 btn btn-lg btn-primary" type="submit" onClick={handleSubmit}>Sign in</button>
                            {warning && <div className="text-danger">Unknown Cred {password}</div>}
                            <p className="mt-4"><Link>Forgot Password?</Link></p>
                            <p>Don't have account?<Link to="/user-register">Create Account</Link></p>
                        </form>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    );
}


export default Login;
