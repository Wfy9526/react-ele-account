import * as event from './eventEnum';

const getUserInfo = (val) => {
    debugger
    return {
        type: event.SAVE_USER_DATA,
        val,
    }
}

export {
    getUserInfo,
}

