// see https://testing-library.com/docs/react-testing-library/setup#custom-render
import React from 'react';
import { Queries } from '@testing-library/dom';
import { render, RenderOptions, RenderResult } from '@testing-library/react';

import AppProviders from '@/providers/AppProviders';

function customRender(
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'queries'>,
): RenderResult;
function customRender<Q extends Queries>(
  ui: React.ReactElement,
  options: RenderOptions<Q>,
): RenderResult<Q>;
function customRender<Q extends Queries>(
  ui: React.ReactElement,
  options?: RenderOptions<Q> | Omit<RenderOptions, 'queries'>,
): RenderResult<Q> | RenderResult {
  return render<Q>(ui, {
    wrapper: options?.wrapper ?? AppProviders,
    ...options,
  });
}

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
