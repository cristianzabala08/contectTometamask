function createLocaStrore (name:string,value:string):void {
    localStorage.setItem(name, btoa(value));
} 

function retunLocarStoreString (name:string):string {
    return atob(localStorage.getItem('profile')|| '');
}

export { createLocaStrore ,retunLocarStoreString};