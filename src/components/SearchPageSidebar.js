import { Link, useNavigate } from "react-router-dom";

import { useEffect, useState } from "react";
import Cookies from "js-cookie";

function SearchPageSidebar() {
    const [title, settitle] = useState("")
    const [description, setdescription] = useState("")
    const [subscriptionAmount, setSubscriptionAmount] = useState("")
    const [techs, settechs] = useState("")
    const [catas, setCatas] = useState([])
    const [cata, setCata] = useState("")
    const [warning, usercheck] = useState(false)
    const goHome = useNavigate()
    const getCatas = async() => {
        let res = await fetch("course/getcata")
        let data = await res.json()
        setCatas(data)
    }
    useEffect(
        () => {getCatas()},[]
    )
    return (
        <div className="container mb-5">
        <div className="card mt-5">
            <div className="list-group list-group-flush">
            <div className="mb-3">
                <label className="px-2"><h5>Price</h5></label>
                <div>
                <label className="px-2">
                    <input type="checkbox" value="free" /> Free
                </label>
                <br />
                <label className="px-2">
                    <input type="checkbox" value="paid" /> Paid
                </label>
                </div>
            </div>

            {/* Category */}
            <div className="mt-1 ">
            <label htmlFor="title" className="form-label px-2"><h5>Category</h5></label> 
            <select name="category" className="form-control"  onChange={(e)=> {setCata(e.target.value)}}>
                <option value="" ></option>
                {catas.map((name, index) =>
                    <option value={catas[index].id} >{catas[index].title}</option> )}
                
                </select>                         
            </div>
            {/* Category end */}
            </div>
        </div>
        </div>

    );
}

export default SearchPageSidebar;
