import { useState, useEffect } from "react"


export default function Post(){
  const [post, setPost] = useState([]) 
  const [search, setSearch] = useState ("") 
useEffect(()=>{
    const fetchPosts = async()=> {
        const response = await fetch(`https://strangers-things.herokuapp.com/api/2302-ACC-CT-WEB-PT-A/posts`)
        const result = await response.json();
        console.log(result)
        setPost(result.data.posts)
    }
    fetchPosts()


},[]) 
const handleOnChange = (e) => {
    console.log (e.target.value)
    setSearch(e.target.value)
}
    return(
        <div>
            <input type="text" onChange={handleOnChange} />
            <h1>Posts</h1>
        {post.filter((post)=>post.title.toLowerCase().includes(search.toLowerCase())).map((post) => <div>{post.title}</div>)} 
        </div>
    )
}



// {/* <li><Link to="/logout">Log Out</Link></li> */}