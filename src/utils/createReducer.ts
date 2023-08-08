export default (initialState: any, handlers: any) =>
    (state = initialState, action: any) =>
        (handlers.hasOwnProperty(action.type) ? handlers[action.type](state, action) : state);
