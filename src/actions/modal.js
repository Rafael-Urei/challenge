export const SHOW_MODAL_DELETE = 'modal/SHOW_MODAL';
export const SHOW_MODAL_EDIT = 'modal/SHOW_MODAL_EDIT';

export const showModalDelete = (condition) => {
    return {
        type: SHOW_MODAL_DELETE,
        payload: condition
    }
};

export const showModalEdit = (condition) => {
    return {
        type: SHOW_MODAL_EDIT,
        payload: condition
    }
};