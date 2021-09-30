import '@/i18n';

import useLanguage from './useLanguage';

const Language = ({
  children,
}: {
  children: JSX.Element;
}): JSX.Element | null => {
  const loaded = useLanguage();

  if (!loaded) {
    return null;
  }

  return children;
};

export default Language;
