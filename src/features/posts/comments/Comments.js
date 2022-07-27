import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';

import { dateCalculator } from '../postInfo/date-calculator/date-calculator';

import { fetchComments } from './commentsSlice';

export const Comments = (props) => {
    const { postPermalink, postComments } = props;
    const commentsState = useSelector((state) => state.comments);
    const { comments, loadingComments, errorComments } = commentsState;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchComments(postPermalink));
        }, [dispatch, postPermalink]);


    if (errorComments) {
        return (
            <div>
            <h3>Error loading comments</h3>
            </div>
        );
    }

    if (loadingComments) {
        return (
            <div>
            <p>Loading comments...</p>
            </div>
        );
    }

    return (
    <div className='comments-container'>
        <p className='comment-number'>Comments: <span>{postComments}</span></p>
        {comments.map((comment) => {
            return (
                <div className='comment' key={comment.id}>
                    <div className='comment-header'>
                        <p className='comment-author'>{comment.author}</p>
                        <p className='comment-date'>{dateCalculator(comment.created_utc)}</p>
                    </div>
                    <p>{comment.body}</p>
                </div>
            )
        })}
    </div>
    )
};