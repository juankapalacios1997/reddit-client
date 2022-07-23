import React from "react";
import { useState } from "react";

import './likes.css';

export const Likes = (props) => {
    const { ups } = props;
    const [ likes, setLikes ] = useState(ups);
    const [ activeLike, setActiveLike ] = useState(false);
    const [ activeDislike, setActiveDislike ] = useState(false);

    const onLikeSubmitt = () => {
        if(!activeLike) {
            setActiveLike(true);
            setActiveDislike(false);
            setLikes(ups + 1);
        } else {
            setActiveLike(false);
            setLikes(ups);
        }
    }

    const onDislikeSubmitt = () => {
        if(!activeDislike) {
            setActiveDislike(true);
            setActiveLike(false);
        } else {
            setActiveDislike(false);
        }
    }

    return (
        <div className="likes-bar">
            <button className={activeLike ? "active-like" : "like"} onClick={onLikeSubmitt}/>
            <p>{likes}</p>
            <button className={activeDislike ? "active-dislike" : "dislike"} onClick={onDislikeSubmitt}></button>
        </div>
    )
}