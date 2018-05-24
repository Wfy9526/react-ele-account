import * as event from './eventEnum';

const getUserInfo = (val) => {
    return {
        type: event.SAVE_USER_DATA,
        val,
    }
}

export {
    getUserInfo,
}

