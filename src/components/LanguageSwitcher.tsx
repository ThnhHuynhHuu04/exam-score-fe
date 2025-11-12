'use client';
import {useRouter, usePathname} from 'next/navigation';
import {useLocale} from 'next-intl';

export function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const switchLocale = (newLocale: string) => {
    // Remove current locale from pathname
    const pathWithoutLocale = pathname.replace(`/${locale}`, '');
    // Add new locale
    const newPath = `/${newLocale}${pathWithoutLocale}`;
    router.push(newPath);
  };

  return (
    <select 
      value={locale} 
      onChange={(e) => switchLocale(e.target.value)}
      className="border rounded px-2 py-1 text-sm"
    >
      <option value="vi">🇻🇳 Tiếng Việt</option>
      <option value="en">🇬🇧 English</option>
    </select>
  );
}
