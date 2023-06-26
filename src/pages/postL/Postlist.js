import React, { useState, useEffect } from 'react'

function postList() {
    const [posts, setPosts] = useState([])
    const [cPage, setCtPage] = useState(1)
    const [postsPerPage] = useState(10)

    useEffect(() => {
        fetchPosts()
    }, [cPage])

    const fetchPosts = () => {
        const stIndex = (cPage - 1) * postsPerPage

        fetch(`https://jsonplaceholder.typicode.com/posts?_start=${stIndex}&_limit=${postsPerPage}`)
            .then(res => res.json())
            .then(data => {
                setPosts(data)
            })
            .catch(error => {
                console.log('Error:', error)
            })
    }

    const goPrPage = () => {
        if (cPage > 1) {
            setCtPage(cPage - 1)
        }
    }

    const goNxPage = () => {
        setCtPage(cPage + 1)
        fetchPosts()
    }

    return (
        <div>
            <h2>Post List</h2>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
            <div>
                <button onClick={goPrPage} disabled={Page === 1}>
                    Previous Page
                </button>
                <button onClick={goNxPage}>Next Page</button>
            </div>
        </div>
    )
}

export default postList