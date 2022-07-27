import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';

import {
    fetchPosts,
} from './postSlice';

import { selectFilteredPosts } from '../Header/searchTerm/searchTermSlice';
import { PostInfo } from './postInfo/PostInfo';
import { Likes } from './likes/Likes';
import { Comments } from './comments/Comments';

import './posts.css';




export const Posts = () => {
    const postsState = useSelector((state) => state.redditPosts);
    const [ isReadMore, setIsReadMore ] = useState(true);
    const { isLoading, error, activeSubreddit } = postsState;
    const posts = useSelector(selectFilteredPosts);
    const dispatch = useDispatch();

    useEffect(() => {
    dispatch(fetchPosts(activeSubreddit));
    }, [dispatch, activeSubreddit]);

    const toggleReadMore = () => {
      setIsReadMore(!isReadMore);
    };

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

    if (posts.length === 0) {
      return (
        <p>No posts matching your search.</p>
      );
    };

    return (
    <div className="posts-card">
        {posts.map(post => (
            <section className="post-container" key={post.id}>
                <div className="post-body">
                    <div className="individual-post">
                        <h2>{post.title}</h2>
                        <p>{(isReadMore ? post.selftext.substring(0, 250) : post.selftext) + (isLoading && post.selftext.length > 600 ? " [...]" : "")}</p>
                        {post.selftext.length > 600 ? <span className="read-more" onClick={toggleReadMore}>Click to see more...</span> : null}
                        <img src={post.url} onError={(e) => e.target.style.display = "none"} alt={post.title}/>
                    </div>
                    <div className="post-footer">
                      <PostInfo postId={post.id}
                        author={post.author}
                        created={post.created_utc}
                        />
                      <Likes ups={post.ups}/>
                    </div>
                    <div className={isReadMore ? 'showing-coments' : 'hidden-comments'}>
                        <Comments post={post} postPermalink={post.permalink} postComments={post.num_comments}/>
                    </div>
                  </div>
            </section>
          ))}
    </div>
    );
};

export default Posts;