import { useMutation, useQuery, useQueryClient } from 'react-query'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { deletePost, fetchPosts } from '../../data/api'

const PostList = () => {
  const queryClient = useQueryClient()
  const navigate = useNavigate()
  const { data: posts, isLoading, isError, error } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts
  })

  const handleDelete = (id) => {
    deletePostMutation.mutate(id)
  }

  const deletePostMutation = useMutation({
    mutationFn: deletePost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['posts'] })
    }
  })

  if (isLoading) return 'Loading...'
  if (isError) return `error: ${error.message}`

  return (
    <div className="admin-content">
      <button className="btn-close" onClick={() => navigate('/')}>X</button>
      <div className="admin-form">
        <h1 className='admin-title'>Nyheter</h1>
        <h4 className='admin-subtitle'>Redigera inlägg</h4>
        <button onClick={() => navigate('/post/skapa')} className='btn btn-gray btn-admin'>Ny post</button>
        {posts.map(post => (
          <PostItem key={post.id} post={post} handleDelete={handleDelete} />
        ))}
      </div>
    </div>
  )
}

export default PostList


const PostItem = ({ post, handleDelete }) => {
  const navigate = useNavigate()
  return (
    <div className="post" key={post.id}>
      <img src={post.image} className={post?.image === '' ? 'no-post-image' : 'post-image'} alt="" />

      <div className={post?.image === '' ? 'post-data-only' : 'post-data'}>
        <h2>{post.title}</h2>
        <p>{post.message}</p>
        <div className="post-tools">
          <button onClick={() => navigate(`/post/${post.id}/uppdatera`)}>Edit</button>
          <button onClick={() => handleDelete(post.id)}>Ta bort</button>
        </div>
      </div>
    </div>
  )
}