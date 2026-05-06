import Link from 'next/link';import { SecretLayout } from '@/components/Layout';
export default function P(){return <SecretLayout title='最終通信'><p className='fade'>お願いです。私が忘れる前に、燈の名前をどこかに残してください。有坂燈です。有坂燈。有坂燈。</p><Link href='/final/name' className='underline'>名前を記録する</Link></SecretLayout>}
