import Link from 'next/link';import { SecretLayout } from '@/components/Layout';
export default function P(){return <SecretLayout title='防災センター地下B棟'><p>記録整合室 / 感情沈静室 / 未来因子保管室 / A-17個別観測室 / 未発生悲劇抑止区画</p><Link href='/facility/basement-b/list' className='underline'>収容者一覧</Link></SecretLayout>}
