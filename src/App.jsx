import React, { useState, useEffect, useCallback, useRef } from "react";
import {
  ChevronRight,
  ChevronLeft,
  Search,
  AlertTriangle,
  Brain,
  Database,
  Network,
  CheckCircle2,
  XCircle,
  ArrowRight,
  ArrowDown, // Thêm ArrowDown cho mobile flow
  Cpu,
  Share2,
  Workflow,
  Box,
  Activity,
  Zap,
  Compass,
  LayoutDashboard,
  Code,
  Maximize2,
  Minimize2
} from "lucide-react";

// --- Design System / Responsive Typography Standards ---
// H1 (Hero): text-4xl sm:text-5xl md:text-7xl font-black
// H2 (Slide Title): text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight
// Lead (Subtitle): text-base sm:text-lg md:text-xl font-light leading-relaxed
// Card Title: text-lg md:text-xl font-semibold tracking-tight
// Card Body / List: text-sm sm:text-base font-light leading-relaxed

const SlideHeader = ({ section, title, type = "neutral" }) => {
  const isProblem = type === "problem";
  const isSolution = type === "solution";

  if (type === "intro") return null; 
  if (!title) return null;

  return (
    <div className="mb-6 sm:mb-8 md:mb-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex items-center gap-3 mb-4 sm:mb-5">
        <div
          className={`h-[1px] w-6 sm:w-8 ${isProblem ? "bg-rose-500" : isSolution ? "bg-cyan-500" : "bg-zinc-600"}`}
        ></div>
        <span
          className={`text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase ${isProblem ? "text-rose-400" : isSolution ? "text-cyan-400" : "text-zinc-500"}`}
        >
          {section}
        </span>
      </div>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight max-w-4xl">
        {title}
      </h2>
    </div>
  );
};

const Card = ({
  children,
  className = "",
  delay = "delay-0",
  isWarning = false,
}) => (
  <div
    className={`rounded-2xl p-5 sm:p-6 md:p-8 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)] animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-both ${delay} 
    ${isWarning ? "bg-rose-500/[0.02] border border-rose-500/10" : "bg-[#0a0a0a]"} ${className}`}
  >
    {children}
  </div>
);

const StatementBlock = ({ children, isWarning = false }) => (
  <div
    className={`mt-8 md:mt-10 p-6 sm:p-8 md:p-10 rounded-2xl animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300 fill-mode-both relative overflow-hidden
    ${isWarning ? "bg-rose-500/[0.02] shadow-[inset_0_0_0_1px_rgba(244,63,94,0.15)]" : "bg-cyan-500/[0.02] shadow-[inset_0_0_0_1px_rgba(34,211,238,0.15)]"}`}
  >
    <div
      className={`absolute top-0 left-0 w-1 h-full ${isWarning ? "bg-rose-500" : "bg-cyan-500"}`}
    ></div>
    <p className="text-lg sm:text-xl md:text-2xl text-zinc-100 font-medium tracking-tight leading-relaxed">
      {children}
    </p>
  </div>
);

const SimpleList = ({ items, type = "neutral" }) => (
  <ul className="space-y-3 sm:space-y-4">
    {items.map((item, idx) => (
      <li
        key={idx}
        className={`flex items-start text-sm sm:text-base animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-both`}
        style={{ animationDelay: `${(idx + 1) * 100}ms` }}
      >
        {type === "primary" ? (
          <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400 mr-3 sm:mr-4 mt-0.5 flex-shrink-0" />
        ) : type === "warning" ? (
          <XCircle className="w-4 h-4 sm:w-5 sm:h-5 text-rose-400 mr-3 sm:mr-4 mt-0.5 flex-shrink-0" />
        ) : (
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-zinc-600 mr-3 sm:mr-4 mt-0.5 flex-shrink-0" />
        )}
        <span className="text-zinc-300 font-light leading-relaxed">{item}</span>
      </li>
    ))}
  </ul>
);

const SubHeading = ({ children, color = "zinc", className = "" }) => {
  const colors = {
    zinc: "text-zinc-400",
    cyan: "text-cyan-400",
    rose: "text-rose-400",
  };
  return (
    <h3
      className={`text-xs sm:text-sm font-semibold uppercase tracking-[0.15em] mb-4 sm:mb-6 ${colors[color]} ${className}`}
    >
      {children}
    </h3>
  );
};

