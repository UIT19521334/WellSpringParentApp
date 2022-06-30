import {
    FETCH_POST_REQUEST,
    FETCH_POST_SUCCESS,
    FETCH_POST_ERROR
} from '../constants/todo'

export const getTodoList = () => async dispatch => {
    try {
        dispatch({type: FETCH_POST_REQUEST});

        const todoData = [
            {
                id: '1223',
                title: 'Nấu cơm'
            },
            {
                id: '1213',
                title: 'Chơi game'
            },

        ];
        
        setTimeout(() => {
            dispatch({type: FETCH_POST_SUCCESS, data: todoData})
        }, 1000);
    }
    catch (error) {
        dispatch({ type: FETCH_POST_ERROR, message: error });
    }
}