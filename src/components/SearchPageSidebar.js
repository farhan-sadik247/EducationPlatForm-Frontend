// import { Link, useNavigate } from "react-router-dom";
// import { useEffect, useState } from "react";
// import Cookies from "js-cookie";
// function SearchPageSidebar(props) {
//     const [free, setFree] = useState(false)
//     const [paid, setPaid] = useState(false)
//     const [catas, setCata] = useState([])
//     const [cataid, setCataid] = useState(0)

//     useEffect(
//         () => {getCata()}, []
//     )

//     let getCata = async () => {

//         let response = await fetch(`/course/getcata`)
//         let data = await response.json()
//         setCata(data)
//     }

//     useEffect(
//         () => {getCourse()}, [free, paid, cataid, props.search]
//     )

//     let getCourse = async () => {

//         let f = ""
//         let p = ""

//         if (free)(f="t")
//         else(f="f")
//         if (paid)(p="t")
//         else(p="f")

//         let response = await fetch(`/course/${f}${p}${cataid}${props.search}/coursesearch`)
//         let data = await response.json()
//         props.course(data)
//     }
    
    
//     return (
//         <div className="container mb-5">
//         <div className="card mt-5">
//             <div className="list-group list-group-flush">
//             <div className="mb-3 mt-1">
//                 <label className="px-2"><h5>Price</h5></label>
//                 <div>
//                 <label className="px-2">
//                     <input type="checkbox" value={true} onChange = {() => setFree((current) => !current)} /> <span className="px-2">Free</span>
                     
//                 </label>
//                 <br />
//                 <label className="px-2">
//                     <input type="checkbox" value={true} onChange = {() => setPaid((current) => !current)} /> <span className="ml-auto text-right text-success">Paid</span>
//                 </label>
//                 </div>
//             </div>

//             {/* Category */}
//             <div className="mt-2 ">
//             <label htmlFor="title" className="form-label px-2"><h5>Category</h5></label> 
//             <select name="category" className="form-control"  onChange={(e)=> {setCataid(e.target.value)}}>
//                 <option value={0} >All</option>
//                 {catas.map((name, index) =>
//                     (<option value={catas[index].id} >{catas[index].title}</option>) )}
                
//                 </select>                         
//             </div>
//             {/* Category end */}
//             </div>
//         </div>
//         </div>

//     );
// }

// export default SearchPageSidebar;


import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import './SearchPageSidebar.css';
function SearchPageSidebar(props) {
  const [free, setFree] = useState(false);
  const [paid, setPaid] = useState(false);
  const [catas, setCata] = useState([]);
  const [cataid, setCataid] = useState(0);

  useEffect(() => {
    getCata();
  }, []);

  let getCata = async () => {
    let response = await fetch(`/course/getcata`);
    let data = await response.json();
    setCata(data);
  };

  useEffect(() => {
    getCourse();
  }, [free, paid, cataid, props.search]);

  let getCourse = async () => {
    let f = "";
    let p = "";

    if (free) f = "t";
    else f = "f";
    if (paid) p = "t";
    else p = "f";

    let response = await fetch(`/course/${f}${p}${cataid}${props.search}/coursesearch`);
    let data = await response.json();
    props.course(data);
  };

  return (
    <div className="container mb-5">
      <div className="card mt-5">
        <div className="list-group list-group-flush">
          <div className="mb-3">
            <label className="px-2 mt-2">
            <h5>Price</h5>
            </label>
            <div>
            <label className="px-2 price-checkbox float-start">
            <input type="checkbox" value={true} onChange={() => setFree((current) => !current)} /> 
            <span>Free</span>
            <span className="price-label">{free ? " (Free)" : ""}</span>
            <br/>
            <input className="ms-5" type="checkbox" value={true} onChange={() => setPaid((current) => !current)} /> 
            <span>Paid</span>
            <span className="price-label">{paid ? " (Paid)" : ""}</span>
            </label>
            </div>
          </div>

          {/* Category */}
          <div className="mt-2">
            <label htmlFor="title" className="form-label px-2">
              <h5>Category</h5>
            </label>{" "}
            <select name="category" className="form-control" onChange={(e) => { setCataid(e.target.value) }}>
              <option value={0}>All</option>
              {catas.map((name, index) => (
                <option value={catas[index].id} key = {index}>{catas[index].title}</option>
              ))}
            </select>
          </div>
          {/* Category end */}
        </div>
      </div>
    </div>
  );
}

export default SearchPageSidebar;
