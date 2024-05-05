
import { SET_JOB, ADD_JOB, DELETE_JOB } from "./constants"

export const initState = {
    job: '',
    jobs: []
}

const reducer = (state, action) => {
    console.log('Action', action);
    console.log('Prev State', state);
    let newState
    switch (action.type) {
        case SET_JOB:
            return {
                ...state,
                job: action.payload
            }

        case ADD_JOB:
            return{
                ...state,
                // job: '',
                jobs: [...state.jobs, action.payload]
            }
        case DELETE_JOB:
            const newJobs = [...state.jobs]
            newJobs.splice(action.payload, 1)
            return {
                ...state,
                jobs: newJobs
            }
          

        default: new Error('Invalid action...')

    }

    console.log('New state:', newState);
    

}

export default reducer