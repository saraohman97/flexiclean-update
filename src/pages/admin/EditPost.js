import React from 'react'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { useNavigate, useParams } from 'react-router-dom'
import { fetchPost, updatePost } from '../../data/api'
import PostForm from '../../components/admin/PostForm'

const EditPost = () => {
  const queryClient = useQueryClient()
  const navigate = useNavigate()
  const { id } = useParams()
  const { data: post, isLoading, isError, error } = useQuery({
    queryKey: ["posts", id],
    queryFn: () => fetchPost(id)
  })

  const updatePostMutation = useMutation({
    mutationFn: updatePost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] })
    }
  })

  const handleSubmit = (updatedPost) => {
    updatePostMutation.mutate({ id, ...updatedPost })
  }

  if (isLoading) return 'Loading...'
  if (isError) return `error: ${error.message}`

  return (
    <div className="admin-content">
      <button className="btn-close" onClick={() => navigate('/')}>X</button>
      <div className="admin-form">
        <h1 className='admin-title'>Skriv nyhet</h1>
        <h4 className='admin-subtitle'>Skriv ett nytt inlägg</h4>

        <PostForm initialValue={post} onSubmit={handleSubmit} />
      </div>
    </div>
  )
}

export default EditPost