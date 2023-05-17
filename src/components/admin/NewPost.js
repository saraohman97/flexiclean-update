import React from 'react'
import { useMutation, useQueryClient } from 'react-query'
import { addPost } from '../../data/api'

const NewPost = ({ setShowPostsModal, setNewPostModal, post, setPost }) => {
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
    addPostMutation.mutate({
      ...post
    });
    setShowPostsModal(true)
    setNewPostModal(false)
  }

  const backToEditModal = () => {
    setShowPostsModal(true)
    setNewPostModal(false)
  }

  return (
    <div className="admin-form">
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
        <button type='default' onClick={() => backToEditModal()} className='btn btn-gray'>Redigera posts</button>
        <button type='submit' onClick={() => handleSubmit()} className='btn btn-blue'>Posta</button>
      </div>
    </div>
  )
}

export default NewPost