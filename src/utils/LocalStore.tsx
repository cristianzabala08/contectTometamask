 function createLocaStrore (name:string,value:string){
    localStorage.setItem(name, btoa(value));
} 

function retunLocarStoreString (name:string):string {
    return atob(localStorage.getItem(name)|| '');
}

function LocalStoreLangue(value:string):void {
    localStorage.setItem('i18nextLng', value);
}

function getLocalStoreLangue():string {
    return localStorage.getItem('i18nextLng') || 'es';
}

export { createLocaStrore ,retunLocarStoreString,LocalStoreLangue,getLocalStoreLangue};