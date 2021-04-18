import { goto } from "@sapper/app";

export function canActivate(ref, session){
    debugger
    if(session){
        goto(ref);
    }else{
        goto("/login");
    }
}