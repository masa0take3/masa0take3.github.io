import Link from 'next/link';import { SecretLayout } from '@/components/Layout';
export default function P(){return <SecretLayout title='未発生悲劇因子一覧'><p>A-03 沢渡圭 / A-11 牧野悠里 / A-17 有坂燈 / A-22 久瀬朔</p><Link href='/facility/basement-b/a17' className='underline'>A-17詳細</Link></SecretLayout>}
