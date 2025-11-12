import { getRequestConfig } from "next-intl/server";
import { locales, type Locale } from "./config";

export default getRequestConfig(async ({ locale }) => {
  const validLocale =
    locale && locales.includes(locale as Locale) ? locale : "vi";

  return {
    locale: validLocale,
    messages: {
      ...(await import(`./locales/${validLocale}/common.json`)).default,
      ...(await import(`./locales/${validLocale}/home.json`)).default,
      ...(await import(`./locales/${validLocale}/top.json`)).default,
      ...(await import(`./locales/${validLocale}/report.json`)).default,
      ...(await import(`./locales/${validLocale}/sidebar.json`)).default,
    },
  };
});
