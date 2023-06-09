import { useParams } from 'react-router';
import './PostContent.css';

const PostContent = () => {

    const { id } = useParams();

    // Fetch the post
    const DatePosted = '13/13/2013';
    const Author = 'John Wick';
    const Content = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

    return(
        <div className='post-content'>
            <h2 className='post-title'>Post {id}</h2>
            <p>Posted on {DatePosted} by {Author}</p>
            <br />
            <p>{Content}</p>
        </div>
    );
}

export default PostContent;