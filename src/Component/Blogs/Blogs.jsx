import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';

const Blogs = ({handleBookmarks}) => {

    const [blog, setBlog] = useState([]);

    useEffect(() => {
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlog(data))
    },[])

    return (

        <div className="w-2/3">

            <h1 className=" text-4xl mb-5">Blog: {blog.length}</h1>

            {
            blog.map(blog => <Blog key={blog.id} blog={blog} handleBookmarks ={handleBookmarks}></Blog>)
            }
            
        </div>
    );
};

Blogs.propTypes ={
    handleBookmarks: PropTypes.func
}


export default Blogs;