import React from 'react'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { deletePost, getPosts } from '../../data/api'

const PostItem = ({ post }) => {
  const queryClient = useQueryClient()

  const deletePostMutation = useMutation({
    mutationFn: deletePost,
    onSuccess: () => {
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
        <h2>{post.title}</h2>
        <p>{post.message}</p>
        <div className="post-tools">
          <button>Edit</button>
          <button onClick={() => handleDelete(post.id)}>Ta bort</button>
        </div>
      </div>
    </div>
  )
}

const PostList = ({ backToShowPostsModal }) => {
  const { isLoading, data, isError, error } = useQuery('posts', getPosts)

  return (
    <div className="admin-form">
      <h1 className='admin-title'>Nyheter</h1>
      <h4 className='admin-subtitle'>Redigera inlägg</h4>
      <button onClick={() => backToShowPostsModal()} className='btn btn-gray btn-admin'>Ny post</button>

      <div className="posts">
        {data?.data.map((post) => {
          return <PostItem key={post.id} post={post} />
        })}
      </div>
    </div>
  )
}

export default PostList