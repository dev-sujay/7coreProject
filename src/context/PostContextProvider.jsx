import { useState } from "react"
import PostContext from "./PostContext"

const PostContextProvider = ({ children }) => {
    const [currentPost, setCurrentPost] = useState(null)
    return (
        <PostContext.Provider value={{ currentPost, setCurrentPost}}>
            {children}
        </PostContext.Provider>
    )
}

export default PostContextProvider