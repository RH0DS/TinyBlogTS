import { useState } from "react";
import { IBlogPostdata } from "../../Interfaces/IBlogPostData";


interface IBlogPostProps{
    blogPost: IBlogPostdata, 
    
}
const BlogPost = ({ blogPost }: IBlogPostProps) => {
    const [toggleThisElement, setToggleThisElement] = useState(false);
    return (
      <div  key={blogPost.id}>
        <button onClick={() => setToggleThisElement((prev) => !prev)}>
          Read about:  {blogPost.title}
        </button>
        {toggleThisElement && <div>{blogPost.reactions} users have reacted to this post<br/><br/>{blogPost.body} <br/> <br/> {blogPost.tags.map (tag => <span> #{tag} </span>)}</div>}
      </div>
    );}

    export default BlogPost;