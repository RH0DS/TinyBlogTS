import { useState } from "react";
import { IBlogPostdata } from "../Interfaces/IBlogPostData";
import BlogPost from "../Blogpost/BlogPost"
import './BlogSection.css';


export interface IBlogSectionProps{
  blogSectionData: IBlogPostdata[],
  filterTag: string,    
  }

const BlogSection = ({ blogSectionData, filterTag}: IBlogSectionProps) => {
  
  const [toggleElement, setToggleElement] = useState(false);
  const filteredBlogs = blogSectionData.filter((post => post.tags.includes(filterTag)))
  
  const handleOnClick = () =>{setToggleElement(!toggleElement);}

  return(
  <>
    <div className='blogSection' >
      <button className='blogSectionBtn' onClick={() => handleOnClick()}> 
        {<div>{filterTag} blogs</div>}
      </button> 
    </div>

    <section>      
      { toggleElement &&  filteredBlogs.map( blog => 
      <ul key={blog.id}> <BlogPost blogPost={blog} /></ul>
      )}
    </section>
  </>)
}

export default BlogSection