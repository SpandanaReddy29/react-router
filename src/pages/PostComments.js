import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const PostComments = () => {

  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);

  const {postId} = useParams();
  const navigate = useNavigate();

  const fetchData = async () => {
    setLoading(true);
    try {
      const [postResponse, commentsResponse] = await Promise.all([
        axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`),
        axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
      ]);
      setPost(postResponse.data);
      setComments(commentsResponse.data);
    } catch (error) {
      console.log('Error Fetching Post', error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading ...</p>
      ) : (
        <div>
          {post && (
            <div className="post-card">
              <h2>{post.title}</h2>
              <h2>{post.body}</h2>
            </div>
          )}
          <h2>Comments</h2>
          <ul>
            {comments.map((comment) => (
              <li key={comment.id}>
                <strong>{comment.name}</strong> : {comment.body}
              </li>
            ))}
          </ul>
        </div>
      )}
      <button onClick={() => navigate('/posts')}>Go Back</button>
    </div>
  )
}

export default PostComments