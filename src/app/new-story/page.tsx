'use client';
import { useState } from 'react';
import { Plate, PlateContent } from '@udecode/plate-common';
import {
  createPluginFactory,
  createPlugins,
  ELEMENT_DEFAULT,
  ELEMENT_PARAGRAPH,
  getPluginType,
  HotkeyPlugin,
  onKeyDownToggleElement,
  PlateRenderElementProps,
} from '@udecode/plate';

const KEY_AMAZING = 'amazing';
const KEY_ALIGN = 'align';
const ParagraphElement = ({
  attributes,
  nodeProps,
  children,
}: PlateRenderElementProps) => {
  return (
    <p {...attributes} {...nodeProps}>
      {/* The `children` prop must always be rendered */}
      {children}
    </p>
  );
};
const createAmazingPlugin = createPluginFactory({
  key: KEY_AMAZING,
  isElement: true,
  isInline: true,
  isVoid: true,
});

const createParagraphPlugin = createPluginFactory<HotkeyPlugin>({
  key: ELEMENT_PARAGRAPH,
  isElement: true,
  handlers: {
    // Check for the hotkey on keydown
    onKeyDown: onKeyDownToggleElement,
  },
  options: {
    // Define the hotkeys here
    hotkey: ['mod+opt+0', 'mod+shift+0'],
  },
});

const createAlignPlugin = createPluginFactory({
  key: KEY_ALIGN,

  // Note that we're using `then` to access to the editor
  then: (editor) => ({
    inject: {
      props: {
        nodeKey: KEY_ALIGN,
        defaultNodeValue: 'left',
        styleKey: 'textAlign',
        validNodeValues: ['left', 'center', 'right', 'justify'],
        validTypes: [getPluginType(editor, ELEMENT_DEFAULT)],
      },
    },
  }),
});
const plugins = createPlugins(
  [createAmazingPlugin(), createParagraphPlugin(), createAlignPlugin()],
  {
    components: {
      [ELEMENT_PARAGRAPH]: ParagraphElement,
    },
  },
);

export default function Page() {
  const [text, setText] = useState('Fusce dapibus, tellus ac cursus commodo');

  return (
    <div className={'flex w-full flex-col items-center'}>
      <div className={'flex w-full max-w-7xl flex-col'}>
        <h1>react-medium-editor</h1>
        <h3>Html content</h3>
      </div>
      <Plate plugins={plugins}>
        <PlateContent
          placeholder="Type..."
          className={'h-36 w-full max-w-7xl rounded border'}
        />
      </Plate>
    </div>
  );
}
