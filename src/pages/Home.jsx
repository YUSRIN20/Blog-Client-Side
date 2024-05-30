import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Home = () => {

    const [posts, setPosts] = useState([])
    const [isLoading,setIsLoading] = useState(false)
    const cat  = useLocation().search

    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true)
                // const res = await axios.get(`http://localhost:8800/api/posts${cat}`)
                const res = await axios.get(`https://blog-api-side.onrender.com/api/posts${cat}`)
                setPosts(res.data)
            } catch (err) {
                console.log(err);
            }finally{
                setIsLoading(false)
            }
        };
        fetchData();
    }, [cat]);

    return (
        <div className='home'>
            <div className='posts'>
                {posts.map((post,index) => (
                    <div className="post" key={index}>
                        <div className="img">
                            <img src={`../upload/${post.img}`} alt="" />
                        </div>
                        <div className="content">
                            <Link className='link' to={`/post/${post._id}`}>
                                <h1>{post.title}</h1>
                                {/* <p>{getText(post.desc)}</p> */}
                                <p dangerouslySetInnerHTML={{ __html: post.desc }}></p>
                                {/* <p>{post.desc}</p> */}
                                <button>Read More</button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;