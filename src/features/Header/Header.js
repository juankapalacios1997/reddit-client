import { useState } from "react";
import { useSelector, useDispatch } from "react-redux/es/exports";

import "./header.css";

export const Header = (props) => {
    const { logo } = props;

    const dispatch = useDispatch();

    return (
        <div className="header" >
            <div className="logo-container">
                <img src={logo} className="logo" alt="logo" />
            </div>
            <div className="searchbar-container">
                <form className="search" onSubmit={[]}>
                    <input
                        type="text"
                        placeholder="Search"
                        value={[]}
                        onChange={[]}
                        aria-label="Search posts"
                    />
                    <button type="submit" onClick={[]} aria-label="Search">
                        Search
                    </button>
                </form>
            </div>
        </div>
    )
}