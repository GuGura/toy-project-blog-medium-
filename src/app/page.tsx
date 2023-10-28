import Button from '@/components/Button';

export default function Home() {
  const res = 'Hello World';
  return (
    <div className={'p-3'}>
      <h1 className="sticky p-3">Home {res}</h1>
      <Button as={'a'} href={'/'}>
        Click me
      </Button>
    </div>
  );
}
