const initStore = {
    count: 0,
}

export default function reducer(state = initStore, action){
    switch(action.type){
        case "INCREMENT":
            const count = state.count + action.payload;
            return {
                ...state,
                count,
            };
    }
}