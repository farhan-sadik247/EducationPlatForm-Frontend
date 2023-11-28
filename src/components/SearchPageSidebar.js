function SearchPageSidebar() {
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

            <div className="mb-3">
                <label className="px-2"><h5>Category</h5></label>
                <div>
                <label className="px-2">
                    <input type="checkbox" value="python" /> Python
                </label>
                <br />
                <label className="px-2">
                    <input type="checkbox" value="java" /> Java
                </label>
                <br />
                <label className="px-2">
                    <input type="checkbox" value="laravel" /> Laravel
                </label>
                <br />
                <label className="px-2">
                    <input type="checkbox" value="css" /> CSS
                </label>
                <br />
                <label className="px-2">
                    <input type="checkbox" value="cpp" /> C++
                </label>
                </div>
            </div>
            </div>
        </div>
        </div>

    );
}

export default SearchPageSidebar;
