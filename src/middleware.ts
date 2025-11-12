import createMiddleware from "next-intl/middleware";
import { locales, defaultLocale } from "./i18n/config";

export default createMiddleware({
  locales,
  defaultLocale,
  localePrefix: "as-needed", // Không thêm /vi vào URL cho locale mặc định
});

export const config = {
  matcher: ["/", "/(vi|en)/:path*"],
};
