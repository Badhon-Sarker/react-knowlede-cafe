import PropTypes from 'prop-types';
import Bokmark from '../Bokmark/Bokmark';

     
     const Bookmark = ({bookmarks}) => {
    return (
        <div className="w-1/3 ml-5 bg-gray-300 rounded-md p-3">

            <h1 className="text-xl flex justify-center">Bookmark:{bookmarks.length}</h1>

            {
                bookmarks.map((bookmark, idx) => <Bokmark key={idx} bookmark={bookmark}></Bokmark>)
            }
            
        </div>
    );
};

Bookmark.propTypes ={
    bookmarks: PropTypes.array
}


export default Bookmark;