import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSubreddits, selectSubreddits } from "./subredditsSlice";
//import './Subreddits.css';

export const Subreddits = () => {
  const dispatch = useDispatch();
  const subreddits = useSelector(selectSubreddits);
  //const selectedSubreddit = useSelector(selectSelectedSubreddit);

  useEffect(() => {
    dispatch(fetchSubreddits());
  }, [dispatch]);

  return (
    <div className="subreddit-card">
      <h2>Subreddits</h2>
      <ul className="subreddits-list">
        {subreddits.map((subreddit) => (
          <li
            key={subreddit.id} >
            
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Subreddits;