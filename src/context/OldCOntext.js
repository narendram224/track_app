import CreateDataContext from "./CreateDataContext";
import TrackApi from '../api/tracker';
const authReducer = (state, action) =>{
    console.log("acutola state",state)
     switch (state.type) {
         case "create_track":
             
         return state;   
         case "signup_error":
             console.log("runs signup_error",action.payload);
             
            return {...state,errorMessage:action.payload}  ;
        case 'demo':
            
            return {...state,errorMessage:action.payload};
         default:
             return state;
     }

}

const signup =(dispatch)=>{
    return async({email, password})=>{
            // signup process here
            dispatch({type:"demo",payload:"hello fromjs"})
            // try {
            //     const response = await TrackApi.post('/register',{email, password});
            //     console.log(response.data);
                                

            // } catch (error) {
            //     console.log("error",error.response.data);
                
            //     dispatch({type:"signup_error",payload:"Something when wrong"})
                
                
            // }
    }
}
const signin =(dispatch)=>{
    return ({email, password})=>{
            // signin process here
            // checking the success status
            // checking the failure status
    }
}

const signout =(dispatch)=>{
    return ()=>{
            // signout process here
            // checking the success status
            // checking the failure status
    }
}
export const{Context,Provider} = CreateDataContext(authReducer,{signin,signup,signout},{isSignedIn:false,errorMessage:""});
