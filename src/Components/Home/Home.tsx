import { useEffect, useState } from "react";
import { IBlogPostdata } from "../../Interfaces/IBlogPostData";
import BlogSection from "../BlogSection/BlogSection";
import './Home.css';


const Home =() =>{

    
      const [blogListData, setBlogListData] = useState<IBlogPostdata[]>([]);
    
        const filterTag1 = "magical"
        const filterTag2 = "love"
        const filterTag3 = "classic"
        const filterTag4 = "american"
        const filterTag5 = "mystery"
        let filterTag6 = ""
        
      useEffect(()=> {
      
        const getData = async () => {
          const response = await fetch('https://dummyjson.com/posts');
          let BlogPostsResult = await response.json();
          BlogPostsResult = BlogPostsResult.posts
          setBlogListData(BlogPostsResult);
        }
        getData();
      },[]);

      const [data, setData] = useState<string>("");
       
      const childToParent = (callback: Function) =>  {
           
        }
          

    
      return (
        <>
        <div className="home">
            
            <BlogSection blogSectionData ={blogListData} filterTag ={filterTag1} childToParent = {childToParent}/>
            <BlogSection blogSectionData ={blogListData} filterTag ={filterTag2} childToParent = {childToParent}/>
            <BlogSection blogSectionData ={blogListData} filterTag ={filterTag3} childToParent = {childToParent}/>
            <BlogSection blogSectionData ={blogListData} filterTag ={filterTag4} childToParent = {childToParent} />
            <BlogSection blogSectionData ={blogListData} filterTag ={filterTag5} childToParent = {childToParent} />
           
    
    
            <div>Choose your blog</div>

            <select>
            <option value = {filterTag1}>{filterTag1}</option>
            <option value = {filterTag2}>{filterTag2}</option>
            <option value = {filterTag3}>{filterTag3}</option>
            <option value = {filterTag4}>{filterTag4}</option>
            <option value = {filterTag5}>{filterTag5}</option>
    
            </select>
        </div>
      </>
      );
    
    
    
}

export default Home