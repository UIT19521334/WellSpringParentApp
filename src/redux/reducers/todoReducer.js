import {
    FETCH_POST_REQUEST,
    FETCH_POST_SUCCESS,
    FETCH_POST_ERROR
} from '../constants/todo'

const initialState = {
    requesting: false,
    success: false,
    message: null,
    data: []
}

const postReducer = (state = initialState, payload) => {
    switch (payload.type) {
        case FETCH_POST_REQUEST:
            return {
                ...state,
                requesting: true
            }
        case FETCH_POST_SUCCESS:
            return {
                ...state,
                requesting: false,
                success: true,
                data: payload.data
            }
        case FETCH_POST_ERROR:
            return {
                ...state,
                requesting: false,
                message: payload.message
            }
    }

    return state;
}

export default postReducer;