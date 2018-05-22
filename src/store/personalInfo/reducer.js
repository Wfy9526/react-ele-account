import * as homeEvent from './eventEnum';

let info = {
    userName: '',
    redPacket: '',
    phone: '',
    money: 0
};

let userInfo = (state = info, action = {}) => {
    switch (action.type){
        case homeEvent.SAVEFORMDATA:
        return {...state, ...(action.userInfo)}
        break;
    }
    return state;
}
 export default userInfo;