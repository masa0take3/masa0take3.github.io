import { PublicLayout, PlaceholderImage } from '@/components/Layout';
export default function Page(){const names=Array.from({length:30},(_,i)=>`児童${i+1}`);return <PublicLayout title='白依小学校 5年2組'>
<PlaceholderImage src='/images/school-classroom.jpg' label='5年2組 集合写真' />
<p>学級名簿: 5年2組 31名（表示30名）</p><div className='grid grid-cols-3 gap-1 text-sm'>{names.map(n=><span key={n}>{n}</span>)}</div><p className='text-xs'>注記: A-17削除後の統合版</p></PublicLayout>}
