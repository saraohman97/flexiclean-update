import React from 'react'
import { useMutation, useQueryClient } from 'react-query'
import { useNavigate } from 'react-router-dom'
import PostForm from '../../components/admin/PostForm'
import { createPost } from '../../data/api'

const AddPost = () => {
    const navigate = useNavigate()
    const queryClient = useQueryClient()

    const createPostMutation = useMutation({
        mutationFn: createPost,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['posts'] })
        }
    })

    const handleAddPost = (post) => {
        createPostMutation.mutate({
            ...post
        })
        navigate('/post')
    }

    return (
        <div className="admin-content">
            <button className="btn-close" onClick={() => navigate('/')}>X</button>
            <div className="admin-form">
                <h1 className='admin-title'>Skriv nyhet</h1>
                <h4 className='admin-subtitle'>Skriv ett nytt inlägg</h4>

                <PostForm onSubmit={handleAddPost} initialValue={{}} />
            </div>
        </div>
    )
}

export default AddPost