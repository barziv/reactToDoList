import config from '../config';

const deleteAssignment = (id) => {
    return {
        type: config.ACTION_TYPES.delete,
        payload: {
            id: id
        }
    }
}

export default deleteAssignment;