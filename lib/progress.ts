'use client';
export type Ending = 'public'|'sisters'|'stability'|null;
export type Progress={visitedIntro:boolean;searchedHikari:boolean;suggestedA17:boolean;foundA17:boolean;sawOldSafety:boolean;sawMioChat1:boolean;sawMioChat2:boolean;sawCenter:boolean;sawCase04B:boolean;sawManual04:boolean;sawMashibaNote:boolean;sawEraseLog:number;foundBasementB:boolean;sawA17Record:boolean;sawOracleDialogue:boolean;sawNaruseNote:boolean;sawMioFinal:boolean;enteredHikariName:boolean;ending:Ending};
export const defaultProgress:Progress={visitedIntro:false,searchedHikari:false,suggestedA17:false,foundA17:false,sawOldSafety:false,sawMioChat1:false,sawMioChat2:false,sawCenter:false,sawCase04B:false,sawManual04:false,sawMashibaNote:false,sawEraseLog:0,foundBasementB:false,sawA17Record:false,sawOracleDialogue:false,sawNaruseNote:false,sawMioFinal:false,enteredHikariName:false,ending:null};
const KEY='oracleM.progress';
export const loadProgress=()=>{if(typeof window==='undefined') return defaultProgress; try{return {...defaultProgress,...JSON.parse(localStorage.getItem(KEY)||'{}')};}catch{return defaultProgress;}};
export const saveProgress=(p:Progress)=>localStorage.setItem(KEY,JSON.stringify(p));
