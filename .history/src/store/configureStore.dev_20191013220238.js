import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger'
import rootReducer from '../reducers/';
import DevTools from '../containers/DevTools'
export function configureStore(initialState) {
    const store = createStore(
        rootReducer,
        initialState,
        compose(
            applyMiddleware(thunk, createLogger()),
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