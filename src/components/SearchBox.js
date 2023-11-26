import { Link } from 'react-router-dom';

import './SearchBox.css';

function SearchBox() {
    return (
        <div className="searchbar">
            <input className="search_input" type="text" name="" placeholder="Search..." />
            
            <Link to="#" className="search_icon"><i className="fas fa-search"></i></Link>
        </div>
    );
}

export default SearchBox;