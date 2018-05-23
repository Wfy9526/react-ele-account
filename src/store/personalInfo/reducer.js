import * as homeEvent from './eventEnum';

let info = {
    userName: '',
    redPacket: '',
    phone: '',
    money: 0
};

let userInfo = (state = info, action = {}) => {
    switch (action.type){
        case homeEvent.SAVE_USER_DATA:
        return {...state, ...(action.val)}
        break;
    }
    return state;
}
 export default userInfo;