import { useState } from "react";
import { IBlogPostdata } from "../../Interfaces/IBlogPostData";


interface IBlogPostProps{
    blogPost: IBlogPostdata,
    filtertag: string 
    
}
const BlogPost = ({ blogPost }: IBlogPostProps) => {

    return (
      <div  key={blogPost.id}>
        <div>
          Read about:  {blogPost.title}
        </div>
        {<div>{blogPost.reactions} users have reacted to this post<br/>
        <br/>{blogPost.body} <br/> <br/> {blogPost.tags.map (tag => <span> #{tag} </span>)}</div>}
      </div>
    );}

    export default BlogPost;