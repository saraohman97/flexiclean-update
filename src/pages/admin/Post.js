import { useQuery } from 'react-query'
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { fetchPost } from '../../data/api'

const Post = () => {
  const navigate = useNavigate()
  const {id} = useParams()
  const {data: post, isLoading, isError, error} = useQuery({
    queryKey: ["posts", id],
    queryFn: () => fetchPost(id)
  })

  if(isLoading) return 'Loading...'
  if(isError) return `error: ${error.message}`

  return (
    <div>
      <button onClick={() => navigate("/")}>Back to list</button>
      <h2>{post.title}</h2>
      <p>{post.message}</p>
    </div>
  )
}

export default Post