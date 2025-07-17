# Exam Score FE

> Giao diện tra cứu, thống kê điểm thi tốt nghiệp THPT sử dụng Next.js, TypeScript, Tailwind CSS và Recharts.
 [https://exam-score-fe.vercel.app/](https://exam-score-fe.vercel.app/)

## 🚀 Tính năng

- Tra cứu điểm thi theo số báo danh
- Xem bảng xếp hạng top thí sinh theo khối, số lượng
- Thống kê điểm theo môn, hiển thị biểu đồ cột (BarChart)
- Giao diện hiện đại, responsive, dễ sử dụng
- Tích hợp API backend qua Axios

## 🛠️ Công nghệ sử dụng

- [Next.js 14+ (App Router)](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Recharts](https://recharts.org/) (vẽ biểu đồ)
- [Axios](https://axios-http.com/) (gọi API)

## 📂 Cấu trúc thư mục

```
src/
  app/
    page.tsx           // Trang tra cứu điểm
    top/page.tsx       // Trang top thí sinh
    report/page.tsx    // Trang thống kê, biểu đồ
  components/
    layout/            // CardContainer, PageContainer, Header...
    ui/                // Sidebar, Button, Input...
  lib/
    axiosInstance.ts   // Cấu hình axios
  hooks/               // Custom hooks
public/                 // Ảnh, icon
```

## ⚡ Hướng dẫn cài đặt & phát triển

1. **Clone repo:**
   ```bash
   git clone <repo-url>
   cd exam-score-fe
   ```
2. **Cài đặt dependencies:**
   ```bash
   npm install
   # hoặc
   yarn install
   ```
3. **Cấu hình biến môi trường:**
   - Tạo file `.env.local` và thêm biến:
     ```env
     NEXT_PUBLIC_API_BASE_URL=http://localhost:8080
     ```
4. **Chạy dev:**
   ```bash
   npm run dev
   # hoặc
   yarn dev
   ```
5. **Truy cập:**
   - Local: [http://localhost:3000](http://localhost:3000)
   - Production: [https://exam-score-fe.vercel.app/](https://exam-score-fe.vercel.app/)

## 📝 Ghi chú

- Đảm bảo backend API cho phép CORS với domain frontend:
  - http://localhost:3000
  - https://exam-score-fe.vercel.app/
- Có thể chỉnh sửa style trong `tailwind.config.ts` và các component trong `src/components/`.
- Để build production: `npm run build` và `npm start`.

## 📊 Demo tính năng

- Tra cứu điểm: nhập SBD, xem kết quả chi tiết.
- Top thí sinh: chọn khối, số lượng, xem bảng xếp hạng.
- Thống kê: xem biểu đồ số lượng thí sinh theo từng mức điểm/môn.

## 📬 Liên hệ & đóng góp

- Tác giả: [ThnhHuynhHuu04](https://github.com/ThnhHuynhHuu04)
- Đóng góp, báo lỗi: tạo issue hoặc pull request trên GitHub repo này.
