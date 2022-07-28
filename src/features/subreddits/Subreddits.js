import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSubreddits, selectSubreddits, selectActiveSubreddit } from "./subredditsSlice";
import { changeActiveSubreddit } from "../posts/postSlice";
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
        <div className="subreddit-container" >
            <h2>Subreddits</h2>
            <ul className="subreddits">
            {subreddits.map((subreddit) => (
                <Link to="/" key={subreddit.id}>
                    <li 
                        key={subreddit.id}
                        className={`${activeSub === subreddit.url ? `selected-subreddit`: 'unselected-subreddit'}`}
                        onClick={() => dispatch(changeActiveSubreddit(subreddit.url))}
                     >
                        <img
                            src={subreddit.community_icon.split("?")[0]} 
                            onError={(e) => e.target.src = props.logo} 
                            alt={`${subreddit.display_name}`}
                            className="subreddit-icon"
                            style={{ border: `3px solid ${subreddit.primary_color}` }}
                        />
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