// --- Slides Data Definition ---
const slides = [
  // 1. INTRO
  {
    section: "INTRO",
    type: "intro",
    title: "",
    content: () => (
      <div className="flex flex-col items-start justify-center h-full text-left w-full min-h-[60vh] animate-in fade-in duration-700 relative">
        {/* Background Glow */}
        <div className="absolute top-1/2 -left-20 w-72 h-72 bg-blue-500/10 blur-[120px] rounded-full pointer-events-none"></div>

        {/* Label */}
        <div className="flex items-center gap-3 mb-6">
          <Compass className="w-5 h-5 text-cyan-500 animate-pulse" />
          <span className="text-cyan-400 font-bold tracking-widest uppercase text-xs">
            Tối Ưu Ngữ Cảnh
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-[1.1] mb-8 relative z-10">
          Tìm Giải Pháp <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            Giúp AI vượt qua rào cản ngữ cảnh.
          </span>
        </h1>

        {/* Content */}
        <div className="max-w-2xl relative z-10">
          <p className="text-lg text-zinc-500 border-l-2 border-cyan-500 pl-4">
            Giúp AI có đầy đủ thông tin và ngữ cảnh để hiểu rõ tình huống, từ đó không trả lời 
            một cách chung chung hay tự bịa chuyện.
          </p>
        </div>
      </div>
    ),
  },
  // 2. THE GOOD
  {
    section: "THE GOOD",
    type: "solution",
    title: "Sức mạnh thực sự của AI",
    content: () => (
      <div className="max-w-6xl">
        <p className="text-base sm:text-lg md:text-xl text-zinc-400 mb-6 sm:mb-8 font-light leading-relaxed">
          Hiện nay chúng ta dùng AI cho các{" "}
          <span className="text-white font-medium">tác vụ hằng ngày</span> như:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-10">
          <Card delay="delay-100" className="flex items-start gap-4 sm:gap-5">
            <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-500 flex-shrink-0 mt-0.5 sm:mt-1" />
            <div>
              <h4 className="text-lg md:text-xl font-semibold text-white mb-2 sm:mb-3">
                Giải thích logic code
              </h4>
              <p className="text-sm sm:text-base text-zinc-400 font-light leading-relaxed">
                Giải thích logic của một đoạn code hoặc file cụ thể độc lập.
              </p>
            </div>
          </Card>
          <Card delay="delay-200" className="flex items-start gap-4 sm:gap-5">
            <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-500 flex-shrink-0 mt-0.5 sm:mt-1" />
            <div>
              <h4 className="text-lg md:text-xl font-semibold text-white mb-2 sm:mb-3">
                Tóm tắt nhanh chóng
              </h4>
              <p className="text-sm sm:text-base text-zinc-400 font-light leading-relaxed">
                Nắm bắt nhanh nội dung của file dài hàng ngàn dòng code.
              </p>
            </div>
          </Card>
          <Card delay="delay-300" className="flex items-start gap-4 sm:gap-5">
            <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-500 flex-shrink-0 mt-0.5 sm:mt-1" />
            <div>
              <h4 className="text-lg md:text-xl font-semibold text-white mb-2 sm:mb-3">
                Đề xuất giải pháp
              </h4>
              <p className="text-sm sm:text-base text-zinc-400 font-light leading-relaxed">
                Gợi ý cách viết code tối ưu, clean code và dễ maintain hơn.
              </p>
            </div>
          </Card>
          <Card delay="delay-400" className="flex items-start gap-4 sm:gap-5">
            <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-500 flex-shrink-0 mt-0.5 sm:mt-1" />
            <div>
              <h4 className="text-lg md:text-xl font-semibold text-white mb-2 sm:mb-3">
                Hỗ trợ Debug
              </h4>
              <p className="text-sm sm:text-base text-zinc-400 font-light leading-relaxed">
                Phát hiện nhanh lỗi syntax trong phạm vi đoạn code được cấp.
              </p>
            </div>
          </Card>
        </div>
      </div>
    ),
  },
  // 3. THE PROCESS
  {
    section: "THE PROCESS",
    type: "problem",
    title: "Quy trình AI hiện tại",
    content: () => (
      <div className="max-w-6xl">
        <div className="bg-white/[0.02] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)] p-5 sm:p-6 md:p-8 rounded-2xl mb-6 sm:mb-10 border border-white/5">
          <p className="text-base sm:text-lg md:text-xl text-zinc-400 font-light flex items-center leading-relaxed">
            <Search className="w-5 h-5 sm:w-6 sm:h-6 mr-3 sm:mr-4 text-zinc-500 flex-shrink-0" /> Khi User hỏi AI:
            <span className="text-white ml-2 sm:ml-3 font-medium tracking-tight">
              "Sửa đoạn code này ảnh hưởng thế nào?"
            </span>
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-10 relative">
          <div className="hidden md:block absolute top-1/2 left-10 right-10 h-[1px] bg-zinc-800 -translate-y-1/2 z-0"></div>

          <Card delay="delay-100" className="text-center relative z-10 p-4 sm:p-6">
            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-zinc-900 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 text-zinc-400 text-xs sm:text-sm font-mono border border-zinc-800">
              1
            </div>
            <span className="text-sm sm:text-base font-semibold text-white">
              Grep / search
            </span>
          </Card>
          <Card delay="delay-200" className="text-center relative z-10 p-4 sm:p-6">
            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-zinc-900 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 text-zinc-400 text-xs sm:text-sm font-mono border border-zinc-800">
              2
            </div>
            <span className="text-sm sm:text-base font-semibold text-white">
              Liệt Kê File
            </span>
          </Card>
          <Card delay="delay-300" className="text-center relative z-10 p-4 sm:p-6">
            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-zinc-900 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 text-zinc-400 text-xs sm:text-sm font-mono border border-zinc-800">
              3
            </div>
            <span className="text-sm sm:text-base font-semibold text-white">Đọc File</span>
          </Card>
          <Card delay="delay-400" className="text-center relative z-10 bg-rose-500/[0.02] border border-rose-500/20 shadow-[inset_0_0_0_1px_rgba(244,63,94,0.1)] p-4 sm:p-6">
            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-rose-500/10 text-rose-500 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <AlertTriangle className="w-3 h-3 sm:w-4 sm:h-4" />
            </div>
            <span className="text-sm sm:text-base font-semibold text-rose-400 uppercase tracking-wider">
              Trả Kết quả
            </span>
          </Card>
        </div>

        <div className="flex flex-col lg:flex-row gap-4 sm:gap-6">
          <div className="flex-1 flex items-start sm:items-center p-4 sm:p-5 md:p-6 bg-white/[0.02] rounded-xl text-zinc-300 border border-white/5 font-light leading-relaxed text-sm sm:text-base">
            <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-zinc-500 mr-3 sm:mr-4 mt-0.5 sm:mt-0 flex-shrink-0" /> 
            <span><strong className="font-medium text-white">Project nhỏ:</strong> Thường AI sẽ mang lại kết quả đúng.</span>
          </div>
          <div className="flex-1 flex items-start sm:items-center p-4 sm:p-5 md:p-6 bg-rose-500/[0.02] rounded-xl text-rose-300 border border-rose-500/10 font-light leading-relaxed text-sm sm:text-base">
            <XCircle className="w-4 h-4 sm:w-5 sm:h-5 text-rose-500 mr-3 sm:mr-4 mt-0.5 sm:mt-0 flex-shrink-0" /> 
            <span className="text-rose-400"><strong className="font-medium text-rose-500">Project lớn:</strong> Gia tăng rủi ro sai lệch do thiếu Context.</span>
          </div>
        </div>
      </div>
    ),
  },
  // 4. EXAMPLE
  {
    section: "VÍ DỤ",
    type: "problem",
    title: "Tìm kiếm cục bộ bằng lệnh Grep",
    content: () => (
      <div className="max-w-5xl">
        <div className="mb-6 sm:mb-8">
          <div className="text-base sm:text-lg md:text-xl text-zinc-400 font-light flex flex-col md:flex-row md:items-center gap-3 bg-white/[0.05] p-5 sm:p-6 rounded-2xl border border-white/10 leading-relaxed">
            <span className="flex items-center text-rose-400 font-semibold">
              <Brain className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 flex-shrink-0" /> Câu hỏi cho AI:
            </span>
            <span className="text-white">
              "Sửa hàm{" "}
              <span className="font-mono text-sm sm:text-base text-rose-300 bg-rose-500/10 px-2 py-0.5 sm:py-1 rounded-md mx-1">
                downloadPdfReport
              </span>{" "}
              thì ảnh hưởng gì?"
            </span>
          </div>
        </div>

        <div className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-5 sm:p-6 md:p-8 font-mono text-sm sm:text-base leading-relaxed mb-6 sm:mb-8 shadow-2xl relative">
          <div className="flex items-center gap-1.5 sm:gap-2 mb-4 sm:mb-5 pb-4 sm:pb-5 border-b border-white/5">
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-rose-500/80"></div>
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-amber-500/80"></div>
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-emerald-500/80"></div>
            <div className="ml-3 sm:ml-4 text-[10px] sm:text-xs font-sans font-bold text-zinc-500 tracking-[0.2em] uppercase">
              Terminal (AI đang tìm từ khoá)
            </div>
          </div>

          <div className="text-cyan-400 mb-4 sm:mb-5 flex items-center overflow-x-auto whitespace-nowrap custom-scrollbar pb-2">
            <ChevronRight className="w-4 h-4 mr-2 text-zinc-500 flex-shrink-0" />
            <span>grep -r "downloadPdfReport" ./src</span>
          </div>

          <div className="text-zinc-400 space-y-1 sm:space-y-2 pl-4 sm:pl-6 overflow-x-auto whitespace-nowrap custom-scrollbar pb-2 text-xs sm:text-sm md:text-base">
            <p>app/Layout/Common/report.js</p>
            <p>app/Layout/Reports/EditReport/PDFReportTab/index.js</p>
            <p>app/Layout/Events/EventDetails/EventReportTab/index.js</p>
            <p>app/Pages/Reports/editReport/editReport.js</p>
            <p>app/Apollo/Mutations/downloadPdfReport.js</p>
            <p>app/Apollo/Functions/handleDownloadPdfReport.js</p>
          </div>
        </div>

        <Card isWarning={true} className="flex flex-col md:flex-row items-start gap-4 sm:gap-6 p-5 sm:p-6 md:p-8">
          <AlertTriangle className="w-6 h-6 sm:w-8 sm:h-8 text-rose-500 flex-shrink-0 mt-1" />
          <div>
            <p className="text-sm sm:text-base md:text-lg text-zinc-300 font-light leading-relaxed">
              Dựa trên 6 file đã (grep - search) bằng từ khoá, AI tự tin kết luận:
              <br />
              <span className="text-white text-base sm:text-lg md:text-xl font-medium mt-3 sm:mt-4 block border-l-2 border-rose-500 pl-3 sm:pl-4">
                "Sửa hàm này an toàn, chỉ ảnh hưởng vài màn hình Report."
              </span>
            </p>
          </div>
        </Card>
      </div>
    ),
  },
  // 5. REALITY CHECK
  {
    section: "REALITY CHECK",
    type: "problem",
    title: "Thực tế phức tạp hơn nhiều",
    content: () => (
      <div className="max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8">
          <Card>
            <SubHeading>Thông tin (Grep Text)</SubHeading>
            <SimpleList
              items={[
                "Chỉ liệt kê danh sách file chứa từ khoá.",
                "Logic bề mặt trông có vẻ độc lập và an toàn.",
                "Dẫn đến kết luận sai lầm.",
              ]}
            />
          </Card>

          <Card isWarning={true}>
            <SubHeading color="rose">Thực Tế (Dependency Ngầm)</SubHeading>
            <SimpleList
              type="warning"
              items={[
                "Nguy cơ phá vỡ các Helper function dùng chung.",
                "Có thể ảnh hưởng ngầm tới luồng khác.",
                "Dễ gây lỗi dây chuyền cho các hệ thống Service khác.",
                "Sinh ra các Side-effects khó lường trước.",
              ]}
            />
          </Card>
        </div>

        <div className="text-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
          <span className="text-base sm:text-lg md:text-xl font-light text-zinc-300 tracking-tight block bg-white/[0.02] py-4 sm:py-6 px-5 sm:px-8 rounded-2xl border border-white/5 inline-block leading-relaxed">
             Tìm thấy Keyword{" "}
            <span className="text-rose-400 font-semibold mx-1 sm:mx-3 uppercase tracking-[0.1em] block sm:inline mt-2 sm:mt-0">
              Không đồng nghĩa
            </span>{" "}
            với việc thấu hiểu toàn bộ Impact.
          </span>
        </div>
      </div>
    ),
  },
  // 6. LIMITATIONS
  {
    section: "LIMITATIONS",
    type: "problem",
    title: "Điểm mù của AI hiện tại",
    content: () => (
      <div className="max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-10">
          <Card>
            <SubHeading>Những gì AI nhìn thấy</SubHeading>
            <SimpleList
              items={[
                "Các khối mã nguồn rời rạc, thiếu sự liên kết.",
                "Đoạn mã bị thiếu giới hạn (Context window).",
                "Tên hàm, tên biến được hiểu dưới dạng chuỗi Text đơn thuần.",
              ]}
            />
          </Card>

          <Card isWarning={true}>
            <SubHeading color="rose">Những gì AI không thấy</SubHeading>
            <SimpleList
              type="warning"
              items={[
                "Đâu là nơi gọi hàm và nơi hàm thực thi?",
                "Luồng chạy end-to-end của hệ thống?",
                "Dependency phức tạp đan chéo giữa các Module?",
              ]}
            />
          </Card>
        </div>

        <div className="text-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
          <span className="text-base sm:text-lg md:text-xl font-light text-zinc-300 tracking-tight block bg-white/[0.02] py-4 sm:py-6 px-5 sm:px-8 rounded-2xl border border-white/5 inline-block leading-relaxed">
            Khả năng đọc mã nguồn{" "}
            <span className="text-rose-400 font-semibold mx-1 sm:mx-3 uppercase tracking-[0.1em] block sm:inline mt-2 sm:mt-0">
              Hoàn toàn khác với
            </span>{" "}
            năng lực hiểu Hệ thống.
          </span>
        </div>
      </div>
    ),
  },
  // 8. DOCS
  {
    section: "DOCUMENTATION",
    type: "problem",
    title: "Giải pháp hiện tại dựa vào Documentation",
    content: () => (
      <div className="max-w-5xl">
        <p className="text-base sm:text-lg md:text-xl text-zinc-400 mb-4 sm:mb-6 font-light leading-relaxed">
          Hiện tại, phần lớn team mô tả hệ thống thông qua README hoặc thêm
          codemap được thêm trong từng repo để cung cấp context cho AI.
        </p>

        <p className="text-base sm:text-lg md:text-xl text-zinc-400 mb-6 sm:mb-8 font-light leading-relaxed">
          Tuy nhiên, cách làm này vẫn còn nhiều hạn chế:
        </p>

        <Card isWarning={true} className="mb-8 sm:mb-10">
          <SimpleList
            type="warning"
            items={[
              "Không thể hiện đúng luồng chạy thực tế của hệ thống.",
              "Dễ bị lỗi thời khi code thay đổi giữa các repo.",
              "Thông tin bị phân tán (mỗi repo một kiểu), khó nhìn tổng thể.",
              "Không có cấu trúc chuẩn để hệ thống tự động phân tích và truy vết impact.",
            ]}
          />
        </Card>

        <div className="p-5 sm:p-6 md:p-10 border border-white/5 bg-white/[0.02] rounded-2xl text-center shadow-[inset_0_0_0_1px_rgba(255,255,255,0.02)]">
          <span className="text-lg sm:text-xl md:text-2xl font-semibold text-white tracking-tight block mb-3 sm:mb-4">
            Docs <span className="text-rose-500 mx-2 sm:mx-3 font-light">≠</span> Thực tế hệ thống
          </span>
          <span className="text-sm sm:text-base md:text-lg text-zinc-400 font-light leading-relaxed block">
            README và codemap chỉ giúp hiểu tổng quan, nhưng không phản ánh chính xác
            cách hệ thống đang hoạt động.
          </span>
        </div>
      </div>
    ),
  },
  // 9. THE SOLUTION
  {
    section: "THE SOLUTION",
    type: "solution",
    title: "Mảnh ghép AI đang thiếu",
    content: () => (
      <div className="max-w-5xl">
        <p className="text-base sm:text-lg md:text-xl text-zinc-400 mb-6 sm:mb-8 font-light leading-relaxed">
          Giải pháp hướng tới là một nền tảng Data tự động cung cấp:
        </p>

        <div className="space-y-3 sm:space-y-4 mb-8 sm:mb-10">
          <Card delay="delay-100" className="flex items-start sm:items-center gap-4 sm:gap-5 bg-cyan-500/[0.02] border border-cyan-500/10 shadow-[inset_0_0_0_1px_rgba(34,211,238,0.05)] p-5 sm:p-6 md:p-8">
            <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400 flex-shrink-0 mt-0.5 sm:mt-0" />
            <span className="text-sm sm:text-base md:text-lg text-zinc-300 font-light leading-relaxed">
              Structure động được trích xuất trực tiếp từ{" "}
              <span className="font-semibold text-cyan-400">Code Thực Tế</span>.
            </span>
          </Card>
          <Card delay="delay-200" className="flex items-start sm:items-center gap-4 sm:gap-5 bg-cyan-500/[0.02] border border-cyan-500/10 shadow-[inset_0_0_0_1px_rgba(34,211,238,0.05)] p-5 sm:p-6 md:p-8">
            <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400 flex-shrink-0 mt-0.5 sm:mt-0" />
            <span className="text-sm sm:text-base md:text-lg text-zinc-300 font-light leading-relaxed">
              Bản đồ Relationship{" "}
              <span className="font-semibold text-cyan-400">phản ánh</span> sự
              liên kết của Codebase.
            </span>
          </Card>
          <Card delay="delay-300" className="flex items-start sm:items-center gap-4 sm:gap-5 bg-cyan-500/[0.02] border border-cyan-500/10 shadow-[inset_0_0_0_1px_rgba(34,211,238,0.05)] p-5 sm:p-6 md:p-8">
            <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400 flex-shrink-0 mt-0.5 sm:mt-0" />
            <span className="text-sm sm:text-base md:text-lg text-zinc-300 font-light leading-relaxed">
              Khả năng Trace (End-to-End) một cách{" "}
              <span className="font-semibold text-cyan-400">Tự Động Hóa</span>.
            </span>
          </Card>
        </div>

        <p className="text-lg sm:text-xl md:text-2xl text-zinc-300 font-light text-center border-t border-white/10 pt-6 sm:pt-8 leading-relaxed">
          Đó chính là lượng{" "}
          <span className="text-cyan-400 font-semibold tracking-[0.15em] uppercase mx-1 sm:mx-2 whitespace-nowrap">
            Ngữ Cảnh
          </span>{" "}
          cần thiết để AI làm việc hiệu quả hơn.
        </p>
      </div>
    ),
  },
  // 10. GRAPH THEORY
  {
    section: "GRAPH THEORY",
    type: "solution",
    title: "Graph Database: Giải pháp lý tưởng",
    content: () => (
      <div className="max-w-6xl">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-around gap-6 sm:gap-8 p-6 sm:p-8 md:p-10 bg-white/[0.02] border border-white/5 rounded-2xl mb-8 sm:mb-10">
          <div className="flex items-center gap-4 sm:gap-6 w-full md:w-auto">
            <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-cyan-500 shadow-[0_0_20px_rgba(34,211,238,0.4)] flex-shrink-0"></div>
            <div>
              <span className="block text-lg md:text-xl font-semibold text-white tracking-tight mb-1 sm:mb-2">
                Node
              </span>
              <span className="text-sm sm:text-base text-zinc-400 font-light">
                Thực thể: Function / Module / Class
              </span>
            </div>
          </div>
          <div className="hidden md:block w-px h-16 bg-white/10"></div>
          <div className="md:hidden h-px w-full bg-white/10"></div>
          <div className="flex items-center gap-4 sm:gap-6 w-full md:w-auto">
            <div className="w-10 h-1 sm:w-12 sm:h-1 bg-cyan-500 rounded-full shadow-[0_0_20px_rgba(34,211,238,0.4)] flex-shrink-0"></div>
            <div>
              <span className="block text-lg md:text-xl font-semibold text-white tracking-tight mb-1 sm:mb-2">
                Edge
              </span>
              <span className="text-sm sm:text-base text-zinc-400 font-light">
                Ràng buộc: Calls / Imports / Depends
              </span>
            </div>
          </div>
        </div>

        <p className="text-base sm:text-lg md:text-xl text-zinc-400 mb-6 sm:mb-8 font-light leading-relaxed">
          Mô phỏng Codebase bằng Graph giúp trực quan hóa các bài toán:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          <Card className="flex items-center justify-center gap-3 sm:gap-4 py-5 sm:py-6 md:py-8">
            <Network className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400" />{" "}
            <span className="text-base md:text-xl font-semibold text-white tracking-tight">
              Structure rõ ràng
            </span>
          </Card>
          <Card className="flex items-center justify-center gap-3 sm:gap-4 py-5 sm:py-6 md:py-8">
            <Activity className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400" />{" "}
            <span className="text-base md:text-xl font-semibold text-white tracking-tight">
              Xem Impact
            </span>
          </Card>
          <Card className="flex items-center justify-center gap-3 sm:gap-4 py-5 sm:py-6 md:py-8">
            <Brain className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400" />{" "}
            <span className="text-base md:text-xl font-semibold text-white tracking-tight">
              Trace Flow
            </span>
          </Card>
        </div>
      </div>
    ),
  },
  // 11. GRAPH REALITY
  {
    section: "GRAPH REALITY",
    type: "problem",
    title: "Rào cản: Khối lượng công việc",
    content: () => (
      <div className="max-w-6xl">
        <p className="text-base sm:text-lg md:text-xl text-zinc-400 mb-6 sm:mb-8 font-light leading-relaxed">
          Khó khăn lớn nhất là việc phải tự xây dựng Graph:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-10">
          <Card delay="delay-100" className="flex flex-col items-start p-5 sm:p-6 md:p-8">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-white/[0.03] flex items-center justify-center mb-4 sm:mb-5">
              <Cpu className="w-4 h-4 sm:w-5 sm:h-5 text-zinc-400" />
            </div>
            <h3 className="text-lg md:text-xl font-semibold text-white mb-2 sm:mb-3">
              Đọc và phân tích toàn bộ code
            </h3>
            <p className="text-sm sm:text-base text-zinc-400 font-light leading-relaxed">
              Phải đọc hết repo và hiểu từng file, từng function.
            </p>
          </Card>
          <Card delay="delay-200" className="flex flex-col items-start p-5 sm:p-6 md:p-8">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-white/[0.03] flex items-center justify-center mb-4 sm:mb-5">
              <Code className="w-4 h-4 sm:w-5 sm:h-5 text-zinc-400" />
            </div>
            <h3 className="text-lg md:text-xl font-semibold text-white mb-2 sm:mb-3">
              Phân tích Logic ngầm
            </h3>
            <p className="text-sm sm:text-base text-zinc-400 font-light leading-relaxed">
              Xác định function nào gọi function nào, module nào phụ thuộc vào đâu.
            </p>
          </Card>
          <Card delay="delay-300" className="flex flex-col items-start p-5 sm:p-6 md:p-8">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-white/[0.03] flex items-center justify-center mb-4 sm:mb-5">
              <Network className="w-4 h-4 sm:w-5 sm:h-5 text-zinc-400" />
            </div>
            <h3 className="text-lg md:text-xl font-semibold text-white mb-2 sm:mb-3">
              Tạo cấu trúc dữ liệu
            </h3>
            <p className="text-sm sm:text-base text-zinc-400 font-light leading-relaxed">
              Lưu lại thành graph (nodes và edges) để có thể truy vấn.
            </p>
          </Card>
          <Card delay="delay-400" className="flex flex-col items-start p-5 sm:p-6 md:p-8" isWarning={true}>
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-rose-500/10 flex items-center justify-center mb-4 sm:mb-5">
              <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5 text-rose-500" />
            </div>
            <h3 className="text-lg md:text-xl font-semibold text-rose-400 mb-2 sm:mb-3">
              Maintain Liên Tục
            </h3>
            <p className="text-sm sm:text-base text-zinc-400 font-light leading-relaxed">
              Mỗi khi code thay đổi, graph cũng phải update theo → rất tốn thời gian.
            </p>
          </Card>
        </div>
      </div>
    ),
  },
  // 12. GRAPH QUERY
  {
    section: "CHALLENGES",
    type: "problem",
    title: "Khó khăn khi truy vấn dữ liệu Graph",
    content: () => (
      <div className="max-w-6xl">
        <p className="text-base sm:text-lg md:text-xl text-zinc-400 mb-6 sm:mb-8 font-light leading-relaxed">
          Khi sử dụng Graph Database, việc truy vấn dữ liệu thường phải dùng ngôn ngữ{" "}
          <span className="font-mono text-white bg-white/10 border border-white/20 px-2 sm:px-3 py-1 rounded-md mx-1 font-semibold text-sm sm:text-base">
            Cypher
          </span>
          :
        </p>

        <Card className="mb-6 sm:mb-8 text-white">
          <SimpleList
            type="warning"
            items={[
              "Khó học hơn so với SQL thông thường.",
              "Câu query cho các luồng xử lý thường khá dài và phức tạp.",
              "Khó debug và theo dõi kết quả khi cần trace flow hoặc impact.",
            ]}
          />
        </Card>

        <div className="p-5 sm:p-6 md:p-8 border-l-4 border-rose-500 bg-rose-500/[0.02] rounded-r-2xl">
          <p className="text-base sm:text-lg md:text-xl text-rose-400 font-medium leading-relaxed">
            Việc viết query để kiểm tra ảnh hưởng (impact) tốn nhiều thời gian và
            không dễ sử dụng.
          </p>
        </div>
      </div>
    ),
  },
  // 13. GRAPH CONCLUSION
  {
    section: "CONCLUSION",
    type: "problem",
    title: "Thực tế của Graph DB",
    content: () => (
      <div className="max-w-5xl">
        <p className="text-base sm:text-lg md:text-xl text-zinc-400 mb-8 sm:mb-10 font-light leading-relaxed">
          Mô hình Graph{" "}
          <span className="text-white font-medium">
            là hướng tiếp cận đúng đắn
          </span>
          , tuy nhiên vấp phải 3 trở ngại lớn khi áp dụng thủ công:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-10 sm:mb-12">
          <Card isWarning={true} className="text-center border-t-2 border-t-rose-500 p-5 sm:p-6 md:p-8">
            <h4 className="text-lg md:text-xl font-semibold text-white mb-3 md:mb-4 tracking-tight">
              Build
            </h4>
            <span className="text-sm sm:text-base text-rose-400 font-light block leading-relaxed">
              Phải hiểu rõ cấu trúc hệ thống
            </span>
          </Card>
          <Card isWarning={true} className="text-center border-t-2 border-t-rose-500 p-5 sm:p-6 md:p-8" delay="delay-100">
            <h4 className="text-lg md:text-xl font-semibold text-white mb-3 md:mb-4 tracking-tight">
              Maintain
            </h4>
            <span className="text-sm sm:text-base text-rose-400 font-light block leading-relaxed">
              Dữ liệu thay đổi → khó đồng bộ
            </span>
          </Card>
          <Card isWarning={true} className="text-center border-t-2 border-t-rose-500 p-5 sm:p-6 md:p-8" delay="delay-200">
            <h4 className="text-lg md:text-xl font-semibold text-white mb-3 md:mb-4 tracking-tight">
              Query
            </h4>
            <span className="text-sm sm:text-base text-rose-400 font-light block leading-relaxed">
              Phải dùng Cypher → khó tiếp cận
            </span>
          </Card>
        </div>

        <p className="text-lg sm:text-xl md:text-1xl text-zinc-300 font-light tracking-tight animate-in fade-in duration-700 delay-500 text-center leading-relaxed">
          Tổng quan: Graph DB đúng về mặt lý thuyết nhưng{" "}
          <span className="text-rose-400 font-semibold uppercase tracking-[0.1em] block mt-2 sm:mt-3">
            khó áp dụng thực tế nếu làm thủ công
          </span>
        </p>
      </div>
    ),
  },
  // 14. THE NEED
  {
    section: "THE SOLUTION",
    type: "solution",
    title: "Giải Pháp Lúc Này",
    content: () => (
      <div className="max-w-5xl mx-auto flex flex-col items-center justify-center text-center">
        <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000 w-full flex flex-col items-center">
          <h2 className="text-5xl sm:text-6xl md:text-[6rem] font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 tracking-tighter leading-none mb-8 sm:mb-12">
            GITNEXUS
          </h2>

          <div className="space-y-3 sm:space-y-4 w-full max-w-3xl text-left">
            <div className="flex items-start sm:items-center text-base sm:text-lg md:text-xl font-light text-zinc-200 bg-white/[0.03] border border-white/10 p-5 sm:p-6 md:p-8 rounded-xl shadow-[inset_0_0_0_1px_rgba(255,255,255,0.02)] leading-relaxed">
              <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-500 mr-4 sm:mr-5 flex-shrink-0 mt-0.5 sm:mt-0" />
              Cung cấp sẵn cấu trúc rõ ràng (Structure).
            </div>
            <div className="flex items-start sm:items-center text-base sm:text-lg md:text-xl font-light text-zinc-200 bg-white/[0.03] border border-white/10 p-5 sm:p-6 md:p-8 rounded-xl shadow-[inset_0_0_0_1px_rgba(255,255,255,0.02)] leading-relaxed">
              <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-500 mr-4 sm:mr-5 flex-shrink-0 mt-0.5 sm:mt-0" />
              Tự động hiểu và nối kết ngữ cảnh (Relationship).
            </div>
            <div className="flex items-start sm:items-center text-base sm:text-lg md:text-xl font-light text-zinc-200 bg-white/[0.03] border border-white/10 p-5 sm:p-6 md:p-8 rounded-xl shadow-[inset_0_0_0_1px_rgba(255,255,255,0.02)] leading-relaxed">
              <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-500 mr-4 sm:mr-5 flex-shrink-0 mt-0.5 sm:mt-0" />
              Không phải tự build. Không phải tự maintain. Không phải tự query.
            </div>
          </div>
        </div>
      </div>
    ),
  },
  // 15. GITNEXUS
  {
    section: "GITNEXUS",
    type: "solution",
    title: "GitNexus là gì?",
    content: () => (
      <div className="max-w-6xl">
        <p className="text-base sm:text-lg md:text-xl text-zinc-300 mb-6 sm:mb-8 font-light tracking-tight leading-relaxed">
          GitNexus là một hệ thống giúp tự động phân tích code và xây dựng bản đồ hệ thống từ source code:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          <div className="space-y-4">
            <Card className="flex items-start gap-4 sm:gap-5 p-5 sm:p-6">
              <Search className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400 flex-shrink-0 mt-0.5 sm:mt-1" />
              <div>
                <h4 className="text-lg md:text-xl font-semibold text-white mb-2">
                  Quét code
                </h4>
                <p className="text-sm sm:text-base text-zinc-400 font-light leading-relaxed">
                  Tự động đọc và cập nhật dữ liệu từ repository.
                </p>
              </div>
            </Card>

            <Card className="flex items-start gap-4 sm:gap-5 p-5 sm:p-6">
              <Activity className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400 flex-shrink-0 mt-0.5 sm:mt-1" />
              <div>
                <h4 className="text-lg md:text-xl font-semibold text-white mb-2">
                  Phân tích code
                </h4>
                <p className="text-sm sm:text-base text-zinc-400 font-light leading-relaxed">
                  Phân tích cấu trúc code để hiểu các function và logic bên trong.
                </p>
              </div>
            </Card>

            <Card className="flex items-start gap-4 sm:gap-5 p-5 sm:p-6">
              <Network className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400 flex-shrink-0 mt-0.5 sm:mt-1" />
              <div>
                <h4 className="text-lg md:text-xl font-semibold text-white mb-2">
                  Tạo bản đồ hệ thống
                </h4>
                <p className="text-sm sm:text-base text-zinc-400 font-light leading-relaxed">
                  Kết nối các thành phần lại thành một graph dễ hiểu.
                </p>
              </div>
            </Card>
          </div>

          <Card className="h-full flex flex-col justify-center border-cyan-500/30 bg-cyan-500/[0.02] p-6 sm:p-8 mt-2 md:mt-0">
            <SubHeading color="cyan" className="!mb-6">
              Kết quả mang lại
            </SubHeading>
            <div className="flex flex-col gap-4 sm:gap-6 text-sm sm:text-base md:text-lg text-zinc-300 font-light border-l border-cyan-500/20 pl-4 sm:pl-6 leading-relaxed">
              <span className="flex items-start sm:items-center">
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 mr-3 sm:mr-4 text-cyan-500 opacity-50 flex-shrink-0 mt-1 sm:mt-0" />
                Biết được function nào gọi function nào.
              </span>
              <span className="flex items-start sm:items-center">
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 mr-3 sm:mr-4 text-cyan-500 opacity-50 flex-shrink-0 mt-1 sm:mt-0" />
                Nhìn rõ các dependency trong hệ thống.
              </span>
              <span className="flex items-start sm:items-center">
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 mr-3 sm:mr-4 text-cyan-500 opacity-50 flex-shrink-0 mt-1 sm:mt-0" />
                Hiểu được luồng chạy thực tế của toàn hệ thống.
              </span>
            </div>
          </Card>
        </div>
      </div>
    ),
  },
  // 17. VALUE PROPOSITION
  {
    section: "VALUE PROPOSITION",
    type: "solution",
    title: "Kết quả khi có GitNexus",
    content: () => (
      <div className="max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          
          {/* WITHOUT */}
          <Card>
            <SubHeading>Hiện tại (không có GitNexus)</SubHeading>
            <div className="space-y-3 sm:space-y-4">
              
              <div className="p-4 sm:p-5 bg-white/[0.02] border border-white/5 rounded-xl text-sm sm:text-base text-zinc-400 font-light flex items-start leading-relaxed">
                <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5 mr-3 sm:mr-4 mt-1 text-zinc-600 flex-shrink-0" />
                AI không có đủ context về hệ thống.
              </div>

              <div className="p-4 sm:p-5 bg-white/[0.02] border border-white/5 rounded-xl text-sm sm:text-base text-zinc-400 font-light flex items-start leading-relaxed">
                <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5 mr-3 sm:mr-4 mt-1 text-zinc-600 flex-shrink-0" />
                Phải đoán hoặc dựa vào thông tin không đầy đủ.
              </div>

              <div className="p-4 sm:p-5 bg-white/[0.02] border border-white/5 rounded-xl text-sm sm:text-base text-zinc-400 font-light flex items-start leading-relaxed">
                <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5 mr-3 sm:mr-4 mt-1 text-zinc-600 flex-shrink-0" />
                Dễ trả lời sai hoặc gây lỗi khi thay đổi code.
              </div>

              <div className="p-4 sm:p-5 bg-white/[0.02] border border-white/5 rounded-xl text-sm sm:text-base text-zinc-400 font-light flex items-start leading-relaxed">
                <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5 mr-3 sm:mr-4 mt-1 text-zinc-600 flex-shrink-0" />
                Tốn thời gian debug và xác minh lại kết quả.
              </div>

              <div className="p-4 sm:p-5 bg-white/[0.02] border border-white/5 rounded-xl text-sm sm:text-base text-zinc-400 font-light flex items-start leading-relaxed">
                <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5 mr-3 sm:mr-4 mt-1 text-zinc-600 flex-shrink-0" />
                Khó scale khi hệ thống lớn và nhiều repo.
              </div>

            </div>
          </Card>

          {/* WITH */}
          <Card className="bg-cyan-500/[0.02] border border-cyan-500/10">
            <SubHeading color="cyan">Với GitNexus</SubHeading>
            <div className="space-y-3 sm:space-y-4">
              
              <div className="p-4 sm:p-5 bg-cyan-500/[0.05] border border-cyan-500/20 rounded-xl text-sm sm:text-base text-zinc-100 font-medium flex items-start leading-relaxed">
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 mr-3 sm:mr-4 mt-1 text-cyan-400 flex-shrink-0" />
                Có thành bản đồ hệ thống rõ ràng.
              </div>

              <div className="p-4 sm:p-5 bg-cyan-500/[0.05] border border-cyan-500/20 rounded-xl text-sm sm:text-base text-zinc-100 font-medium flex items-start leading-relaxed">
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 mr-3 sm:mr-4 mt-1 text-cyan-400 flex-shrink-0" />
                AI có dữ liệu đúng để trả lời.
              </div>

              <div className="p-4 sm:p-5 bg-cyan-500/[0.05] border border-cyan-500/20 rounded-xl text-sm sm:text-base text-zinc-100 font-medium flex items-start leading-relaxed">
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 mr-4 mt-1 text-cyan-400 flex-shrink-0" />
                Truy vết nhanh impact khi thay đổi code.
              </div>

              <div className="p-4 sm:p-5 bg-cyan-500/[0.05] border border-cyan-500/20 rounded-xl text-sm sm:text-base text-zinc-100 font-medium flex items-start leading-relaxed">
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 mr-3 sm:mr-4 mt-1 text-cyan-400 flex-shrink-0" />
                Giảm thời gian debug và kiểm tra thủ công.
              </div>

              <div className="p-4 sm:p-5 bg-cyan-500/[0.05] border border-cyan-500/20 rounded-xl text-sm sm:text-base text-zinc-100 font-medium flex items-start leading-relaxed">
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 mr-3 sm:mr-4 mt-1 text-cyan-400 flex-shrink-0" />
                Làm việc tốt với hệ thống lớn, nhiều repo.
              </div>

            </div>
          </Card>
        </div>
      </div>
    ),
  },
  // 18. DIFFERENCE
  {
    section: "DIFFERENCE",
    type: "solution",
    title: "Sự khác biệt trong việc Trace",
    content: () => (
      <div className="max-w-6xl">
        <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-5 sm:p-6 md:p-8 mb-5 sm:mb-6">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 sm:gap-5">
            <span className="text-xs sm:text-sm font-bold text-zinc-500 tracking-[0.2em] uppercase w-full md:w-28 flex-shrink-0">
              Trước Kia:
            </span>
            <div className="flex flex-col sm:flex-row items-start sm:items-center flex-wrap gap-2 sm:gap-4 text-sm sm:text-base text-zinc-400 font-light leading-relaxed w-full">
              <span className="bg-[#0a0a0a] px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg border border-white/10 w-full sm:w-auto text-center">
                Tìm theo keyword
              </span>
              <ArrowDown className="block sm:hidden text-zinc-600 w-4 h-4 flex-shrink-0 mx-auto" />
              <ArrowRight className="hidden sm:block text-zinc-600 w-4 h-4 flex-shrink-0" />
              <span className="bg-[#0a0a0a] px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg border border-white/10 w-full sm:w-auto text-center">
                Kết quả rời rạc
              </span>
              <ArrowDown className="block sm:hidden text-zinc-600 w-4 h-4 flex-shrink-0 mx-auto" />
              <ArrowRight className="hidden sm:block text-zinc-600 w-4 h-4 flex-shrink-0" />
              <span className="text-zinc-200 text-center w-full sm:w-auto">AI tự suy luận flow</span>
            </div>
          </div>
        </div>

        <div className="bg-cyan-500/[0.05] border border-cyan-500/20 rounded-2xl p-5 sm:p-6 md:p-8 mb-8 sm:mb-10 shadow-[inset_0_0_0_1px_rgba(34,211,238,0.1)]">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 sm:gap-5">
            <span className="text-xs sm:text-sm font-bold text-cyan-500 tracking-[0.2em] uppercase w-full md:w-28 flex-shrink-0">
              GitNexus:
            </span>
            <div className="flex items-center text-base sm:text-lg md:text-xl font-semibold text-white tracking-tight leading-relaxed">
              Dựa vào bản đồ trực quan, giúp AI có thể trace một cách chính xác
              và nhanh chóng.
            </div>
          </div>
        </div>

        <SubHeading>Hỗ trợ giảm thiểu đáng kể:</SubHeading>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          <Card className="py-5 sm:py-6 px-5 sm:px-6 flex items-center justify-center text-center">
            <span className="text-sm sm:text-base text-rose-300 font-light flex sm:flex-col items-center justify-center gap-3 leading-relaxed">
              <XCircle className="w-5 h-5 sm:w-6 sm:h-6 text-rose-500 opacity-50 flex-shrink-0" /> 
              <span>Cảm tính khi Review</span>
            </span>
          </Card>
          <Card className="py-5 sm:py-6 px-5 sm:px-6 flex items-center justify-center text-center">
            <span className="text-sm sm:text-base text-rose-300 font-light flex sm:flex-col items-center justify-center gap-3 leading-relaxed">
              <XCircle className="w-5 h-5 sm:w-6 sm:h-6 text-rose-500 opacity-50 flex-shrink-0" /> 
              <span>Bỏ sót dependency ẩn</span>
            </span>
          </Card>
          <Card className="py-5 sm:py-6 px-5 sm:px-6 flex items-center justify-center text-center">
            <span className="text-sm sm:text-base text-rose-300 font-light flex sm:flex-col items-center justify-center gap-3 leading-relaxed">
              <XCircle className="w-5 h-5 sm:w-6 sm:h-6 text-rose-500 opacity-50 flex-shrink-0" /> 
              <span>Phụ thuộc vào trí nhớ</span>
            </span>
          </Card>
        </div>
      </div>
    ),
  },
  // 19. USAGE
  {
    section: "USAGE",
    type: "solution",
    title: "Giao tiếp bằng ngôn ngữ tự nhiên",
    content: () => (
      <div className="max-w-5xl">
        <p className="text-base sm:text-lg md:text-xl text-zinc-400 mb-6 sm:mb-8 font-light leading-relaxed">
          Không cần Cypher Query phức tạp. Dev trực tiếp hỏi các AI (Copilot,
          Cursor, Claude):
        </p>

        <Card className="mb-6 sm:mb-8 bg-white/[0.02] border-l-4 border-l-cyan-500 p-5 sm:p-6 md:p-8">
          <div className="font-mono text-sm sm:text-base md:text-lg text-cyan-100 space-y-5 sm:space-y-6 leading-relaxed">
            <p className="flex items-start">
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 mr-3 sm:mr-4 mt-1 text-cyan-500 flex-shrink-0" />{" "}
              "Phân tích xem hàm DownloadReport() được trigger từ những màn hình
              nào?"
            </p>
            <p className="flex items-start">
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 mr-3 sm:mr-4 mt-1 text-cyan-500 flex-shrink-0" />{" "}
              "Thay đổi thuộc tính pdfUrl có thể tác động rủi ro đến module
              nào?"
            </p>
            <p className="flex items-start">
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 mr-3 sm:mr-4 mt-1 text-cyan-500 flex-shrink-0" />{" "}
              "Trích xuất tài liệu mô tả luồng DownloadReport từ Flow hiện tại."
            </p>
          </div>
        </Card>

        <StatementBlock>
          GitNexus cung cấp context đáng tin cậy cho AI phân tích trả lời.
        </StatementBlock>
      </div>
    ),
  },
  // 20. SETUP
  {
    section: "SETUP",
    type: "solution",
    title: "Cấu hình & Tích hợp",
    content: () => (
      <div className="max-w-5xl mx-auto space-y-8 sm:space-y-10 font-sans antialiased text-zinc-300">
        {/* 01. CORE WORKFLOW */}
        <div className="space-y-3 sm:space-y-4">
          <h3 className="text-[10px] sm:text-xs font-bold tracking-[0.2em] text-zinc-500 uppercase flex items-center gap-2 sm:gap-3">
            <span className="text-zinc-700">01 —</span> Luồng triển khai hệ thống
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            {[
              {
                step: "Bước 1",
                cmd: "npm install -g gitnexus",
                title: "Cài đặt hệ thống SDK",
              },
              {
                step: "Bước 2",
                cmd: "gitnexus analyze",
                title: "Phân tích mã nguồn",
              },
              {
                step: "Bước 3",
                cmd: "gitnexus serve",
                title: "Kết nối Web UI qua bridge",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="relative bg-zinc-950 border border-zinc-800 p-5 sm:p-6 rounded-xl overflow-hidden hover:border-zinc-700 transition-colors"
              >
                <div className="absolute -right-3 -top-3 sm:-right-4 sm:-top-4 text-3xl sm:text-4xl font-black text-zinc-900/50 select-none italic">
                  {i + 1}
                </div>
                <div className="bg-zinc-900/50 border border-zinc-800 px-3 sm:px-4 py-2 sm:py-2.5 rounded-md font-mono text-xs sm:text-sm text-cyan-400 mb-3 sm:mb-4 flex items-center gap-2 sm:gap-3 overflow-x-auto whitespace-nowrap custom-scrollbar">
                  <span className="text-zinc-600 select-none">$</span>{" "}
                  {item.cmd}
                </div>
                <h4 className="text-sm sm:text-base font-semibold text-zinc-300">
                  {item.title}
                </h4>
              </div>
            ))}
          </div>
        </div>

        {/* 02. UTILITY TOOLKIT */}
        <div className="space-y-3 sm:space-y-4">
          <h3 className="text-[10px] sm:text-xs font-bold tracking-[0.2em] text-zinc-500 uppercase flex items-center gap-2 sm:gap-3">
            <span className="text-zinc-700">02 —</span> Tiện ích quản trị
          </h3>
          <div className="bg-zinc-950 border border-zinc-800 p-5 sm:p-6 md:p-8 rounded-xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {[
                { cmd: "gitnexus list", title: "Xem danh sách repo đã index" },
                { cmd: "gitnexus status", title: "Kiểm tra trạng thái" },
                { cmd: "gitnexus wiki", title: "Tạo wiki tự động" },
                { cmd: "gitnexus clean", title: "Xóa dữ liệu repo" },
              ].map((item, i) => (
                <div key={i} className="flex flex-col">
                  <div className="bg-zinc-900/50 border border-zinc-800 px-3 py-2 rounded-md font-mono text-xs sm:text-sm text-cyan-400 mb-2 sm:mb-3 flex items-center gap-2 overflow-x-auto whitespace-nowrap custom-scrollbar">
                    <span className="text-zinc-600 select-none">$</span>{" "}
                    {item.cmd}
                  </div>
                  <h4 className="text-sm text-zinc-400 font-light leading-relaxed">
                    {item.title}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 03. SYSTEM INFO */}
        <div className="space-y-3 sm:space-y-4">
          <h3 className="text-[10px] sm:text-xs font-bold tracking-[0.2em] text-zinc-500 uppercase flex items-center gap-2 sm:gap-3">
            <span className="text-zinc-700">03 —</span> Thông số vận hành
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
            <div className="bg-zinc-950 border border-zinc-800 rounded-xl overflow-hidden">
              <div className="bg-zinc-900/30 px-5 py-3 sm:py-4 border-b border-zinc-800 flex items-center justify-between">
                <div className="flex items-center gap-2 sm:gap-3">
                  <LayoutDashboard className="w-4 h-4 sm:w-5 sm:h-5 text-zinc-500" />
                  <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.15em] text-zinc-400">
                    Dashboard Console
                  </span>
                </div>
              </div>
              <div className="p-5 sm:p-6 space-y-4 sm:space-y-5">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center border-b border-zinc-900 pb-3 sm:pb-4 gap-1">
                  <span className="text-[10px] sm:text-xs text-zinc-500 uppercase font-semibold tracking-wide">
                    Web UI (Local)
                  </span>
                  <span className="text-xs sm:text-sm font-mono text-white tracking-tight">
                    localhost:3000
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center border-b border-zinc-900 pb-3 sm:pb-4 gap-1">
                  <span className="text-[10px] sm:text-xs text-zinc-500 uppercase font-semibold tracking-wide">
                    Web UI (Cloud)
                  </span>
                  <span className="text-xs sm:text-sm font-mono text-cyan-500 hover:text-cyan-400 transition-colors">
                    <a href="https://gitnexus.vercel.app" target="_blank" rel="noreferrer">
                      gitnexus.vercel.app
                    </a>
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                  <span className="text-[10px] sm:text-xs text-zinc-500 uppercase font-semibold tracking-wide">
                    Engine xử lý
                  </span>
                  <span className="text-[10px] px-2 py-1 bg-cyan-500/10 rounded text-cyan-400 border border-cyan-500/20 font-bold tracking-wider inline-block w-fit">
                    GRAPH & SEMANTIC AI
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-zinc-950 border border-zinc-800 rounded-xl overflow-hidden">
              <div className="bg-zinc-900/30 px-5 py-3 sm:py-4 border-b border-zinc-800 flex items-center">
                <div className="flex items-center gap-2 sm:gap-3">
                  <Database className="w-4 h-4 sm:w-5 sm:h-5 text-zinc-500" />
                  <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.15em] text-zinc-400">
                    Persistence Layer
                  </span>
                </div>
              </div>
              <div className="p-5 sm:p-6 space-y-4 sm:space-y-5">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center border-b border-zinc-900 pb-3 sm:pb-4 gap-1">
                  <span className="text-[10px] sm:text-xs text-zinc-500 uppercase font-semibold tracking-wide">
                    Thư mục lưu trữ
                  </span>
                  <span className="text-xs sm:text-sm font-mono text-white tracking-tight break-all">
                    your-repo/.gitnexus/
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center border-b border-zinc-900 pb-3 sm:pb-4 gap-1">
                  <span className="text-[10px] sm:text-xs text-zinc-500 uppercase font-semibold tracking-wide">
                    Quản lý registry
                  </span>
                  <span className="text-xs sm:text-sm font-mono text-white tracking-tight break-all">
                    .global/registry.json
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                  <span className="text-[10px] sm:text-xs text-zinc-500 uppercase font-semibold tracking-wide">
                    Môi trường
                  </span>
                  <span className="text-[10px] font-black text-emerald-500 uppercase tracking-wider flex items-center gap-1.5 w-fit">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />{" "}
                    100% OFFLINE
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  // 21. GROUP
  {
    section: "GROUP",
    type: "solution",
    title: "Tổ chức Multi-Repo bằng Group",
    content: () => (
      <div className="max-w-6xl mx-auto space-y-6 sm:space-y-8 font-sans antialiased text-zinc-300">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-stretch">
          {/* 01. FLOW */}
          <div className="space-y-3 sm:space-y-4 h-full flex flex-col">
            <h3 className="text-[10px] sm:text-xs font-bold tracking-[0.2em] text-zinc-500 uppercase flex items-center gap-2 sm:gap-3">
              <span className="text-zinc-700">01 —</span> Luồng cơ bản
            </h3>
            <div className="space-y-3 sm:space-y-4 flex-1">
              {[
                { cmd: "gitnexus group create <name>", title: "Tạo group hệ thống" },
                { cmd: "gitnexus group add <group> <repo>", title: "Thêm repo vào group" },
                { cmd: "gitnexus group sync <group>", title: "Đồng bộ context cross-repo" },
              ].map((item, i) => (
                <div key={i} className="bg-zinc-950 border border-zinc-800 rounded-xl p-4 sm:p-5 hover:border-zinc-700 transition-colors">
                  <div className="bg-zinc-900/60 border border-zinc-800 px-3 py-2 sm:px-4 sm:py-2.5 rounded-md font-mono text-xs sm:text-sm text-cyan-400 mb-2 sm:mb-3 flex items-center gap-2 sm:gap-3 overflow-x-auto whitespace-nowrap custom-scrollbar">
                    <span className="text-zinc-600">$</span>
                    {item.cmd}
                  </div>
                  <div className="text-sm sm:text-base text-zinc-400 font-light leading-relaxed">{item.title}</div>
                </div>
              ))}
            </div>
          </div>

          {/* 02. EXAMPLE */}
          <div className="space-y-3 sm:space-y-4 h-full flex flex-col">
            <h3 className="text-[10px] sm:text-xs font-bold tracking-[0.2em] text-zinc-500 uppercase flex items-center gap-2 sm:gap-3">
              <span className="text-zinc-700">02 —</span> Ví dụ cấu trúc
            </h3>
            <div className="flex-1 bg-zinc-900/40 border border-zinc-800 rounded-xl p-5 sm:p-8 font-mono text-xs sm:text-sm leading-[2] sm:leading-[2.5] text-zinc-400 flex flex-col justify-center overflow-x-auto custom-scrollbar">
              <div className="text-cyan-400 font-semibold mb-3 sm:mb-4 text-sm sm:text-base whitespace-nowrap">byct-system</div>
              <div className="pl-2 sm:pl-4 whitespace-nowrap">
                ├── frontend/erp <br />
                ├── frontend/airp <br />
                ├── frontend/admin <br />
                ├── frontend/callcenter <br />
                ├── frontend/bioflux <br />
                ├── backend/api <br />
                ├── backend/report <br />
                └── backend/auth
              </div>
            </div>
          </div>
        </div>

        {/* 03 VALUE */}
        <div className="space-y-3 sm:space-y-4 pt-2 sm:pt-4">
          <h3 className="text-[10px] sm:text-xs font-bold tracking-[0.2em] text-zinc-500 uppercase flex items-center gap-2 sm:gap-3">
            <span className="text-zinc-700">03 —</span> Giá trị mang lại
          </h3>
          <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-5 sm:p-6 md:p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {[
                "Gom nhiều repo vào cùng một context",
                "Hỗ trợ query flow xuyên repo rõ ràng hơn",
                "Dễ mở rộng từ frontend sang backend",
                "Đồng bộ shared graph cho team",
              ].map((text, i) => (
                <div key={i} className="text-sm sm:text-base text-zinc-400 font-light flex items-start leading-relaxed">
                  <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full mr-3 sm:mr-4 mt-2 flex-shrink-0"></span>
                  {text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    ),
  },
  // 22. SCALE
  {
    section: "SCALE",
    type: "solution",
    title: "Shared System Context cho Team",
    content: () => (
      <div className="max-w-6xl mx-auto space-y-6 sm:space-y-8">
        <div className="text-base sm:text-lg md:text-xl text-zinc-400 font-light text-center leading-relaxed">
          System lớn, nhiều repo, nhiều service →
          <span className="text-zinc-200 font-medium block sm:inline mt-1 sm:mt-0">
            {" "}không thể tự analyze lại từ đầu
          </span>
        </div>

        <Card className="p-5 sm:p-6 md:p-8 bg-zinc-950 border border-zinc-800">
          <div className="flex flex-col md:flex-row items-stretch md:items-center gap-4 sm:gap-5">
            <div className="flex-1 text-center p-4 sm:p-6 rounded-xl bg-zinc-900/40 border border-zinc-800 flex flex-col justify-center">
              <div className="text-white text-lg sm:text-xl font-semibold mb-2 sm:mb-3">GitNexus</div>
              <div className="text-sm text-zinc-400 font-light leading-relaxed">
                Analyze multi-repo → build graph
              </div>
            </div>
            <ArrowDown className="block md:hidden text-zinc-600 w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 mx-auto" />
            <ArrowRight className="hidden md:block text-zinc-600 w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
            <div className="flex-1 text-center p-4 sm:p-6 rounded-xl bg-cyan-500/[0.05] border border-cyan-500/20 flex flex-col justify-center">
              <div className="text-cyan-400 text-lg sm:text-xl font-semibold mb-2 sm:mb-3">FalkorDB</div>
              <div className="text-sm text-cyan-500/80 font-light leading-relaxed">
                Lưu graph tập trung (shared)
              </div>
            </div>
            <ArrowDown className="block md:hidden text-zinc-600 w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 mx-auto" />
            <ArrowRight className="hidden md:block text-zinc-600 w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
            <div className="flex-1 text-center p-4 sm:p-6 rounded-xl bg-zinc-900/40 border border-zinc-800 flex flex-col justify-center">
              <div className="text-white text-lg sm:text-xl font-semibold mb-2 sm:mb-3">AI / Dev</div>
              <div className="text-sm text-zinc-400 font-light leading-relaxed">
                Query cùng 1 system view
              </div>
            </div>
          </div>
        </Card>

        <Card className="p-5 sm:p-6 md:p-8 bg-zinc-950 border border-zinc-800">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-5 text-sm sm:text-base text-zinc-400 font-light leading-relaxed">
            <div>• Không cần analyze thủ công lặp lại</div>
            <div>• Một source of truth cho toàn team</div>
            <div>• AI và dev dùng chung context</div>
            <div>• Giảm lệch hiểu system giữa các member</div>
          </div>
        </Card>

        <Card className="p-5 sm:p-6 md:p-8 bg-zinc-950 border border-zinc-800">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 text-sm sm:text-base">
            <div className="space-y-3 sm:space-y-4 border-b pb-6 md:border-b-0 md:pb-0 md:border-r border-zinc-800 md:pr-8">
              <div className="text-lg sm:text-xl text-white font-semibold tracking-tight">Ladybug</div>
              <div className="text-zinc-400 font-light space-y-2 sm:space-y-3 leading-relaxed">
                <div>• Dùng local (dev cá nhân)</div>
                <div>• Explore / debug graph</div>
                <div>• Model schema trực quan</div>
                <div>• Không cần infra</div>
                <div className="text-rose-400 font-medium mt-1 sm:mt-2">• Không phù hợp shared team</div>
              </div>
            </div>
            <div className="space-y-3 sm:space-y-4 md:pl-8">
              <div className="text-lg sm:text-xl text-cyan-400 font-semibold tracking-tight">FalkorDB</div>
              <div className="text-zinc-400 font-light space-y-2 sm:space-y-3 leading-relaxed">
                <div>• Graph DB chạy server</div>
                <div>• Query nhanh, scale lớn</div>
                <div>• Multi-user / multi-AI</div>
                <div>• Centralized system context</div>
                <div className="text-cyan-400 font-medium mt-1 sm:mt-2">• Phù hợp team & production</div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    ),
  },
  // 23. THE ANSWER
  {
    section: "THE ANSWER",
    type: "solution",
    title: "Giải quyết bài toán ban đầu",
    content: () => (
      <div className="max-w-6xl">
        <div className="mb-8 sm:mb-10 border-l-4 border-cyan-500 bg-cyan-500/[0.02] p-5 sm:p-6 md:p-8 rounded-r-xl">
          <p className="text-base sm:text-lg md:text-xl text-zinc-400 font-light leading-relaxed">
            Nhắc lại ví dụ: Chỉnh sửa hàm{" "}
            <span className="text-white font-mono font-medium mx-1 sm:mx-2 tracking-tight">
              downloadPdfReport
            </span>{" "}
            mang tới ảnh hưởng gì?
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          <Card className="border border-rose-500/10">
            <SubHeading color="zinc">Tìm kiếm (Grep Text)</SubHeading>
            <SimpleList
              type="warning"
              items={[
                "Trả về các file chứa từ khóa một cách máy móc.",
                "Không đánh giá được ưu tiên hoặc trình tự gọi (Call-stack).",
              ]}
            />
          </Card>
          <Card className="bg-cyan-500/[0.05] border border-cyan-500/20 shadow-[inset_0_0_0_1px_rgba(34,211,238,0.1)]">
            <SubHeading color="cyan">Sử dụng GitNexus + AI</SubHeading>
            <SimpleList
              type="primary"
              items={[
                "AI dùng data từ Graph để truy ra trình tự thực thi logic.",
                "Vẽ bản đồ: Ai gọi hàm → Luồng đi về đâu → Tác động tới Service nào.",
              ]}
            />
          </Card>
        </div>
      </div>
    ),
  },
  // 24. SUMMARY
  {
    section: "SUMMARY_WORKFLOW",
    type: "solution",
    title: "Từ đọc code → hiểu hệ thống",
    content: () => (
      <div className="max-w-6xl">
        <div className="flex flex-col gap-2 sm:gap-6">
          <div className="flex flex-col gap-5 sm:gap-6 mt-2">
            <Card className="flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-8 bg-white/[0.02]">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-zinc-900 rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0">
                <Search className="w-6 h-6 sm:w-8 sm:h-8 text-zinc-600" />
              </div>
              <div>
                <span className="text-[10px] sm:text-xs text-zinc-500 font-bold tracking-[0.2em] uppercase block mb-2 sm:mb-3">
                  Cách cũ
                </span>
                <span className="text-lg sm:text-xl md:text-xl text-zinc-200 font-semibold tracking-tight leading-tight block">
                  Làm việc với code như text rời rạc
                </span>
                <span className="text-sm sm:text-base text-zinc-400 mt-1.5 sm:mt-2 block font-light leading-relaxed">
                  → Phải tự đọc, tự nối logic, dễ sai sót
                </span>
              </div>
            </Card>

            <Card className="flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-8 bg-cyan-500/[0.05] border border-cyan-500/20">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-cyan-500/20 rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0">
                <Brain className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-400" />
              </div>
              <div>
                <span className="text-[10px] sm:text-xs text-cyan-500 font-bold tracking-[0.2em] uppercase block mb-2 sm:mb-3">
                  Với GitNexus
                </span>
                <span className="text-lg sm:text-xl md:text-xl text-white font-semibold tracking-tight leading-tight block">
                  Hiểu hệ thống như một bản đồ hoàn chỉnh
                </span>
                <span className="text-sm sm:text-base text-cyan-400 mt-1.5 sm:mt-2 block font-light leading-relaxed">
                  → Thấy rõ flow, dependency, impact ngay lập tức
                </span>
              </div>
            </Card>
          </div>

          <div className="mt-2 sm:mt-4">
            <Card className="flex flex-col gap-5 sm:gap-6 p-5 sm:p-8">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-5">
                <span className="text-xs sm:text-sm font-bold text-zinc-500 tracking-[0.2em] uppercase w-full sm:w-32 flex-shrink-0">
                  Trước kia
                </span>
                <div className="flex items-center flex-wrap gap-3 sm:gap-4 text-base sm:text-lg text-zinc-400 font-light w-full">
                  <span>User hỏi</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                  <span>AI</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                  <span className="text-rose-400 bg-rose-500/[0.05] border border-rose-500/20 px-3 sm:px-4 py-1 sm:py-1.5 rounded-lg font-medium text-sm sm:text-base">
                    Suy đoán
                  </span>
                </div>
              </div>

              <div className="w-full h-px bg-zinc-800/50"></div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-5">
                <span className="text-xs sm:text-sm font-bold text-cyan-500 tracking-[0.2em] uppercase w-full sm:w-32 flex-shrink-0">
                  Bây giờ
                </span>
                <div className="flex items-center flex-wrap gap-3 sm:gap-4 text-base sm:text-lg text-white font-light w-full">
                  <span>User hỏi</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                  <span className="bg-cyan-500/[0.1] px-3 sm:px-4 py-1 sm:py-1.5 rounded-xl border border-cyan-500/30 font-medium text-sm sm:text-base">
                    AI + GitNexus
                  </span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                  <span className="text-cyan-400 font-medium text-sm sm:text-base leading-tight">
                    Trả lời từ cấu trúc thực tế
                  </span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    ),
  },
  // 27. COMPARISON (Responsive Grid)
  {
    section: "COMPARISON",
    type: "solution",
    title: "Vì sao nên chọn GitNexus?",
    content: () => (
      <div className="max-w-5xl">
        <div className="border-t border-white/10 pt-2">
          {[
            ["Cách AI trả lời", "Dựa trên suy đoán, có thể sai", "Dựa trên dữ liệu thật từ code"],
            ["Hiểu codebase", "Chỉ thấy từng phần nhỏ (do context)", "Hiểu toàn bộ hệ thống qua Graph"],
            ["Tìm ảnh hưởng code", "Phải tự grep, dễ sót lỗi", "Hiển thị đầy đủ flow & dependency"],
            ["Chuẩn bị dữ liệu", "Phải tự build & maintain thủ công", "Tự động build Graph từ codebase"],
            ["Truy vấn dữ liệu", "Cần biết Cypher / SQL phức tạp", "Chỉ cần hỏi bằng ngôn ngữ tự nhiên"],
            ["Độ chính xác", "Phụ thuộc kinh nghiệm Dev", "Dựa trên quan hệ thực trong code"],
            ["Tốc độ phân tích", "Mất nhiều thời gian tự đọc code", "Trả kết quả gần như ngay lập tức"],
            ["Đối tượng sử dụng", "Dev có nhiều kinh nghiệm dự án", "Mọi role: Dev, QA, PM, BA..."]
          ].map((row, idx, arr) => (
            <div key={idx} className={`flex flex-col md:grid md:grid-cols-3 gap-3 md:gap-4 py-4 md:py-5 ${idx !== arr.length - 1 ? "border-b border-white/5" : ""}`}>
              <div className="text-sm md:text-base text-zinc-400 font-semibold md:font-light md:pr-4 flex items-center">{row[0]}</div>
              
              <div className="flex flex-col sm:flex-row md:col-span-2 gap-2 sm:gap-4">
                <div className="flex-1 text-sm md:text-base text-zinc-500 font-light flex items-start gap-2 bg-white/[0.02] md:bg-transparent p-3 md:p-0 rounded-lg md:rounded-none leading-relaxed">
                  <span className="md:hidden text-rose-500/50 mt-0.5 text-[10px]">❌</span> 
                  <span>{row[1]}</span>
                </div>
                <div className={`flex-1 text-sm md:text-base font-medium flex items-start gap-2 bg-cyan-500/[0.05] md:bg-transparent p-3 md:p-0 rounded-lg md:rounded-none leading-relaxed ${idx === 3 || idx === 4 || idx === 7 ? 'text-cyan-400' : 'text-white'}`}>
                  <span className="md:hidden text-cyan-400 mt-0.5 text-[10px]">✅</span>
                  <span>{row[2]}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    section: "SHOWTIME",
    type: "solution",
    title: "",
    content: () => (
      <div className="flex items-center justify-center h-full w-full py-16 sm:py-20">
        <div className="text-center max-w-4xl px-4">
          <div className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-cyan-400 font-bold mb-4 sm:mb-6">
            Kiểm chứng thực tế
          </div>
          <h2 className="text-5xl sm:text-7xl md:text-8xl font-black text-white tracking-tighter leading-tight">
            Live Demo
          </h2>
          <p className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl text-zinc-400 font-light max-w-3xl mx-auto leading-relaxed">
            Kiểm chứng trực tiếp cách GitNexus phân tích hệ thống trên codebase
            thực tế.
          </p>
        </div>
      </div>
    ),
  },
  // 31. CONCLUSION
  {
    section: "CONCLUSION",
    type: "neutral",
    title: "Kết luận",
    content: () => (
      <div className="max-w-5xl">
        <p className="text-base sm:text-lg md:text-xl text-zinc-400 mb-6 sm:mb-8 font-light leading-relaxed">
          Việc AI chưa hoạt động hiệu quả khi làm việc với Codebase quy mô xuất
          phát từ nguyên nhân cốt lõi:
        </p>

        <Card className="mb-8 sm:mb-10 py-6 sm:py-8 flex justify-center bg-white/[0.02]">
          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 sm:gap-6 text-lg sm:text-xl font-semibold text-white tracking-tight">
            <span>Thiếu Structure</span>
            <span className="hidden sm:inline text-zinc-700 font-light text-2xl">/</span>
            <span>Mù mờ Dependency</span>
            <span className="hidden sm:inline text-zinc-700 font-light text-2xl">/</span>
            <span>Đứt gãy Flow</span>
          </div>
        </Card>

        <p className="text-lg sm:text-xl md:text-2xl text-zinc-300 font-light leading-relaxed mb-12 sm:mb-16 text-center max-w-4xl mx-auto px-4">
          AI không hề yếu.
          <br className="hidden sm:block" />
          Rào cản thực sự là do chúng đang bị{" "}
          <span className="text-white font-semibold tracking-tight uppercase border-b-2 border-cyan-500 pb-1 whitespace-nowrap">
            Thiếu Ngữ Cảnh
          </span>
        </p>

        <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500 text-center mt-8 sm:mt-12">
          <span className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter text-white block mb-4 sm:mb-6">
            GITNEXUS
          </span>
          <span className="text-xs sm:text-sm md:text-base text-cyan-400 font-medium tracking-[0.15em] uppercase block leading-relaxed px-4">
            Xây dựng context chuẩn từ codebase.<br className="hidden sm:block" />
            Biến hệ thống phức tạp thành bản đồ có thể hiểu & truy vấn
          </span>
        </div>
      </div>
    ),
  },
  // 31. Q&A
  {
    section: "QA",
    type: "neutral",
    title: "",
    content: () => (
      <div className="flex items-center justify-center h-full w-full py-12 sm:py-16">
        <div className="w-full max-w-5xl text-center px-4">
          <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full border border-cyan-500/20 bg-cyan-500/[0.06] mb-6 sm:mb-8">
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-cyan-400"></span>
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-cyan-400 font-bold">
              Questions & Discussion
            </span>
          </div>

          <h2 className="text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-tighter leading-tight">
            Giải đáp thắc mắc
          </h2>

          <p className="mt-6 sm:mt-8 max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-zinc-400 font-light leading-relaxed">
            Nếu mọi người muốn, chúng ta có thể trao đổi thêm về kiến trúc, cách
            tích hợp MCP, hoặc các tình huống áp dụng GitNexus trong thực tế.
          </p>

          <div className="mt-10 sm:mt-12 mx-auto max-w-2xl rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.02] p-6 sm:p-8">
            <div className="text-base sm:text-lg text-white font-medium tracking-wide">
              Câu hỏi · Góp ý · Thảo luận
            </div>
          </div>
        </div>
      </div>
    ),
  },
];

// --- Main App Component ---

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showMenu, setShowMenu] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const appRef = useRef(null);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev < slides.length - 1 ? prev + 1 : prev));
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : prev));
  }, []);

  const handleMouseDown = useCallback(
    (e) => {
      if (!isFullscreen) return;

      const target = e.target;
      if (!(target instanceof Element)) return;

      const interactiveElement = target.closest(
        "button, a, input, textarea, select, [role='button'], [contenteditable='true']"
      );
      if (interactiveElement) return;

      if (e.button === 0) {
        nextSlide();
      } else if (e.button === 2) {
        e.preventDefault();
        prevSlide();
      }
    },
    [isFullscreen, nextSlide, prevSlide]
  );

  const handleCopyBlock = useCallback(
    (e) => {
      if (!isFullscreen) return;
      e.preventDefault();
    },
    [isFullscreen]
  );

  const handleKeyDownCapture = useCallback(
    (e) => {
      if (!isFullscreen) return;

      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "c") {
        e.preventDefault();
      }
    },
    [isFullscreen]
  );

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      appRef.current?.requestFullscreen?.().catch((err) => console.warn(err));
    } else {
      document.exitFullscreen?.().catch((err) => console.warn(err));
    }
  }, []);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () =>
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight" || e.key === " " || e.key === "PageDown")
        nextSlide();
      if (e.key === "ArrowLeft" || e.key === "PageUp") prevSlide();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide]);

  const SlideContent = slides[currentSlide].content;
  const currentSectionType = slides[currentSlide].type;

  return (
    <div
      ref={appRef}
      onMouseDown={handleMouseDown}
      onCopy={handleCopyBlock}
      onCut={handleCopyBlock}
      onKeyDownCapture={handleKeyDownCapture}
      onContextMenu={isFullscreen ? (e) => e.preventDefault() : undefined}
      className={`min-h-screen bg-[#000000] text-zinc-200 font-sans antialiased overflow-x-hidden flex flex-col relative selection:bg-cyan-500/30 selection:text-white ${
        isFullscreen ? "select-none" : ""
      }`}
    >
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      </div>

      <div className="h-[2px] w-full bg-transparent fixed top-0 z-[70]">
        <div
          className="h-full bg-cyan-500 transition-all duration-300 ease-out shadow-[0_0_15px_rgba(34,211,238,0.8)]"
          style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
        />
      </div>

      <header className="px-5 sm:px-8 py-4 md:px-12 md:py-5 flex items-center justify-between gap-3 z-[60] w-full fixed top-0 bg-[#000000]/90 backdrop-blur-xl border-b border-white/5 pointer-events-auto">
        <div className="flex items-center gap-2 sm:gap-3 min-w-0">
          <Network className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400 flex-shrink-0" />
          <span className="text-sm sm:text-base md:text-lg font-bold tracking-tighter text-white truncate">
            Khám phá AI
          </span>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <div className="text-[10px] sm:text-xs md:text-sm font-bold text-zinc-500 tracking-widest font-mono bg-white/[0.05] px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-white/10 backdrop-blur-md">
            {(currentSlide + 1).toString().padStart(2, "0")}{" "}
            <span className="text-zinc-700 mx-1 sm:mx-2">/</span> {slides.length}
          </div>
        </div>
      </header>

      <main className="flex-1 flex flex-col w-full relative z-10 min-h-[100dvh] pt-28 pb-32 md:pt-32 md:pb-40">
        <div className="w-full max-w-[1200px] px-5 sm:px-8 md:px-12 lg:px-20 mx-auto my-auto">
          <div key={currentSlide} className="w-full">
            <SlideHeader
              section={slides[currentSlide].section}
              title={slides[currentSlide].title}
              type={currentSectionType}
            />
            <div className="w-full">
              <SlideContent />
            </div>
          </div>
        </div>
      </main>

      <button
        type="button"
        onClick={toggleFullscreen}
        className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-[70] inline-flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-white/10 bg-[#0a0a0a]/85 text-zinc-300 shadow-[0_0_40px_rgba(0,0,0,0.55)] backdrop-blur-xl transition-colors hover:text-cyan-400 hover:border-cyan-500/40 hover:bg-[#101010]/90 pointer-events-auto"
        title={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
        aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
      >
        {isFullscreen ? (
          <Minimize2 className="w-4 h-4 sm:w-5 sm:h-5" />
        ) : (
          <Maximize2 className="w-4 h-4 sm:w-5 sm:h-5" />
        )}
      </button>

      <div className="fixed bottom-6 sm:bottom-8 md:bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-1.5 sm:gap-2 z-50 bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/10 p-1 sm:p-1.5 rounded-full shadow-[0_0_40px_rgba(0,0,0,0.8)]">
        <button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className={`p-2.5 sm:p-3 rounded-full transition-all ${currentSlide === 0 ? "opacity-20 cursor-not-allowed text-zinc-600" : "text-zinc-400 hover:text-white hover:bg-white/10"}`}
        >
          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        <div className="relative">
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="flex items-center justify-center px-4 sm:px-6 py-1.5 sm:py-2 rounded-full text-zinc-400 hover:text-white hover:bg-white/10 transition-colors text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase"
          >
            Index
          </button>

          {showMenu && (
            <div className="absolute bottom-14 sm:bottom-16 left-1/2 -translate-x-1/2 w-[90vw] sm:w-[340px] md:w-[420px] max-h-[60vh] overflow-y-auto bg-[#0a0a0a] border border-white/10 shadow-2xl p-1.5 sm:p-2 custom-scrollbar z-50 rounded-xl sm:rounded-2xl">
              {slides.map((s, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setCurrentSlide(idx);
                    setShowMenu(false);
                  }}
                  className={`w-full text-left px-4 sm:px-5 py-3 sm:py-3.5 text-xs sm:text-sm transition-all flex items-center rounded-lg sm:rounded-xl mb-1 group
                    ${
                      currentSlide === idx
                        ? "text-cyan-400 bg-cyan-500/10 font-bold border border-cyan-500/20"
                        : "text-zinc-400 hover:text-white hover:bg-white/5 font-light border border-transparent"
                    }`}
                >
                  <span className={`w-8 sm:w-10 font-mono text-[10px] sm:text-xs opacity-50 flex-shrink-0`}>
                    {(idx + 1).toString().padStart(2, "0")}
                  </span>
                  <span className="truncate">{s.title || s.section}</span>
                </button>
              ))}
            </div>
          )}
        </div>

        <button
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1}
          className={`p-2.5 sm:p-3 rounded-full transition-all ${currentSlide === slides.length - 1 ? "opacity-20 cursor-not-allowed text-zinc-600" : "text-zinc-400 hover:text-white hover:bg-white/10"}`}
        >
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        .custom-scrollbar::-webkit-scrollbar { width: 4px; height: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: rgba(255,255,255,0.2); }
      `,
        }}
      />
    </div>
  );
}
