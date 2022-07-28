import { getPostComments } from '../../../api/reddit';

import { dateCalculator } from '../postInfo/date-calculator/date-calculator';
import { useState } from 'react';

import './comments.css';

export const Comments = (props) => {
    const { permalink, numComments } = props;
    const [ showingComments, setShowingComments ] = useState(false);
    const [ comments, setComments ] = useState([]);

    const onToggleComments = () => {
        setShowingComments(!showingComments);
        getPostComments(permalink)
            .then(jsonComments => setComments(
                jsonComments.map(comment => (

                    <div className='comment' key={comment.id}>
                        <p>{comment.body}</p>
                        <div className='comment-footer'>
                            <p className='comment-author'>{comment.author}</p>
                            <p className='comment-date'>{dateCalculator(comment.created_utc)}</p>
                        </div>
                    </div>

                ))));

    }
    
    return (
        <div className='comments-container'>
            <div className='comments-header' >
                <p>{`Comments: ${numComments} `}</p>
                <p><span className={'show-comments'} onClick={onToggleComments}>{!showingComments ? 'Show comments' : 'Hide comments'}</span></p>
            </div>
            <div className={showingComments ? 'comments-displayed' : 'comments-hidden'}>
                {comments}
            </div>
        </div>
    )
}

