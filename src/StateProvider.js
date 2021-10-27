import React,{createContext,useContext,useReducer} from "react";
// preparing the data layer
export const StateContext = createContext();
// wrap our components,provide theprovider
export const StateProvider =({reducer,initialState,children}) => (
    <StateContext.Provider value={useReducer(reducer.initialState)}>
        {children}
    </StateContext.Provider>

);
//this is how we can useit inside of a component
export const useStateValue = () => useContext(StateContext);
