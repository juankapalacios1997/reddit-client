import { dateCalculator } from './date-calculator/date-calculator';

export const PostInfo = (props) => {
    const { author, created } = props

    return (
        <div>
            <ul>
                <li><span>{author}</span></li>
                <li>{dateCalculator(created)}</li>
            </ul>
        </div>
    )
}