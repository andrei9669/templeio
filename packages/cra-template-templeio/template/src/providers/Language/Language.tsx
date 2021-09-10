import useLanguage from './useLanguage/useLanguage';

import '@/i18n';

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
