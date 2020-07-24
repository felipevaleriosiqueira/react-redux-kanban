import boardData from '../../utils/boardData.json'

const INITIAL_STATE = boardData

// Reduce function
export default function board(state = INITIAL_STATE, action) {

    // if (action.type === 'TOGGLE_LESSON') {
    //     return { ...state, activeLesson: action.lesson, activeModule: action.module }
    // }

    return state
}
