import { useState } from 'react';
import './NewPostForm.css';

const NewPostForm = () => {

    // Post data
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');


    // Create post
    const handleCreatePost = (e) => {
        e.preventDefault();

        console.log(title, content);
    }

    return (
        <div className="post-container">
            <form className="login-form" onSubmit={handleCreatePost}>
                <h2 className="login-title">Create a new post</h2>

                <label htmlFor="title" className="form-label">Title</label>
                <input type='text' name='title' className="form-input" value={title} onChange={(e) => setTitle(e.target.value)}></input>

                <label htmlFor="content" className="form-label">Content</label>
                <textarea rows='10' name="content" className='form-input' value={content} onChange={e => setContent(e.target.value)}></textarea>

                <button className="button">Create post</button>
            </form>
        </div>
    );
}

export default NewPostForm;