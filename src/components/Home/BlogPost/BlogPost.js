import React from 'react';
import './BlogPost.css';

const BlogPost = ({post}) => {
    return (
        <div className='blogPost-card col-md-4 me-4 text-center'>
            <div className='mt-5'>
                <div className='d-flex'>
                    <div>
                      <img src={post.authorImg} alt="images" />
                    </div>
                    <div>
                      <h5>{post.author}</h5>
                      <p className='text-secondary'>{post.date}</p>
                  </div>
                </div>
                <div className='mt-5'>
                  <h5 className='text-bold'>{post.title}</h5>
                  <h6 className='text-secondary'>{post.description}</h6>
                </div>
            </div>
            </div>
            
       
    );
};

export default BlogPost;