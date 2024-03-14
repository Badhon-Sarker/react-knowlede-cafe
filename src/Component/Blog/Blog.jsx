import PropTypes from 'prop-types';
import { FaBookmark } from "react-icons/fa";

const Blog = ({ blog, handleBookmarks }) => {

    const {title, cover, posted_date, author_img, author, reading_time, hashtags} = blog;
    


    return (
        <div>

            <img className='mb-5 border-2 border-red-400 h-52' src={cover} alt={`image of ${title}`} />

            <h1 className=' text-xl'>{title}</h1>

            <div className='flex justify-between gap-3 p-3'>

                <div className='flex gap-2'>
                      <div>
                      <img src={author_img} alt="profile picture" />
                      </div>
      
                      <div>
                          <h1>{author}</h1>
                      <h3>{posted_date}</h3>
                      </div>    
                </div> 


                <div className='flex gap-2 items-center'>

                    <h1>{reading_time} min read </h1>
                    <button onClick={() => handleBookmarks(blog)}><FaBookmark /></button>
                    
                </div>

            </div>

            <p>
                {
                    hashtags.map((hash, idx) => <span key={idx}><a href="">#{hash}  </a></span>)
                }
            </p>
            
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleBookmarks: PropTypes.func
}

export default Blog;