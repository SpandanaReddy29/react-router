import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PostCard from '../components/PostCard';
import { useLoaderData } from 'react-router';

export const postLoader = async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=50');
  return response;
}

const PostList = () => {

const { data: posts } = useLoaderData()

  // const [posts, setPosts] = useState([]);
  // const [loading, setLoading] = useState(false);

  // const fetchPosts = async () => {
  //   setLoading(true);
  //   try {
  //     const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=50');
  //     setPosts(response.data);
  //   } catch(error) {
  //     console.log('Error Fetching Post', error);
  //   }
  //   setLoading(false);
  // };    

  // useEffect(() => {
  //   fetchPosts();
  // }, []);

  return (
    <div>
      {
        posts.map((post) => (
          <div key={post.id}>
            <PostCard post={post} />
          </div>
        ))
      }

      {/* {loading ? (
        <p>Loading...</p>
      ) : (
        posts.map((post) => (
          <div key={post.id}>
            <PostCard post={post} />
          </div>
        ))
      )
    } */}
    </div>
  )
}

export default PostList