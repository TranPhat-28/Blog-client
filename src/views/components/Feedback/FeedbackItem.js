import './FeedbackItem.css';

const FeedbackItem = (props) => {

    const { content } = props;

    return(
        <div className='feedback-item'>
            <p>{content.User} said:</p>
            <p>{content.Feedback}</p>
        </div>
    );
}

export default FeedbackItem;