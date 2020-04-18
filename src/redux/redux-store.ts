import { createStore, combineReducers, applyMiddleware, compose } from "redux"
import appReducer from "./app-reducer"

import profileReducer from "./profile-reducer"
import dialogsReducer from "./dialogs-reducer"
import usersReducer from "./users-reducer"
import sidebarReducer from "./sidebar-reducer"
import authReducer from "./auth-reducer"
import thunk, { ThunkMiddleware } from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'
import { AppActionTypes } from "../types/actions"

let rootReducer = combineReducers({
   app: appReducer,

   profilePage: profileReducer,
   dialogsPage: dialogsReducer,
   usersPage: usersReducer,
   sidebar: sidebarReducer,
   auth: authReducer,
   
   form: formReducer
})

export type AppStateType = ReturnType<typeof rootReducer>

export type InferActionsTypes<T> = T extends {[key: string]: (...args: any[]) => infer U} ? U : never
// export type InferActionsTypes<T extends {[key: string]: (...args: any[]) => any}> = ReturnType<PropertiesTypes<T>>


// declare global {
//    interface Window {
//    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any
//     __store__: any;
//    }
//  }

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk as ThunkMiddleware<AppStateType, AppActionTypes>)))

// const store = createStore(reducers, applyMiddleware(thunk as ThunkMiddleware<AppState, AppActions>)) // applyMiddleware - for dispatching thunk function 

// @ts-ignore
window.__store__ = store

export default store