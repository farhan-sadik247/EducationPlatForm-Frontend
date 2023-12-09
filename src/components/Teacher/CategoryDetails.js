import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


function CategoryDetails() {

    const {category_id} = useParams()
    const [cata, setCata] = useState("")
    console.log(cata)
    const getCatas = async() => {
        let res = await fetch("/course/getcata")
        let data = await res.json()
        data.map((name, index) => 
            (data[index].id === Number(category_id)?(setCata(data[index])):(false))
        )
    }

    useEffect(
        () => {getCatas()}, []
    )

    return (    
        <div className="container mt-3">
            <div className="row">
                <h3>{cata.title}</h3>
                <p>Category Discription: {cata.details} </p>
                </div>
            </div>
    );
  }
  
  export default CategoryDetails;