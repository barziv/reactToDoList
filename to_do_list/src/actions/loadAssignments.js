import config from '../config';

const load = (state) => {
    return {
        type: config.ACTION_TYPES.load,
        payload: {
            state: state
        }
    }
}

export default load;