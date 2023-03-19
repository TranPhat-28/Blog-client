import Feedback from "../components/Feedback/Feedback";
import PostContent from "../components/PostContent/PostContent";    

const PostDetail = () => {

    return (
        <div className="post-detail-container">
            <PostContent />
            <Feedback />
        </div>
    );
}

export default PostDetail;