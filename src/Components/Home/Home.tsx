import { useEffect, useState } from "react";
import { IBlogPostdata } from "../Interfaces/IBlogPostData";

import BlogSection from "../BlogSection/BlogSection";
import './Home.css';

const Home =() =>{

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

  return (
  <>
    <div className="home">
        
      <BlogSection blogSectionData ={blogListData} filterTag ={filterTag1} />
      <BlogSection blogSectionData ={blogListData} filterTag ={filterTag2} />
      <BlogSection blogSectionData ={blogListData} filterTag ={filterTag3} />
      <BlogSection blogSectionData ={blogListData} filterTag ={filterTag4}  />
      <BlogSection blogSectionData ={blogListData} filterTag ={filterTag5}  />
    
      <div >Choose your blog
        <br/>
        <select className="selectionBar">
        <option value = {filterTag2}>{filterTag1}</option>
        <option value = {filterTag2}>{filterTag2}</option>
        <option value = {filterTag3}>{filterTag3}</option>
        <option value = {filterTag4}>{filterTag4}</option>
        <option value = {filterTag5}>{filterTag5}</option>

        </select>
      </div>
    </div>
  </>
  );    
}
export default Home