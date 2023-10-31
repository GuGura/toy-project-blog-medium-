'use client';
import { useState } from 'react';
import { Plate, PlateContent } from '@udecode/plate-common';

export default function Page() {
  const [text, setText] = useState('Fusce dapibus, tellus ac cursus commodo');

  return (
    <div className={'flex w-full flex-col items-center'}>
      <div className={'flex w-full max-w-7xl flex-col'}>
        <h1>react-medium-editor</h1>
        <h3>Html content</h3>
      </div>
      <Plate>
        <PlateContent
          placeholder="Type..."
          className={'h-36 w-full max-w-7xl rounded border'}
        />
      </Plate>
    </div>
  );
}
