import React, { useState, useEffect } from 'react'

function postList() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetchPosts()
    }, [])

    const fetchPosts = () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => {
                setPosts(data)
            })
            .catch(error => {
                console.log('Error:', error)
            })
    }

    const handleEdPost = (postId) => {
        const updateTitle = prompt('Введите новый заголовок поста:')
        if (updateTitle) {
            const updatePost = {
                title: updateTitle,
            }

            fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(updatePost),
            })
                .then(response => response.json())
                .then(data => {
                    console.log('Updated post:', data)
                    fetchPosts()
                })
                .catch(error => {
                    console.log('Error:', error)
                })
        }
    }

    return (
        <div>
            <h2>Post List</h2>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        <h3>{post.title}</h3>
                        <button style={{ marginBottom: '80px' }} onClick={() => handleEdPost(post.id)}>
                            Редактировать пост
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default postList
