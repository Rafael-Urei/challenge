import { useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod';
import { logout } from "../../actions/user";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import EditModal from "../../components/EditModalComponent";
import DeleteModal from "../../components/DeleteModalComponent";
import { getPosts, getNextPost, createPost } from "../../actions/posts";
import { useEffect, useState } from "react";
import Posts from "../../components/PostsComponent";

const createPostSchema = z.object({
    title: z.string()
        .nonempty('This field cannot be blank!')
        .transform((titulo) => {
            return titulo
            .toLowerCase()
            .trim()
            .split(' ')
            .map((word) => {
                return word[0]?.toLocaleUpperCase().concat(word.substring(1))
            }).join(' ');
        }),
    content: z.string()
        .nonempty('This field cannot be blank!')
})

export default function Main() {

    const [visible, setVisible] = useState(1);

    const user = useSelector(state => state.user);

    const posts = useSelector(state => state.posts);

    const modal = useSelector(state => state.modal);

    const dispatch = useDispatch();

    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getPosts())
    }, [dispatch])

    const { register, formState: { errors }, handleSubmit } = useForm({
        resolver: zodResolver(createPostSchema)
    })

    const setPost = (data) => {
        dispatch(createPost({
            username: user.name,
            ...data
        }))
    }

    return (
        <main>
            <header>
                <h1>CodeLeap Network</h1>
                <p className="username">User: {user.name}</p>
                <button onClick={() => {
                    dispatch(logout())
                    navigate('/')
                }}>Logout</button>
            </header>
            <section>
                <form className="main-form" onSubmit={handleSubmit(setPost)}>
                    <h2>What's on your mind?</h2>
                    <label>Title</label>
                    <input type="text" className="content-input" {...register('title')} />
                    { errors.title && <p className="error">{ errors.title.message }</p> }
                    <label>Content</label>
                    <textarea className="content-input2" {...register('content')} />
                    { errors.content && <p className="error">{ errors.content.message }</p> }
                    <button type="submit">Create</button>
                </form>
            </section>
            <Posts visible={visible} />
            <>
                { !posts.loading ? 

                    <>
                        { visible < 10 ? <button onClick={() => setVisible(prev => prev + 3)} className='increment-button'>Show More</button> : 
                        <button onClick={() => setVisible(prev => prev - 8)} className='increment-button'>Show Less</button>}
                        { modal === 0 ? <DeleteModal/> : null }
                        { modal === 1 ? <EditModal/> : null }
                    </> : null

                }
            </>
            <div className="pagination-button-container">
                <button 
                    className="pagination-button"
                    style={ posts.previous === null ? {opacity: 0.3} : {opacity: 1} }
                    onClick={() => dispatch(getNextPost(posts.previous))}
                    >Previous
                </button>
                <button className="pagination-button" onClick={() => dispatch(getNextPost(posts.next))}>Next</button>
            </div>
        </main>
    )
}