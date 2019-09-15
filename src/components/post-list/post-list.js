import React from 'react';
import PostlistItem from '../post-list-item/post-list-item';

const PostList =()=>{

    return(
        <ul className="app-list list-groupe">
            <PostListItem/>
            <PostListItem/>
            <PostListItem/>
        </ul>
    )
}
export default PostList;