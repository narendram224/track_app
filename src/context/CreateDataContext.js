import React ,{useReducer, useEffect} from 'react';
export default (reducer,actions,initialState)=>{
    const Context = React.createContext();
    const Provider = ({children})=>{
        const [state,dispatch] = useReducer(reducer,initialState);
        useEffect(() => {
        console.log("Create Data context state obj",state,"initial Obj",initialState);
        }, [initialState])
        const boundAction ={};
        for (let key in actions) {
            console.log("bloun actions key",key);
            
            boundAction[key] = actions[key](dispatch);
        }

        return <Context.Provider value={{state,...boundAction}}>
            {children}
        </Context.Provider>
    }
    return {Context,Provider};
};