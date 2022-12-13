import React, {useState, useEffect} from 'react';

function Restraunt() {
    const [posts, setPosts] = useState([]);

    // useEffect( () => {
    //     fetch('https://jsonplaceholder.typicode.com/posts')
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data);
    //             setPosts(data);
    //         })
    // },[]) // for the first time

    useEffect( async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const json = await response.json();
        console.log(response, json)
    }, []);
    useEffect(() => {
        
    })

  return (
    <>
        <div className='posts'>
            {
                (posts).map(post => (
                    <>
                        <h1> {post.title} </h1>
                        <p> {post.body} </p>
                    </>
                ))
            }
        </div>
    </>
  )
}

export default Restraunt