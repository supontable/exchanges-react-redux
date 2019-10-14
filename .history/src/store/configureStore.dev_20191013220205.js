import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/';

export function configureStore(initialState) {
    const store = createStore(
        rootReducer,
        initialState,
        compose(
            applyMiddleware(thunk),
            DevTools.instrument()
        )
    );
    if (module.hot) {
        module.hot.accept('../reducers', () => {
            store.replaceReducer(rootReducer)
        })
    }
    
    return store
}