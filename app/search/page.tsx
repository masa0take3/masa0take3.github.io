'use client';
import Link from 'next/link';import { useState } from 'react';import { PublicLayout } from '@/components/Layout';import { loadProgress, saveProgress } from '@/lib/progress';
export default function Page(){const [q,setQ]=useState('');const [out,setOut]=useState<any>(null);
const on=()=>{const p=loadProgress();const n=q.replace(/\s/g,'');let r:any={msg:'検索結果はありません。',links:[] as any[]};
if(['有坂燈','燈','有坂ひかり','ひかり'].includes(n)){p.searchedHikari=true;r=p.ending==='public'?{msg:'検索結果：17件  関連記録が復元されています。',links:[['/data/a17','A-17観測記録']]}:p.ending==='sisters'?{msg:'検索結果：1件  有坂燈 / 有坂澪 関係性記録',links:[['/facility/basement-b/a17','関係性記録']]}:p.ending==='stability'?{msg:'検索結果はありません。白依市では、本日も失踪者は確認されていません。',links:[]}:(p.foundA17?{msg:'関連する記録が補正中です。',links:[['/data/a17','A-17観測記録']]}:{msg:'検索結果はありません。もしかして：A-17',links:[]});}
if(n==='A-17'||n==='a-17'){p.foundA17=true;r={msg:'検索結果 3件',links:[['/archive/old-safety-2024','旧こども安全支援'],['/data/a17','A-17観測記録'],['/school','白依小学校']]};}
if(n==='04-B'||n==='04b') r={msg:'症例一致',links:[['/support/cognitive-stability/04-b','症例04-B']]};
if(n.includes('認知安定化')) r={msg:'施設情報',links:[['/support/cognitive-stability','認知安定化支援センター']]};
if(n==='M-04') r={msg:'職員資料',links:[['/staff/manual-04','記録齟齬対応M-04']]};
if(n.includes('真柴')||n==='22:13') r={msg:'関連記録',links:[['/staff/mashiba-note','真柴メモ'],['/logs/erase-2213','削除ログ']]};
if(n.includes('未発生悲劇')) r={msg:'検索結果はありません。関連語：予防隔離 / 未来因子 / B棟',links:[]};
if(n==='B棟'||n==='b棟'){p.foundBasementB=true;r={msg:'図面資料',links:[['/facility/basement-b','地下B棟'],['/facility/basement-b/list','未発生悲劇因子一覧']]};}
if(n.includes('ORACLE-M')||n==='ORACLE'){r={msg:'関連ログ',links:[['/oracle/dialogue-12','対話ログ12'],['/oracle/criteria','判断基準']]};}
if(n.includes('成瀬')) r={msg:'開発責任者ログ',links:[['/oracle/naruse-note','成瀬怜の旧ログ']]};
if(n.includes('有坂澪')) r={msg:'市民情報',links:[['/citizen/mio','市民プロフィール']]};saveProgress(p);setOut(r);
};
return <PublicLayout title='サイト内検索'><div className='flex gap-2'><input className='border p-2 flex-1' value={q} onChange={e=>setQ(e.target.value)}/><button onClick={on} className='bg-sky-600 text-white px-3'>検索</button></div>{out&&<div className='mt-4'><p>{out.msg}</p><ul>{out.links.map((l:any)=><li key={l[0]}><Link className='underline' href={l[0]}>{l[1]}</Link></li>)}</ul></div>}</PublicLayout>}
