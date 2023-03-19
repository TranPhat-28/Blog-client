import { useContext, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthContext';
import './Feedback.css';
import FeedbackItem from './FeedbackItem';

const Feedback = () => {

    const {user} = useContext(AuthContext);

    // Feedback input
    const [ feedback, setFeedback ] = useState('');


    // Perform fetching feedback
    const [feedbacks, setFeedbacks] = useState([
        {
            'id': 'A',
            'User': 'Quan Pro',
            'Feedback': 'Post ngu nhu cho'
        },
        {
            'id': 'B',
            'User': 'Quan Sieu Cap',
            'Feedback': 'Hellololo'
        },
        {
            'id': 'C',
            'User': 'Tiep Pro',
            'Feedback': 'Blablabla'
        },
    ])

    return(
        <div className='feedback-container'>
            <h4>Feedback</h4>

            {feedbacks && feedbacks.map(feedback => (
                <FeedbackItem key={feedback.id} content={feedback} />
            ))}

            { user && (<input className='input-feedback' placeholder='Leave your thought...' value={feedback} onChange={e => setFeedback(e.target.value)}></input>)}
        </div>
    );
}

export default Feedback;