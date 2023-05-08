import React from 'react'

const Article = ({ post }) => {
  return (
    <div className="sidebar-item">
      {post.image && <img src={post.image} alt="FlexiClean nyhetsflöde" />}
      <small className='sidebar-date'>{post.date}</small>
      <h3 className='sidebar-header'>{post.title}</h3>
      <p>{post.message}</p>
      <a href={post.link}><button className='btn btn-gray'>Läs</button></a>
    </div>
  )
}

export default Article