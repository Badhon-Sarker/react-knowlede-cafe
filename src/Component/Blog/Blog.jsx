import { useEffect } from "react";
import { useState } from "react";

const Blog = () => {

    const [Blog, setBlog] = useState([]);

    useEffect(() => {
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlog(data))
    },[])

    return (
        <div>

            <h1>im from blog section</h1>
            
        </div>
    );
};

export default Blog;