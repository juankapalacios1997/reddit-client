import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSubreddits, selectSubreddits, selectActiveSubreddit, changeActiveSubreddit } from "./subredditsSlice";
import { Link } from 'react-router-dom';
import './subreddits.css';

export const Subreddits = (props) => {
    const dispatch = useDispatch();
    const subreddits = useSelector(selectSubreddits);
    const activeSub = useSelector(selectActiveSubreddit);

    useEffect(() => {
    dispatch(fetchSubreddits());
    }, [dispatch]);

    return (
    <div className="subreddit-card">
        <h2>Subreddits</h2>
        <div className="subreddit-container" >
            <ul className="subreddits">
            {subreddits.map((subreddit) => (
                <Link to="/" key={subreddit.id}>
                    <li 
                        onClick={() => dispatch(changeActiveSubreddit(subreddit.url))}
                        className={`${activeSub === subreddit.url ? "selected-subreddit" : "unselected-subreddit"}`}
                    >
                        <img src={subreddit.community_icon.split("?")[0]} onError={(e) => e.target.src = props.logo} alt={`${subreddit.display_name}`}/>
                        {subreddit.display_name}
                    </li>
                </Link>
            ))}
            </ul>
        </div>
    </div>
    );
};

export default Subreddits;