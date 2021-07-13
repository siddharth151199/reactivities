import { action, configure, observable } from "mobx";
configure({enforceActions: true})
export const appState = observable({
    count: 1,
    increaseCount: () =>{
        appState.count += 1;
    },
    decreaseCounter: action(() =>{
        appState.count -= 1
    })
  
})
