# Hướng dẫn Internationalization (i18n)

## Tổng quan

Dự án sử dụng `next-intl` để hỗ trợ đa ngôn ngữ (Tiếng Việt và English).

## Cấu trúc thư mục

```
src/
├── i18n/
│   ├── config.ts          # Cấu hình locale
│   ├── request.ts         # Request configuration
│   └── locales/
│       ├── vi/            # Bản dịch tiếng Việt
│       │   ├── common.json
│       │   ├── home.json
│       │   ├── top.json
│       │   ├── report.json
│       │   └── sidebar.json
│       └── en/            # Bản dịch tiếng Anh
│           ├── common.json
│           ├── home.json
│           ├── top.json
│           ├── report.json
│           └── sidebar.json
```

## Sử dụng

### 1. Trong Client Component

```tsx
'use client';
import {useTranslations} from 'next-intl';

export default function MyComponent() {
  const t = useTranslations('page');
  
  return <h1>{t('title')}</h1>;
}
```

### 2. Trong Server Component

```tsx
import {useTranslations} from 'next-intl';

export default async function MyServerComponent() {
  const t = await useTranslations('page');
  
  return <h1>{t('title')}</h1>;
}
```

### 3. Lấy locale hiện tại

```tsx
'use client';
import {useLocale} from 'next-intl';

export default function MyComponent() {
  const locale = useLocale();
  
  return <p>Current locale: {locale}</p>;
}
```

## Thêm bản dịch mới

1. Mở file JSON tương ứng trong `src/i18n/locales/vi/` hoặc `src/i18n/locales/en/`
2. Thêm key và giá trị mới:

```json
{
  "page": {
    "newKey": "Giá trị mới"
  }
}
```

3. Sử dụng trong component:

```tsx
const t = useTranslations('page');
<p>{t('newKey')}</p>
```

## Thêm ngôn ngữ mới

1. Cập nhật `src/i18n/config.ts`:

```typescript
export const locales = ['vi', 'en', 'fr'] as const; // Thêm 'fr'
```

2. Tạo thư mục mới: `src/i18n/locales/fr/`
3. Copy tất cả file JSON từ `vi/` hoặc `en/` và dịch sang ngôn ngữ mới
4. Cập nhật middleware: `src/middleware.ts`

```typescript
export const config = {
  matcher: ['/', '/(vi|en|fr)/:path*']
};
```

## URL Structure

- Tiếng Việt (mặc định): `http://localhost:3000/` hoặc `http://localhost:3000/vi`
- English: `http://localhost:3000/en`

## Language Switcher

Component `LanguageSwitcher` đã được thêm vào Header để chuyển đổi ngôn ngữ.

## Lưu ý

- Luôn sử dụng `t()` function thay vì hardcode string
- Tổ chức translation keys theo module/page để dễ quản lý
- Giữ cấu trúc JSON đồng nhất giữa các locale
- Test kỹ sau khi thêm/sửa translation

## Troubleshooting

### Lỗi "locale not found"
- Kiểm tra middleware configuration
- Đảm bảo locale có trong `locales` array

### Translation không hiển thị
- Kiểm tra key có tồn tại trong file JSON
- Kiểm tra namespace đúng trong `useTranslations()`

### Hot reload không hoạt động
- Restart dev server sau khi thay đổi file JSON
