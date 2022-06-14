import { Navigate } from "solid-app-router";
import { RouterGuard } from "../interfaces/i18";

const ProtectedRoute = ( props:RouterGuard) => {

    if(!props.user){
        return <Navigate href={props.path} />
    }

    return props.children;
};

export  {ProtectedRoute} ;