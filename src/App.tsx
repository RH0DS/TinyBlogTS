import { useEffect, useState } from 'react';
import './App.css';
import BlogPost from './Components/Blogpost/BlogPost';
import { IBlogPostdata } from './Interfaces/IBlogPostData';




function App() {
  const [blogListData, setBlogListData] = useState<IBlogPostdata[]>([]);
    
  useEffect(()=> {
  
    const getData = async () => {
      const response = await fetch('https://dummyjson.com/posts');
      const BlogPostsResult = await response.json();
      setBlogListData(BlogPostsResult.posts);
    }
    getData();
  },[]);

console.log(blogListData);
  // </h1><ToggleButton puppie={puppie}/>
  return (
    <div className="App">
        <h1>there are {blogListData.length} blogs registered</h1>
            {blogListData.map( blog => 
            <ul key={blog.id}> <BlogPost blogPost={blog}/>  <br/><br/><br/> </ul>
                
            )}
    </div>
  );
}

export default App;
