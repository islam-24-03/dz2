import React, { useEffect, useState } from 'react'

const deletePostCon = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        post()
    }, [])

    const post = () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => {
                setPosts(data)
            })
            .catch(error => {
                console.log('Error:', error)
            })
    }

    const hDeletePost = (postId) => {
        if (window.confirm('Вы хотите удалить этот пост?')) {
            fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
                method: 'DELETE',
            })
                .then(response => {
                    if (response.ok) {
                        setPosts(pPosts => pPosts.filter(post => post.id !== postId))
                    } else {
                        console.log('Error deleting post')
                    }
                })
                .catch(error => {
                    console.log('Error:', error)
                })
        }
    }


    return (
        <div>
            <h2>Delete Post Confirmation</h2>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        <h3>{post.title}</h3>
                        <button onClick={() => hDeletePost(post.id)}>Удалить пост</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default deletePostCon
