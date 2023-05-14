import { showModalDelete } from "../actions/modal";
import { deletePost } from "../actions/posts";
import { useSelector, useDispatch } from "react-redux";

export default function DeleteModal() {

    const dispatch = useDispatch();

    const postId = useSelector((state) => state.postId);

    const handleDelete = async () => {
        dispatch(deletePost(postId))
        dispatch(showModalDelete(null));
    };

    return(
        <>
            <div className="modal-bg" onClick={() => {
                dispatch(showModalDelete(null))
            }}></div>
            <div className="delete-modal">
                <h1>Are you sure you want to delete this item?</h1>
                <div className="button-delete-container">
                    <button className="cancel-button" onClick={() => dispatch(showModalDelete(null))} type="button">Cancel</button>
                    <button className="delete-button" onClick={handleDelete} type="submit">Delete</button>
                </div>
            </div>
        </>
    )
};
    