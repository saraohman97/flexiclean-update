import React, { useState } from 'react'
import Login from './admin/Login.js';
import NewPost from './admin/NewPost.js';
import PostList from './admin/PostList.js';

const Admin = ({ setShowAdmin }) => {
    const current = new Date();
    const [post, setPost] = useState({
        title: '',
        message: '',
        image: '',
        link: '',
        date: `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}, ${current.getHours()}.${current.getMinutes()}`
    })

    const [loggedIn, setLoggedIn] = useState(true)
    const [newPostModal, setNewPostModal] = useState(false)
    const [showPostsModal, setShowPostsModal] = useState(false)
    // const [editPostModal, setEditPostModal] = useState(false)

    const backToShowPostsModal = () => {
        setShowPostsModal(false)
        setNewPostModal(true)
    }

    return (
        <div className='admin-content'>
            <button className="btn-close" onClick={() => setShowAdmin(false)}>X</button>

            {loggedIn && (
                <Login setLoggedIn={setLoggedIn} setNewPostModal={setNewPostModal} />
            )}

            {newPostModal && (
                <NewPost post={post} setPost={setPost} setShowPostsModal={setShowPostsModal} setNewPostModal={setNewPostModal} />
            )}
            {showPostsModal && (
                <PostList backToShowPostsModal={backToShowPostsModal} />
            )}
            {/* {editPostModal && (
                <form className="admin-form">
                    <h1 className='admin-title'>Nyheter</h1>
                    <h4 className='admin-subtitle'>Redigera inlägg</h4>


                    <button type='submit' className='btn btn-gray'>Posta</button>
                </form>
            )} */}

        </div>
    )
}

export default Admin