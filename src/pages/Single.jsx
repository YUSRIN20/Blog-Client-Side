import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Menu from "../Components/Menu";
import axios from "axios";
import moment from 'moment'
import { AuthContext } from "../context/authContext";
const Single = () => {
    const [isLoading,setIsLoading] = useState(false)
    const [post, setPost] = useState({})

    const location = useLocation()
    const navigate = useNavigate()

    const postId = location.pathname.split('/')[2]
    // console.log(postId)

    const { currentUser } = useContext(AuthContext)

    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true)
                const res = await axios.get(`https://blog-api-side.onrender.com/api/posts/${postId}`)
                // const res = await axios.get(`http://localhost:8800/api/posts/${postId}`)
                setPost(res.data)
            } catch (err) {
                console.log(err);
            }finally{
                setIsLoading(false)
            }
        };
        fetchData();
    }, [postId]);

    const handleDelete = async () => {
        try {
            await axios.delete(`https://blog-api-side.onrender.com/api/posts/${postId}`, {
            // await axios.delete(`http://localhost:8800/api/posts/${postId}`, {
                withCredentials: true
            })
            navigate('/')
        } catch (err) {
            console.log(err)
        }
    }
     
    // const getText = (html) =>{
    //     const doc = new DOMParser().parseFromString(html,'text/html')
    //     return doc.body.textContent
    // }

    return (
        <div className="single">
            <div className="content">
                <img
                    src={`../upload/${post?.img}`}
                    alt=""
                />

                <div className="user">
                    {post.userImg && <img
                        src={post.userImg}
                        alt=""
                    />}
                    <div className="info">
                        <span>{post.username}</span>
                        <p>posted {moment(post.date).fromNow()}</p>
                    </div>
                    {currentUser && currentUser.username === post.username && (<div className="edit">
                        <Link to={`/write?edit=2`} state={post} >
                            <img
                                src="https://github.com/safak/youtube2022/blob/blog-app/client/src/img/edit.png?raw=true"
                                alt=""
                            />
                        </Link>
                        <img onClick={handleDelete}
                            src="https://github.com/safak/youtube2022/blob/blog-app/client/src/img/delete.png?raw=true"
                            alt=""
                        />
                    </div>)}
                </div>
                <h1>{post.title}</h1>
                {/* {getText(post.desc)} */}
                <p dangerouslySetInnerHTML={{ __html: post.desc }}></p>
            </div>
            <Menu cat={post.cat} />
        </div>
    );
};

export default Single;
