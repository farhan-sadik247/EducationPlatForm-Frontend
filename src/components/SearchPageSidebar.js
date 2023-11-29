import { useEffect, useState } from "react";

function SearchPageSidebar() {

    const [free, setFree] = useState(false)
    const [paid, setPaid] = useState(false)
    const [cata, setCatas] = useState([])
    const [catacheck, setcatacheck] = useState(true)
    const [catalist, setcatalist] = useState("")
    
    console.log(catalist)

    const getCatas = async() => {
        let res = await fetch("course/getcata")
        let data = await res.json()
        setCatas(data)
    }

    const handleCata = async(id) => {
        fetch("course")
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
                    <input type="checkbox" value={true} onChange = {() => setFree((current) => !current)} /> Free
                </label>
                <br />
                <label className="px-2">
                    <input type="checkbox" value={true} onChange = {() => setPaid((current) => !current)} /> Paid
                </label>
                </div>
            </div>

            <div className="mb-3">
                <label className="px-2"><h5>Category</h5></label>
                <div>
                    {cata.map((name, index) => {
                        return(
                            <>
                            <label className="px-2">
                                <input type="checkbox" value = {cata[index].id} onClick = {(e) => (handleCata(e.target.value))}/> {cata[index].title}
                            </label>
                            <br />
                            </>)
                    })}
                <label className="px-2">
                    <input type="checkbox" value="python" /> Python
                </label>
                </div>
            </div>
            </div>
        </div>
        </div>

    );
}

export default SearchPageSidebar;
