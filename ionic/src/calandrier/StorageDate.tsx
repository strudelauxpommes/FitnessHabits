import { Plugins } from '@capacitor/core';
const { Storage } = Plugins;



export function SaveDateActive (cle: string  , valeur : any){
 Storage.set ({ key: cle , value: JSON.stringify(valeur) }) ;
}



export async  function GetDateActive (cle: string){


     const ret = await Storage.get({ key: cle });
     //const ll = JSON.parse();
   // Storage.get ({ key: cle, value: JSON.stringify(ret)}) ;
  return ret.value;
    }