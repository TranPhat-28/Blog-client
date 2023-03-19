import { useState } from 'react';
import Post from './Post';
import './PostContainer.css';

const PostContainer = () => {

    // Fetch all posts
    const [ posts, setPosts ] = useState([
        {
            'id': '1',
            'Title': 'Post number 1',
            'Author': 'John Doe',
            'Date posted': '12/12/2012'
        },
        {
            'id': '2',
            'Title': 'Post number 2',
            'Author': 'Will Smith',
            'Date posted': '12/12/2012'
        },
        {
            'id': '3',
            'Title': 'Post number 3',
            'Author': 'Jack Jones',
            'Date posted': '12/12/2012'
        },
    ]);

    return(
        <div className="posts-container">
            <h2>All posts</h2>
            
            {posts && posts.map(post => (
                <Post key={post.id} content={post} />
            ))}
        </div>
    );
}

export default PostContainer;