import config from '../config';

const add = (label) => {
    return {
        type: config.ACTION_TYPES.add,
        payload: {
            'label': label
        }
    }
}

export default add;