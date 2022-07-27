import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';

import { fetchComments } from './commentsSlice';

export const Comment = (props) => {
    const { post, permalink, comments } = props;
    const commentsState = useSelector((state) => state.comments);
    const { comments, loadingComments, errorComments } = 

    useEffect(() => {
        dispatch(fetchPosts(activeSubreddit));
        }, [dispatch, activeSubreddit]);


    if (post.errorComments) {
        return (
            <div>
            <h3>Error loading comments</h3>
            </div>
        );
    }

    if (post.loadingComments) {
        return (
            <div>
            <p>Loading comments...</p>
            </div>
        );
    }

    if (post.showingComments) {
        return (
        <div className={styles.comment} key={comment.id}>
            <div className={styles.commentHeader}>
                <p className={styles.commentAuthor}>{comment.author}</p>
                <p className={styles.commentDate}>{dateCalculator(comment.created_utc)}</p>
            </div>
            <p>{comment.body}</p>
        </div>
        )
    }
}