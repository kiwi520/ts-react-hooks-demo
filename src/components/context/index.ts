import {createContext, Dispatch} from "react";
import { initialState, State} from './state'
import {Action} from "./actions";

export interface BoxContextInterface {
    state:State,
    dispatch: Dispatch<Action>
}

const initialContextState:BoxContextInterface = {
    state:initialState,
    dispatch:()=> null
}

export const BoxContext = createContext(initialContextState);
