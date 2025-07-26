import { useLocation } from 'react-router-dom';
import { useMemo } from 'react';

export function useCurrentLanguage(): string {
  const location = useLocation();

  return useMemo(() => {
    const segments = location.pathname.split('/').filter(Boolean);
    const lang = segments[0]?.toUpperCase();

    const validLangs = ['EN', 'JP', 'ES', 'FR'];
    return validLangs.includes(lang) ? lang : 'EN';
  }, [location]);
}