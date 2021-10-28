export const shouldForwardProp = (prop: PropertyKey): boolean =>
  !(prop as string).startsWith('$');
