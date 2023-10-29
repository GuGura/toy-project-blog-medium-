import Button from '@/components/Button';

export default function Home() {
  const res = 'Hello World';
  return (
    <div className={'flex h-[100dvh] w-full p-3'}>
      <h1 className=" p-3">Home {res}</h1>
      <Button>hello</Button>
    </div>
  );
}
``;
