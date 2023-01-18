import { useState } from "react";
import { IBlogPostdata } from "../Interfaces/IBlogPostData";
import './BlogPost.css';

export interface IBlogPostProps{
  blogPost: IBlogPostdata, 
}

const BlogPost = ({ blogPost }: IBlogPostProps) => {
  const [toggleBlog, setToggleBlog] = useState(false);

  return (
    <div className="blogPost">
      <button className="blogPostBtn" onClick={() => setToggleBlog(!toggleBlog)}>
        {blogPost.title}
      </button>
      
    {toggleBlog && 
      <article >
        <h4 className="userReaction">{blogPost.reactions} users have reacted to this post </h4>
        <p className="blogTextBody">{blogPost.body}</p> 
        {blogPost.tags.map (tag => <span key={tag}> #{tag} </span>)}
      </article>}
    </div>
  );}

export default BlogPost;