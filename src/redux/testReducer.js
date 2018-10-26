const initialState = {
    test: null,
};

const testReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_TEST':
            return Object.assign({}, state, {
                //test: action.test
                test: 'You clicked'
            });
        default:
            return state;
    }
};

export default testReducer;