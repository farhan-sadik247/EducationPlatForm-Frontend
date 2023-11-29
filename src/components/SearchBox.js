import { Link } from 'react-router-dom';

import './SearchBox.css';

function SearchBox(props) {

    return (
        <div className="searchbar">
            <input className="search_input" type="text" name="" placeholder="Search..." value = {props.search} onChange={(e)=>(props.setSearch(e.target.value))}/>
            
            <Link abc = "asd" to="/aftersearchpage" className="search_icon"><i className="fas fa-search"></i></Link>
        </div>
    );
}

export default SearchBox;