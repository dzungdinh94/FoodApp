const initStore = {
    count: 0
}

export default function reducer(state = initStore,action){
    switch (action.type){
        case 'INCREMENT':
            const count_incre = state.count + action.payload
            return {
                ...state,
                count_incre,
            };
           
            default: return state;

    }
}