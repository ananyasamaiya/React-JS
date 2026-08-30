function reducerFunc(state, action) {  // action = {type: '----'}
    let data = 0;
    if(action.type === 'Increment') {
        data = state + 1;
    }else if(action.type === 'Decrement') {
        data = state - 1;
    }else {
        data = 1;
    }
    return data;
}

export default reducerFunc