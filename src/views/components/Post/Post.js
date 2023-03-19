import { useNavigate } from 'react-router';
import './Post.css';

const Post = (props) => {

    const { content } = props;
    const navigate = useNavigate();

    return(
        <div className="post" onClick={() => navigate(`/post/${content.id}`)}>
            <h4 className='post-title'>{content['Title']}</h4>
            <p>By: {content['Author']}</p>
            <p>Date posted: {content['Date posted']}</p>
        </div>
    );
}

export default Post;