# GitNexus Slide

Một ứng dụng slide/presentation viết bằng React + Vite, dùng để trình bày ý tưởng về tối ưu ngữ cảnh cho AI khi phân tích codebase.

## Overview

Project này mô phỏng một deck thuyết trình với phong cách dark, tập trung vào các chủ đề:

- AI và giới hạn của context window
- Khác biệt giữa grep text và hiểu dependency thực sự
- Vai trò của structure, relationship và flow trong codebase

Ứng dụng hiện tại được render từ `src/App.jsx` và mount tại `src/main.jsx`.

## Tech Stack

- React 19
- Vite
- Tailwind CSS
- Lucide React icons

## Cấu trúc chính

- `src/App.jsx`: nội dung và layout chính của slide
- `src/main.jsx`: entry point của ứng dụng
- `src/index.css`: styles toàn cục
- `vite.config.js`: cấu hình Vite
- `tailwind.config.js`: cấu hình Tailwind

## Chạy dự án

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Preview bản build

```bash
npm run preview
```

## Ghi chú

- `dist/` và `node_modules/` đã được ignore trong `.gitignore` để tránh commit/deploy các file không cần thiết.
- File `src/App copy 2.jsx` là bản sao cũ, không phải entry point hiện tại.
