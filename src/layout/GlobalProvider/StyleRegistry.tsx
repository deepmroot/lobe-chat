'use client';

import { StyleProvider } from 'antd-style';
import { useServerInsertedHTML } from 'next/navigation';
import { type PropsWithChildren } from 'react';

const StyleRegistry = ({ children }: PropsWithChildren) => {
  useServerInsertedHTML(() => {
    return (
      <style
        dangerouslySetInnerHTML={{
          __html: `
              html body {background: #f6eef1;}
              html[data-theme="dark"] body { background-color: #1f1020; }
              @font-face {
                font-family: 'Cal Sans';
                font-style: normal;
                font-weight: 400 700;
                font-display: swap;
                src: url('/CalSans-SemiBold.woff2') format('woff2');
              }
            `,
        }}
      />
    );
  });

  return <StyleProvider>{children}</StyleProvider>;
};

export default StyleRegistry;
