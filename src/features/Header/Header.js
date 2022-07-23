import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { setSearchTerm } from './searchTerm/searchTermSlice';

import "./header.css";

export const Header = (props) => {
    const { logo } = props;
    const dispatch = useDispatch();
    const [searchTermLocal, setSearchTermLocal] = useState('');
    const searchTerm = useSelector((state) => state.searchTerm.searchTerm);

    const onSearchTermChange = (e) => {
        setSearchTermLocal(e.target.value);
      };
    
      useEffect(() => {
        setSearchTermLocal(searchTerm);
      }, [searchTerm]);
    
      const onSearchTermSubmit = (e) => {
        e.preventDefault();
        dispatch(setSearchTerm(searchTermLocal));
      };

    return (
        <div className="header" >
            <div className="logo-container">
                <img src={logo} className="logo" alt="logo" />
            </div>
            <div className="searchbar-container">
                <form className="search" onSubmit={onSearchTermSubmit}>
                    <input
                        type="text"
                        placeholder="Search"
                        value={searchTermLocal}
                        onChange={onSearchTermChange}
                        aria-label="Search posts"
                    />
                    <button type="submit" onClick={onSearchTermSubmit} aria-label="Search">
                        Search
                    </button>
                </form>
            </div>
        </div>
    )
}