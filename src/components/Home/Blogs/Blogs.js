import React from 'react';
import wilson from '../../../images/people-1.png';
import BlogPost from './../BlogPost/BlogPost';
import './Blogs.css';

const blogData = [
    {
        title: 'Check at least a doctor in a year for your teeth',
        description: 'It is a long established fact that by the readable content of a lot layout. The Point of view',
        author: 'Dr. Arif Khan',
        authorImg: wilson,
        date: '22 May 2020'
    },
    {
        title: 'Check at least a doctor in a year for your teeth',
        description: 'It is a long established fact that by the readable content of a lot layout. The Point of view',
        author: 'Dr. Miah Max',
        authorImg: wilson,
        date: '30 Dec 2017'
    },
    {
        title: 'The tooth cancer is taking a challenge',
        description: 'It is a long established fact that by the readable content of a lot layout. The Point of view',
        author: 'Dr. John Haddon',
        authorImg: wilson,
        date: '1 April 2022'
    }
]

const Blogs = () => {
    return (
        <section className='blog my-5 py-5'>
            <div className='container'>
                <div className='header-section text-center'>
                    <h5 className='text-primary'>OUR BLOG</h5>
                    <h1>From Our Blog News</h1>
                </div>
                <div className='row card-deck mt-5'>
                    {
                    blogData.map(data => <BlogPost post={data}></BlogPost>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Blogs;