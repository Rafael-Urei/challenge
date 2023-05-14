import { Fade } from 'react-awesome-reveal'
import { AiFillDelete as Delete, AiTwotoneEdit as Edit } from 'react-icons/ai';
import { getPostId } from "../actions/posts";
import { showModalEdit, showModalDelete } from "../actions/modal";
import { parseISO, formatDistance } from 'date-fns';
import { useDispatch, useSelector } from 'react-redux';

export default function Posts({visible}) {

    const user = useSelector((state) => state.user);
    
    const posts = useSelector((state) => state.posts);

    const dispatch = useDispatch();

    return (
        <div>
            { posts.loading && <p>Loading posts...</p> }
            { posts.posts.slice(0, visible).map((post) => {
                const postDate = parseISO(post.created_datetime);
                const formatedDate = formatDistance(postDate, new Date());
                return (
                    <Fade cascade key={post.id}>
                        <div className="post">
                            <header className='post-header'>
                                <h1 className="post-title">{post.title}</h1>
                                { post.username === user.name && 
                                
                                    <div className="button-container">
                                        <button className="button" title="Delete" onClick={() => {
                                            dispatch(showModalDelete(0));
                                            dispatch(getPostId(post.id));
                                        }}><Delete/></button>
                                        <button className="button" title="Edit" onClick={() => {
                                            dispatch(showModalEdit(1));
                                            dispatch(getPostId(post.id));
                                        }}><Edit/></button>
                                        
                                    </div>
                                    
                                }
                            </header>
                            <div className="user-data">
                                <p>@{post.username}</p>
                                <p>{formatedDate} ago</p>
                            </div>
                            <div className="content-container">
                                <p className="content">{post.content}</p>
                            </div>
                        </div>
                    </Fade>
                )
            }) }
        </div>
    )
};