import React, { ReactNode } from 'react';

export type LanguageProps = {
  (props: { children: ReactNode }): React.ReactElement | null;
};
