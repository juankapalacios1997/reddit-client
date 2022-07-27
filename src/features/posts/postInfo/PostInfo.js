import { dateCalculator } from './date-calculator/date-calculator';
import './postInfo.css';

export const PostInfo = (props) => {
    const { author, created } = props

    return (
        <div className='post-info-container'>
            <ul className='post-info-list'>
                <li><span>{`By: ${author}`}</span></li>
                <li>{`Posted ${dateCalculator(created)}`}</li>
            </ul>
        </div>
    )
}