
import './App.css'
import Header from './Component/Header/Header'
import Blogs from './Component/Blogs/Blogs'
import Bookmark from './Component/Bookmark/Bookmark'
import { useState } from 'react'

function App() {

  const [bookmarks , setBookmarks] = useState([])

  const handleBookmarks = blog =>{
    const newBookmarks = [...bookmarks, blog]

    setBookmarks(newBookmarks)
  }
  

  return (
    <>


    <div className=''>
     <Header></Header>
 
     <div className='md:flex p-3 border-b-2 mx-5'>
     <Blogs handleBookmarks = {handleBookmarks}></Blogs>
     <Bookmark bookmarks = {bookmarks}></Bookmark>
     </div>


    </div>
     
      
    </>
  )
}

export default App
