import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { Link } from 'react-router-dom';
import { dateCalculator } from './date-calculator/date-calculator';
import {
    fetchPosts,
    changeActiveSubreddit,
} from './postSlice';

import './posts.css';



export const Posts = () => {
    const postsState = useSelector((state) => state.redditPosts);
  const { posts, isLoading, error, activeSubreddit } = postsState;
    const dispatch = useDispatch();

    useEffect(() => {
    dispatch(fetchPosts(activeSubreddit));
    }, [dispatch, activeSubreddit]);

    if (isLoading) {
        return (
          <p>Loading...</p>
        );
      };
    
      if (error) {
        return (
          <div className="error">
            <h2>Failed to load posts.</h2>
            <button
              type="button"
              onClick={() => dispatch(fetchPosts(activeSubreddit))}
            >
              Try again
            </button>
          </div>
        );
      };

    return (
    <div className="posts-card">
        {posts.map(post => (
            <section className="post-container" key={post.id}>
                <div className="post-body">
                    <div className="individual-post" onClick={[]}>
                        <h2>{post.title}</h2>
                        <p>{post.selftext.substring(0, 600) + (post.selftext.length > 600 ? " [...]" : "")}</p>
                        {post.selftext.length > 600 ? <p className="read-more">read more...</p> : null}
                        <img src={post.url} onError={(e) => e.target.style.display = "none"} alt={post.title}/>
                    </div>
                </div>
            </section>))}
    </div>
    );
};

export default Posts;