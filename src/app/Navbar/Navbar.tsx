import Button from '@/components/Button';

export default async function Navbar() {
  const isLogin = false;

  const styled = {
    height: isLogin ? '10' : '16',
  };

  return (
    <div
      className={`sticky top-0 z-0 flex h-16 justify-center overflow-hidden bg-red-300`}
    >
      <div className="flex h-full w-full max-w-screen-xl items-center justify-between bg-green-400">
        <div className="flex">logo</div>
        <div className="flex gap-1">
          <Button as={'a'} href={'/guide'} className={'bg-transparent'}>
            Guide
          </Button>
          <Button as={'a'} href={'/new-story'} className={'bg-transparent'}>
            New story
          </Button>
          <Button as={'a'} href={'/guide'} className={'bg-transparent'}>
            Our story
          </Button>
          <Button className={'rounded-full'} buttonType={'tag'}>
            Get started
          </Button>
          <div
            style={{
              boxShadow: '0px 2px 8px 0px rgba(0, 0, 0, 0.1)',
            }}
          >
            ddd
          </div>
          <div
            style={{
              boxShadow:
                '0px 2px 8px 0px rgba(0, 0, 0, 0.1),0px 8px 20px 0px rgba(0, 0, 0, 0.1)',
            }}
          ></div>
          <div
            style={{
              boxShadow: '0px 2px 8px 0px rgba(0, 0, 0, 0.1)',
            }}
          >
            ㅇㅇ
          </div>
        </div>
      </div>
    </div>
  );
}
