import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { Link } from 'react-router-dom';

import {
    fetchPosts,
    changeActiveSubreddit,
} from './postSlice';

import { selectFilteredPosts } from '../Header/searchTerm/searchTermSlice';
import { PostInfo } from './postInfo/PostInfo';
import { Likes } from './likes/Likes';

import './posts.css';




export const Posts = () => {
    const postsState = useSelector((state) => state.redditPosts);
    const { isLoading, error, activeSubreddit } = postsState;
    const posts = useSelector(selectFilteredPosts);
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
                    <div className="individual-post" onClick={[() => dispatch(changeActiveSubreddit(post.name))]}>
                        <h2>{post.title}</h2>
                        <p>{post.selftext.substring(0, 600) + (post.selftext.length > 600 ? " [...]" : "")}</p>
                        {post.selftext.length > 600 ? <p className="read-more">read more...</p> : null}
                        <img src={post.url} onError={(e) => e.target.style.display = "none"} alt={post.title}/>
                    </div>
                    <div>
                      <PostInfo postId={post.id}
                        author={post.author}
                        created={post.created_utc}
                        />
                      <Likes ups={post.ups}/>
                    </div>
                </div>
            </section>))}
    </div>
    );
};

export default Posts;