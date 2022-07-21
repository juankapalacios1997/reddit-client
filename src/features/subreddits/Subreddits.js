import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSubreddits, selectSubreddits, selectActiveSubreddit, changeActiveSubreddit } from "./subredditsSlice";
import { Link } from 'react-router-dom';
//import './Subreddits.css';

export const Subreddits = () => {
  const dispatch = useDispatch();
  const subreddits = useSelector(selectSubreddits);
  const activeSub = useSelector(selectActiveSubreddit);

  useEffect(() => {
    dispatch(fetchSubreddits());
  }, [dispatch]);

  return (
    <div className="subreddit-card">
      <h2>Subreddits</h2>
      <ul className="subreddits-list">
        {subreddits.map((subreddit) => (
            <Link to="/" key={subreddit.id}>
                <li 
                    onClick={() => dispatch(changeActiveSubreddit(subreddit.url))}
                    className={activeSub === subreddit.url === "selected-subreddit"}
                >
                    <img src={subreddit.icon} alt="subreddit-icon"/>
                    {subreddit.name}
                </li>
            </Link>
        ))}
      </ul>
    </div>
  );
};

export default Subreddits;