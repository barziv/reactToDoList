import config from '../config';

const update = (id, isDone, label) => {
    return {
        type: config.ACTION_TYPES.update,
        payload: {
            'id': id,
            'isDone': isDone, 
            'label': label
        }
    }
}

export default update;