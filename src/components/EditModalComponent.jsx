import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod';
import { useForm } from "react-hook-form";
import { showModalEdit } from "../actions/modal";
import { useDispatch, useSelector } from 'react-redux';
import { editPost } from '../actions/posts';

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

export default function EditModal() {

    const { register, formState: { errors }, handleSubmit } = useForm({
        resolver: zodResolver(createPostSchema),
    })

    const postId = useSelector(state => state.postId);

    const dispatch = useDispatch();

    const onSubmit = (data) => {
        dispatch(editPost(postId, data));
        dispatch(showModalEdit(null));
    }

    return(
        <>
            <div className="modal-bg" onClick={() => dispatch(showModalEdit(null))}></div>
            <div className="edit-modal">
                <h1>Edit item</h1>
                <form className="edit-form" onSubmit={handleSubmit(onSubmit)}>
                    <label>Title</label>
                    <input type="text" className="content-input" {...register('title')} />
                    { errors.title && <p className="error">{ errors.title.message }</p> }
                    <label>Content</label>
                    <textarea className="content-input2" {...register('content')} />
                    { errors.content && <p className="error">{ errors.content.message }</p> }
                    <div className="button-delete-container">
                        <button className="cancel-button" onClick={() => dispatch(showModalEdit(null))}>Cancel</button>
                        <button type="submit" className="edit-button">Save</button>
                    </div>
                </form>
            </div>
        </>
    )
};