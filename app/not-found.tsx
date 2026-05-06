'use client';
import { useEffect,useState } from 'react';
import { loadProgress, Progress } from '@/lib/progress';
export default function NotFound(){const [p,setP]=useState<Progress|null>(null);useEffect(()=>setP(loadProgress()),[]);const t=!p?'ページが見つかりません。':p.ending?'記録整合処理は完了しています。':p.sawA17Record?'探している人は、最初からいません。':p.foundA17?'あなたは、何を探していたのですか。':p.searchedHikari?'このページは削除されました。':'ページが見つかりません。';return <main className='p-10'><h1 className='text-2xl mb-2'>404</h1><p>{t}</p></main>}
