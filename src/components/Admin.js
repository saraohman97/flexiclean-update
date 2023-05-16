import React, { useState } from 'react'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { addPost, deletePost, getPosts } from '../data/api.js';
// import { useNavigate } from 'react-router-dom';

const PostItem = ({ post }) => {
    // const handleSubmit = (updatedPost) => {
    //     console.log(updatedPost)
    // }
    const queryClient = useQueryClient()

    const deletePostMutation = useMutation({
        mutationFn: deletePost,
        onSuccess: () => {
            // QueryClient.invalidateQueries({ queryKey: ['posts'] })
            queryClient.invalidateQueries("posts")
        }
    })
    const handleDelete = (id) => {
        deletePostMutation.mutate(id)
    }

    return (
        <div className="post" key={post.id}>
            <img src={post.image} className={post?.image === '' ? 'no-post-image' : 'post-image'} alt="" />
            <div className={post?.image === '' ? 'post-data-only' : 'post-data'}>
                <input type="text" className='post-title' name='user' />
                {/* <h2>{post.title}</h2> */}
                {/* <p>{post.message}</p> */}
                <input type="text" placeholder={post.message} className='post-message' />
                <div className="post-tools">
                    {/* <button type='default' onClick={() => setEditPostModal(true) && setShowPostsModal(false)}>Redigera</button> */}
                    <button>Edit</button>
                    <button onClick={() => handleDelete(post.id)}>Ta bort</button>
                </div>
            </div>
        </div>
    )
}

const Admin = ({ setShowAdmin }) => {
    const { isLoading, data, isError, error } = useQuery('posts', getPosts)

    const [loggedIn, setLoggedIn] = useState(false)
    const [newPostModal, setNewPostModal] = useState(false)
    const [showPostsModal, setShowPostsModal] = useState(true)
    // const [editPostModal, setEditPostModal] = useState(false)
    const [errorAdmin, setErrorAdmin] = useState(false)
    // const navigate = useNavigate()
    const current = new Date();
    const [post, setPost] = useState({
        title: '',
        message: '',
        image: '',
        link: '',
        date: `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}, ${current.getHours()}.${current.getMinutes()}`
    })
    const [admin, setAdmin] = useState({
        user: '',
        password: ''
    })

    const handleLogin = (e) => {
        e.preventDefault()
        if (admin.user === 'a' && admin.password === 'a') {
            setLoggedIn(false)
            setNewPostModal(true)
        } else {
            setErrorAdmin(true)
        }
    }
    const handleLogingChangeInput = (e) => {
        setAdmin({
            ...admin,
            [e.target.name]: e.target.value
        })
    }

    const queryClient = useQueryClient()

    const addPostMutation = useMutation(addPost, {
        onSuccess: () => {
            queryClient.invalidateQueries("posts")
        }
    })

    const handleChangeInput = (e) => {
        setPost({
            ...post,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        addPostMutation.mutate({
            ...post
        });
        setNewPostModal(false)
        setShowPostsModal(true)
        // navigate('/')
    }



    return (
        <div className='admin-content'>
            <button className="btn-close" onClick={() => setShowAdmin(false)}>X</button>

            {loggedIn && (
                <div className='admin-form'>
                    <h1 className='admin-title'>Admin</h1>
                    <h4 className='admin-subtitle'>Logga in</h4>

                    <div className='input-group'>
                        <label htmlFor="text" className='label'>Användarnamn</label>
                        <input onChange={handleLogingChangeInput} name='user' value={admin['user']} type="text" className='input-field' />
                    </div>
                    <div className='input-group'>
                        <label htmlFor="password" className='label'>Lösenord</label>
                        <input onChange={handleLogingChangeInput} name='password' value={admin['password']} type="password" className='input-field' />
                    </div>

                    {errorAdmin && <p style={{ color: 'red' }}>Fel användarnamn eller lösenord.</p>}

                    <button onClick={handleLogin} className='btn btn-gray'>Logga in</button>
                </div>
            )}

            {newPostModal && (
                <form onSubmit={handleSubmit} className="admin-form">
                    <h1 className='admin-title'>Skriv nyhet</h1>
                    <h4 className='admin-subtitle'>Skriv ett nytt inlägg</h4>

                    <div className="input-group">
                        <label htmlFor="text" className='label'>Rubrik</label>
                        <input name='title' value={post['title']} onChange={handleChangeInput} type="text" className='input-field' />
                    </div>
                    <div className="input-group">
                        <label htmlFor="text" className='label'>Meddelande</label>
                        <textarea name='message' value={post['message']} onChange={handleChangeInput} type="text" rows="5" className='input-field' />
                    </div>
                    <div className='admin-input-wrapper'>
                        <div className="input-group">
                            <label htmlFor="text" className='label'>Bild</label>
                            <input type="file" name='image' value={post['image']} onChange={handleChangeInput} className='input-field' />
                        </div>
                        <div className="input-group">
                            <label htmlFor="text" className='label'>Link</label>
                            <input type="file" name='link' value={post['link']} onChange={handleChangeInput} className='input-field' />
                        </div>
                    </div>
                    <div className="btn-admin-wrapper">
                        <button onClick={() => setShowPostsModal(true) && setNewPostModal(false)} className='btn btn-gray'>Redigera posts</button>
                        <button type='submit' className='btn btn-blue'>Posta</button>
                    </div>
                </form>
            )}
            {showPostsModal && (
                <div className="admin-form">
                    <h1 className='admin-title'>Nyheter</h1>
                    <h4 className='admin-subtitle'>Redigera inlägg</h4>
                    <button onClick={() => setNewPostModal(true) && setShowPostsModal(false)} className='btn btn-gray btn-admin'>Ny post</button>
                    <div className="posts">
                        {data?.data.map((post) => {
                            return <PostItem key={post.id} post={post} />
                        })}
                    </div>
                </div>
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