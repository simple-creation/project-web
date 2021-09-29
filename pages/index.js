import { Button } from 'antd';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <h1>Hello Next.js</h1>
      <Link href='/user/list'>
        <Button type='primary'>UserList Page</Button>
      </Link>
    </>
  );
}
