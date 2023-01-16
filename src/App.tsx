import { useEffect, useState } from 'react';
import './App.css';
import BlogPost from './Components/Blogpost/BlogPost';
import BlogSection from './Components/BlogSection/BlogSection';
import { IBlogPostdata } from './Interfaces/IBlogPostData';




function App() {
  const [blogListData, setBlogListData] = useState<IBlogPostdata[]>([]);
    const filterTag1 = "magical"
    const filterTag2 = "love"
    const filterTag3 = "classic"
    const filterTag4 = "american"
    const filterTag5 = "mystery"
    
  useEffect(()=> {
  
    const getData = async () => {
      const response = await fetch('https://dummyjson.com/posts');
      let BlogPostsResult = await response.json();
      BlogPostsResult = BlogPostsResult.posts
      setBlogListData(BlogPostsResult);
    }
    getData();
  },[]);

  const magicalBlogs = blogListData.filter((post => post.tags.includes(filterTag1)))
  const [toggleThisElement, setToggleThisElement] = useState(false);

  return (
    <>
    <div className="App">

      <div>TinyTinyBlog </div>

        <h1>there are {blogListData.length} blogs registered</h1>
        
        <BlogSection/>

          <button className='magical-section' onClick={() => setToggleThisElement((prev) => !prev)}> {filterTag1} blogs
            { toggleThisElement && magicalBlogs.map( blog => 
            <ul key={blog.id}> <BlogPost blogPost={blog} filtertag ={filterTag1}/>  <br/><br/><br/> </ul>
            )}
          </button> 
          <br/>          <button className='magical-section' onClick={() => setToggleThisElement((prev) => !prev)}> {filterTag2} blogs
            { toggleThisElement && magicalBlogs.map( blog => 
            <ul key={blog.id}> <BlogPost blogPost={blog} filtertag ={filterTag2}/>  <br/><br/><br/> </ul>
            )}
          </button> 
          <br/>          <button className='magical-section' onClick={() => setToggleThisElement((prev) => !prev)}> {filterTag3} blogs
            { toggleThisElement && magicalBlogs.map( blog => 
            <ul key={blog.id}> <BlogPost blogPost={blog} filtertag ={filterTag3}/>  <br/><br/><br/> </ul>
            )}
          </button> 
          <br/>          <button className='magical-section' onClick={() => setToggleThisElement((prev) => !prev)}> {filterTag4} blogs
            { toggleThisElement && magicalBlogs.map( blog => 
            <ul key={blog.id}> <BlogPost blogPost={blog} filtertag ={filterTag4}/>  <br/><br/><br/> </ul>
            )}
          </button> 
          <br/>          <button className='magical-section' onClick={() => setToggleThisElement((prev) => !prev)}> {filterTag5} blogs
            { toggleThisElement && magicalBlogs.map( blog => 
            <ul key={blog.id}> <BlogPost blogPost={blog} filtertag ={filterTag5}/>  <br/><br/><br/> </ul>
            )}
          </button> 
          <br/>
    </div>
  </>
  );
}

export default App;
