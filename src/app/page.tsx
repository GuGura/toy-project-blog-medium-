import { Button } from '@/components/TextButton';

export default function Home() {
  const res = 'Hello World';
  return (
    <div className={'p-3'}>
      <h1 className="sticky p-3">Home {res}</h1>
      <Button size={'small'}>hello</Button>
    </div>
  );
}
