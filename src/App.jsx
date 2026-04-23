import React, { useState, useEffect, useCallback, useRef } from "react";
import {
  ChevronRight,
  ChevronLeft,
  Play,
  Code,
  Search,
  GitMerge,
  AlertTriangle,
  Brain,
  Database,
  Network,
  CheckCircle2,
  XCircle,
  ArrowRight,
  List,
  Cpu,
  Layers,
  Lock,
  Share2,
  Workflow,
  Box,
  Activity,
  Command,
  Zap,
  Compass,
  LayoutDashboard,
  Users,
  Server,
  GitBranch,
  Layers3,
  FileText,
  FileCode2,
} from "lucide-react";

// --- Premium Pitch Deck Components ---

const SlideHeader = ({ section, title, type = "neutral" }) => {
  const isProblem = type === "problem";
  const isSolution = type === "solution";

  if (type === "intro") return null; // Không hiện header ở trang intro
  if (!title) return null;

  return (
    <div className="mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex items-center gap-3 mb-6">
        <div
          className={`h-[1px] w-8 ${isProblem ? "bg-rose-500" : isSolution ? "bg-cyan-500" : "bg-zinc-600"}`}
        ></div>
        <span
          className={`text-xs font-bold tracking-[0.25em] uppercase ${isProblem ? "text-rose-400" : isSolution ? "text-cyan-400" : "text-zinc-500"}`}
        >
          {section}
        </span>
      </div>
      <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white leading-tight max-w-4xl">
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
    className={`rounded-2xl p-8 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)] animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-both ${delay} 
    ${isWarning ? "bg-rose-500/[0.02] border border-rose-500/10" : "bg-[#0a0a0a]"} ${className}`}
  >
    {children}
  </div>
);

const StatementBlock = ({ children, isWarning = false }) => (
  <div
    className={`mt-10 p-8 md:p-10 rounded-2xl animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300 fill-mode-both relative overflow-hidden
    ${isWarning ? "bg-rose-500/[0.02] shadow-[inset_0_0_0_1px_rgba(244,63,94,0.15)]" : "bg-cyan-500/[0.02] shadow-[inset_0_0_0_1px_rgba(34,211,238,0.15)]"}`}
  >
    <div
      className={`absolute top-0 left-0 w-1 h-full ${isWarning ? "bg-rose-500" : "bg-cyan-500"}`}
    ></div>
    <p className="text-xl md:text-2xl text-white font-medium tracking-tight leading-relaxed">
      {children}
    </p>
  </div>
);

const SimpleList = ({ items, type = "neutral" }) => (
  <ul className="space-y-4">
    {items.map((item, idx) => (
      <li
        key={idx}
        className={`flex items-start text-base md:text-lg animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-both`}
        style={{ animationDelay: `${(idx + 1) * 100}ms` }}
      >
        {type === "primary" ? (
          <CheckCircle2 className="w-5 h-5 text-cyan-400 mr-4 mt-0.5 flex-shrink-0" />
        ) : type === "warning" ? (
          <XCircle className="w-5 h-5 text-rose-400 mr-4 mt-0.5 flex-shrink-0" />
        ) : (
          <ChevronRight className="w-5 h-5 text-zinc-600 mr-4 mt-0.5 flex-shrink-0" />
        )}
        <span className="text-zinc-300 font-light leading-relaxed">{item}</span>
      </li>
    ))}
  </ul>
);

const SubHeading = ({ children, color = "zinc" }) => {
  const colors = {
    zinc: "text-zinc-500",
    cyan: "text-cyan-400",
    rose: "text-rose-500",
  };
  return (
    <h3
      className={`text-sm font-bold uppercase tracking-[0.2em] mb-8 ${colors[color]}`}
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
            Giúp AI có đầy đủ thông tin và ngữ cảnh để hiểu rõ tình huống, từ đó
            không trả lời chung chung hay tự bịa chuyện.
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
        <p className="text-lg md:text-xl text-zinc-400 mb-10 font-light">
          Hiện nay chúng ta dùng AI cho các{" "}
          <span className="text-white font-medium">tác vụ hằng ngày</span> như :
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <Card delay="delay-100" className="flex items-start gap-5 p-6">
            <Zap className="w-6 h-6 text-cyan-500 flex-shrink-0 mt-1" />
            <div>
              <h4 className="text-lg font-bold text-white mb-2">
                Giải thích logic code
              </h4>
              <p className="text-sm md:text-base text-zinc-400 font-light">
                Giải thích logic của một đoạn code hoặc file cụ thể độc lập.
              </p>
            </div>
          </Card>
          <Card delay="delay-200" className="flex items-start gap-5 p-6">
            <Zap className="w-6 h-6 text-cyan-500 flex-shrink-0 mt-1" />
            <div>
              <h4 className="text-lg font-bold text-white mb-2">
                Tóm tắt siêu tốc
              </h4>
              <p className="text-sm md:text-base text-zinc-400 font-light">
                Nắm bắt nhanh nội dung của file dài hàng ngàn dòng code.
              </p>
            </div>
          </Card>
          <Card delay="delay-300" className="flex items-start gap-5 p-6">
            <Zap className="w-6 h-6 text-cyan-500 flex-shrink-0 mt-1" />
            <div>
              <h4 className="text-lg font-bold text-white mb-2">
                Đề xuất giải pháp
              </h4>
              <p className="text-sm md:text-base text-zinc-400 font-light">
                Gợi ý cách viết code tối ưu, clean code và dễ maintain hơn.
              </p>
            </div>
          </Card>
          <Card delay="delay-400" className="flex items-start gap-5 p-6">
            <Zap className="w-6 h-6 text-cyan-500 flex-shrink-0 mt-1" />
            <div>
              <h4 className="text-lg font-bold text-white mb-2">
                Hỗ trợ Debug
              </h4>
              <p className="text-sm md:text-base text-zinc-400 font-light">
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
        <div className="bg-white/[0.02] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)] p-6 md:p-8 rounded-2xl mb-10 border border-white/5">
          <p className="text-lg md:text-xl text-zinc-400 font-light flex items-center">
            <Search className="w-6 h-6 mr-4 text-zinc-500" /> Khi User hỏi AI:
            <span className="text-white ml-3 font-medium tracking-tight">
              "Sửa đoạn này ảnh hưởng thế nào?"
            </span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10 relative">
          <div className="hidden md:block absolute top-1/2 left-10 right-10 h-[1px] bg-zinc-800 -translate-y-1/2 z-0"></div>

          <Card delay="delay-100" className="text-center relative z-10 p-6">
            <div className="w-8 h-8 bg-zinc-900 rounded-full flex items-center justify-center mx-auto mb-4 text-zinc-500 text-sm font-mono border border-zinc-800">
              1
            </div>
            <span className="text-base font-medium text-white">
              Grep Từ Khoá
            </span>
          </Card>
          <Card delay="delay-200" className="text-center relative z-10 p-6">
            <div className="w-8 h-8 bg-zinc-900 rounded-full flex items-center justify-center mx-auto mb-4 text-zinc-500 text-sm font-mono border border-zinc-800">
              2
            </div>
            <span className="text-base font-medium text-white">
              Liệt Kê File
            </span>
          </Card>
          <Card delay="delay-300" className="text-center relative z-10 p-6">
            <div className="w-8 h-8 bg-zinc-900 rounded-full flex items-center justify-center mx-auto mb-4 text-zinc-500 text-sm font-mono border border-zinc-800">
              3
            </div>
            <span className="text-base font-medium text-white">Đọc Cục Bộ</span>
          </Card>
          <Card
            delay="delay-400"
            className="text-center relative z-10 p-6 bg-rose-500/[0.02] border border-rose-500/20 shadow-[inset_0_0_0_1px_rgba(244,63,94,0.1)]"
          >
            <div className="w-8 h-8 bg-rose-500/10 text-rose-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <AlertTriangle className="w-4 h-4" />
            </div>
            <span className="text-base text-rose-400 font-bold uppercase">
              Suy Đoán
            </span>
          </Card>
        </div>

        <div className="flex flex-col md:flex-row gap-6 text-base md:text-lg font-light">
          <div className="flex-1 flex items-center p-4 bg-white/[0.02] rounded-xl text-zinc-300 border border-white/5">
            <CheckCircle2 className="w-5 h-5 text-zinc-500 mr-3" /> Project nhỏ:
            Suy đoán thường mang lại kết quả đúng.
          </div>
          <div className="flex-1 flex items-center p-4 bg-rose-500/[0.02] rounded-xl text-rose-300 border border-rose-500/10">
            <XCircle className="w-5 h-5 text-rose-500 mr-3" /> Project lớn: Gia
            tăng rủi ro sai lệch do thiếu Context.
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
        <div className="mb-8">
          <p className="text-lg md:text-xl text-white font-light flex flex-col md:flex-row md:items-center gap-3 bg-white/[0.05] p-5 rounded-xl border border-white/10">
            <span className="flex items-center text-rose-400 font-bold">
              <Brain className="w-5 h-5 mr-2" /> Câu hỏi cho AI:
            </span>
            <span>
              "Sửa hàm{" "}
              <span className="font-mono text-rose-300 bg-rose-500/10 px-2 py-0.5 rounded">
                downloadPdfReport
              </span>{" "}
              thì ảnh hưởng gì?"
            </span>
          </p>
        </div>

        <div className="bg-[#050505] border border-white/10 rounded-2xl p-6 font-mono text-sm md:text-base mb-8 shadow-2xl relative">
          <div className="flex items-center gap-2 mb-4 pb-4 border-b border-white/5">
            <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
            <div className="ml-4 text-xs font-sans text-zinc-500 tracking-widest uppercase">
              Terminal (AI đang tìm từ khoá)
            </div>
          </div>

          <div className="text-cyan-400 mb-4 flex items-center">
            <ChevronRight className="w-4 h-4 mr-2 text-zinc-500 flex-shrink-0" />
            <span>grep -r "downloadPdfReport" ./src</span>
          </div>

          <div className="text-zinc-400 space-y-2 pl-6 overflow-x-auto">
            <p>app/Layout/Common/report.js</p>
            <p>app/Layout/Reports/EditReport/PDFReportTab/index.js</p>
            <p>app/Layout/Events/EventDetails/EventReportTab/index.js</p>
            <p>app/Pages/Reports/editReport/editReport.js</p>
            <p>app/Apollo/Mutations/downloadPdfReport.js</p>
            <p>app/Apollo/Functions/handleDownloadPdfReport.js</p>
          </div>
        </div>

        <Card
          isWarning={true}
          className="p-6 md:p-8 flex flex-col md:flex-row items-start gap-5"
        >
          <AlertTriangle className="w-8 h-8 text-rose-500 flex-shrink-0 mt-1" />
          <div>
            <p className="text-lg md:text-xl text-zinc-300 font-light">
              Dựa trên 6 file đã (grep - search) bằng từ khoá, AI tự tin kết
              luận:
              <br />
              <span className="text-white text-xl md:text-2xl mt-3 block">
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <Card className="p-8">
            <SubHeading>Bề Nổi (Grep Text)</SubHeading>
            <SimpleList
              items={[
                "Chỉ liệt kê danh sách file chứa từ khoá.",
                "Logic bề mặt trông có vẻ độc lập và an toàn.",
                "Dẫn đến kết luận sai lầm.",
              ]}
            />
          </Card>

          <Card isWarning={true} className="p-8">
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

        <StatementBlock isWarning={true}>
          Tìm thấy Keyword{" "}
          <span className="text-rose-400 font-bold mx-2 uppercase">
            Không đồng nghĩa
          </span>{" "}
          với việc thấu hiểu toàn bộ Impact.
        </StatementBlock>
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <Card className="p-8">
            <SubHeading>Những gì AI nhìn thấy</SubHeading>
            <SimpleList
              items={[
                "Các khối mã nguồn rời rạc, thiếu sự liên kết.",
                "Đoạn mã bị thiếu giới hạn (Context window).",
                "Tên hàm, tên biến được hiểu dưới dạng chuỗi Text đơn thuần.",
              ]}
            />
          </Card>

          <Card isWarning={true} className="p-8">
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
          <span className="text-xl md:text-2xl font-light text-zinc-300 tracking-tight block bg-white/[0.02] py-5 px-8 rounded-2xl border border-white/5 inline-block">
            Khả năng đọc mã nguồn{" "}
            <span className="text-rose-500 font-bold mx-3 uppercase tracking-widest text-lg md:text-xl">
              Hoàn toàn khác với
            </span>{" "}
            năng lực hiểu Hệ thống.
          </span>
        </div>
      </div>
    ),
  },
  // 7. THE CORE
  {
    section: "THE CORE",
    type: "problem",
    title: "Bản chất của việc hiểu System",
    content: () => (
      <div className="max-w-6xl">
        <p className="text-lg md:text-xl text-zinc-400 mb-8 font-light">
          Để thấu hiểu toàn diện một codebase, AI cần phải có được các phần sau:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <Card
            delay="delay-100"
            className="flex flex-col items-center text-center p-8"
          >
            <Box className="w-10 h-10 text-zinc-500 mb-5" />
            <h4 className="text-xl font-bold text-white tracking-tight mb-3">
              Structure
            </h4>
            <p className="text-sm md:text-base text-zinc-500 font-light">
              Kiến trúc phân tầng và thư mục của toàn bộ dự án.
            </p>
          </Card>
          <Card
            delay="delay-200"
            className="flex flex-col items-center text-center p-8"
          >
            <Share2 className="w-10 h-10 text-zinc-500 mb-5" />
            <h4 className="text-xl font-bold text-white tracking-tight mb-3">
              Relationship
            </h4>
            <p className="text-sm md:text-base text-zinc-500 font-light">
              Sự ràng buộc và phụ thuộc trực tiếp giữa các module.
            </p>
          </Card>
          <Card
            delay="delay-300"
            className="flex flex-col items-center text-center p-8"
          >
            <Workflow className="w-10 h-10 text-zinc-500 mb-5" />
            <h4 className="text-xl font-bold text-white tracking-tight mb-3">
              Flow
            </h4>
            <p className="text-sm md:text-base text-zinc-500 font-light">
              Luồng thực thi logic trải dài qua nhiều thành phần.
            </p>
          </Card>
        </div>

        <div className="text-center bg-rose-500/[0.02] border border-rose-500/10 p-6 rounded-2xl animate-in fade-in duration-700 delay-500">
          <p className="text-lg md:text-xl text-zinc-300 font-light">
            Thực trạng: AI thông thường{" "}
            <span className="text-rose-400 font-medium uppercase tracking-widest mx-2">
              Thường Xuyên Thiếu Hụt
            </span>{" "}
            các luồng dữ liệu hệ thống này.
          </p>
        </div>
      </div>
    ),
  },
  // 8. DOCS
  {
    section: "DOCUMENTATION",
    type: "problem",
    title: "Giới hạn của tài liệu",
    content: () => (
      <div className="max-w-5xl">
        <p className="text-lg md:text-xl text-zinc-400 mb-8 font-light">
          Nhiều team dùng Tài liệu để cấp context cho AI, nhưng gặp 3 nhược
          điểm:
        </p>

        <Card isWarning={true} className="mb-10 p-8">
          <SimpleList
            type="warning"
            items={[
              "Không phản ánh được Execution Flow tại thời gian chạy thực tế.",
              "Dễ rơi vào tình trạng lỗi thời (outdated) do codebase thay đổi liên tục.",
              "Thiếu cấu trúc dữ liệu tiêu chuẩn để máy móc tự động hóa việc Trace Impact.",
            ]}
          />
        </Card>

        <div className="p-6 md:p-8 border border-white/5 bg-white/[0.02] rounded-2xl text-center shadow-[inset_0_0_0_1px_rgba(255,255,255,0.02)]">
          <span className="text-xl md:text-2xl font-bold text-white tracking-tight block mb-2">
            Docs <span className="text-rose-500 mx-3">≠</span> Reality Structure
          </span>
          <span className="text-base text-zinc-500 font-light block">
            Tài liệu viết tay mang tính tham khảo, khó phản ánh chi tiết thực
            trạng của Source Code.
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
        <p className="text-lg md:text-xl text-zinc-400 mb-8 font-light">
          Giải pháp hướng tới là một nền tảng Data tự động cung cấp:
        </p>

        <div className="space-y-4 mb-10">
          <Card
            delay="delay-100"
            className="flex items-center gap-5 p-6 bg-cyan-500/[0.02] border border-cyan-500/10 shadow-[inset_0_0_0_1px_rgba(34,211,238,0.05)]"
          >
            <CheckCircle2 className="w-6 h-6 text-cyan-400 flex-shrink-0" />
            <span className="text-lg md:text-xl text-white font-light">
              Structure động được trích xuất trực tiếp từ{" "}
              <span className="font-semibold text-cyan-400">Code Thực Tế</span>.
            </span>
          </Card>
          <Card
            delay="delay-200"
            className="flex items-center gap-5 p-6 bg-cyan-500/[0.02] border border-cyan-500/10 shadow-[inset_0_0_0_1px_rgba(34,211,238,0.05)]"
          >
            <CheckCircle2 className="w-6 h-6 text-cyan-400 flex-shrink-0" />
            <span className="text-lg md:text-xl text-white font-light">
              Bản đồ Relationship{" "}
              <span className="font-semibold text-cyan-400">phản ánh </span> sự
              liên kết của Codebase.
            </span>
          </Card>
          <Card
            delay="delay-300"
            className="flex items-center gap-5 p-6 bg-cyan-500/[0.02] border border-cyan-500/10 shadow-[inset_0_0_0_1px_rgba(34,211,238,0.05)]"
          >
            <CheckCircle2 className="w-6 h-6 text-cyan-400 flex-shrink-0" />
            <span className="text-lg md:text-xl text-white font-light">
              Khả năng Trace (End-to-End) một cách{" "}
              <span className="font-semibold text-cyan-400">Tự Động Hóa</span>.
            </span>
          </Card>
        </div>

        <p className="text-xl md:text-2xl text-zinc-300 font-light text-center border-t border-white/10 pt-8">
          Đó chính là lượng{" "}
          <span className="text-cyan-400 font-bold tracking-widest uppercase mx-2">
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
    title: "Graph Database: Là giải pháp lý tưởng",
    content: () => (
      <div className="max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-around gap-8 p-8 bg-white/[0.02] border border-white/5 rounded-2xl mb-10">
          <div className="flex items-center gap-5">
            <div className="w-5 h-5 rounded-full bg-cyan-500 shadow-[0_0_20px_rgba(34,211,238,0.4)]"></div>
            <div>
              <span className="block text-lg md:text-xl text-white font-bold tracking-tight mb-1">
                Node
              </span>
              <span className="text-sm md:text-base text-zinc-500 font-light">
                Thực thể: Function / Module / Class
              </span>
            </div>
          </div>
          <div className="hidden md:block w-px h-12 bg-white/10"></div>
          <div className="flex items-center gap-5">
            <div className="w-12 h-1 bg-cyan-500 rounded-full shadow-[0_0_20px_rgba(34,211,238,0.4)]"></div>
            <div>
              <span className="block text-lg md:text-xl text-white font-bold tracking-tight mb-1">
                Edge
              </span>
              <span className="text-sm md:text-base text-zinc-500 font-light">
                Ràng buộc: Calls / Imports / Depends
              </span>
            </div>
          </div>
        </div>

        <p className="text-lg md:text-xl text-zinc-400 mb-6 font-light">
          Mô phỏng Codebase bằng Graph giúp trực quan hóa các bài toán:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="flex items-center justify-center gap-4 py-6">
            <Network className="w-6 h-6 text-cyan-400" />{" "}
            <span className="text-lg md:text-xl font-medium text-white tracking-tight">
              Trace Flow
            </span>
          </Card>
          <Card className="flex items-center justify-center gap-4 py-6">
            <Activity className="w-6 h-6 text-cyan-400" />{" "}
            <span className="text-lg md:text-xl font-medium text-white tracking-tight">
              Xem Impact
            </span>
          </Card>
          <Card className="flex items-center justify-center gap-4 py-6">
            <Brain className="w-6 h-6 text-cyan-400" />{" "}
            <span className="text-lg md:text-xl font-medium text-white tracking-tight">
              System Context
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
        <p className="text-lg md:text-xl text-zinc-400 mb-8 font-light">
          Khó khăn lớn nhất là việc phải tự xây dựng Graph:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <Card delay="delay-100" className="flex flex-col items-start p-6">
            <div className="w-8 h-8 rounded-lg bg-white/[0.03] flex items-center justify-center mb-4">
              <Cpu className="w-4 h-4 text-zinc-400" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">
              Parse toàn bộ Repo
            </h3>
            <p className="text-sm text-zinc-500 font-light">
              Đòi hỏi tool phân tích AST (Abstract Syntax Tree) đa ngôn ngữ
              tương đối phức tạp.
            </p>
          </Card>
          <Card delay="delay-200" className="flex flex-col items-start p-6">
            <div className="w-8 h-8 rounded-lg bg-white/[0.03] flex items-center justify-center mb-4">
              <Code className="w-4 h-4 text-zinc-400" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">
              Phân tích Logic ngầm
            </h3>
            <p className="text-sm text-zinc-500 font-light">
              Phân tích để bóc tách chính xác các liên kết, dependency ẩn giữa
              các component.
            </p>
          </Card>
          <Card delay="delay-300" className="flex flex-col items-start p-6">
            <div className="w-8 h-8 rounded-lg bg-white/[0.03] flex items-center justify-center mb-4">
              <Network className="w-4 h-4 text-zinc-400" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">
              Build Cấu trúc Data
            </h3>
            <p className="text-sm text-zinc-500 font-light">
              Chuyển đổi lượng lớn dữ liệu thô vào DB Graph định dạng
              Nodes/Edges chuẩn.
            </p>
          </Card>
          <Card
            delay="delay-400"
            className="flex flex-col items-start p-6"
            isWarning={true}
          >
            <div className="w-8 h-8 rounded-lg bg-rose-500/10 flex items-center justify-center mb-4">
              <AlertTriangle className="w-4 h-4 text-rose-500" />
            </div>
            <h3 className="text-lg font-bold text-rose-400 mb-2">
              Maintain Liên Tục
            </h3>
            <p className="text-sm text-zinc-500 font-light">
              Graph cần liên tục cập nhật theo tiến độ, thời gian và công sức bỏ
              ra đáng kể.
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
    title: "Rào cản từ ngôn ngữ truy vấn",
    content: () => (
      <div className="max-w-6xl">
        <p className="text-lg md:text-xl text-zinc-400 mb-8 font-light">
          Khi hệ thống hình thành, việc truy xuất dữ liệu Graph yêu cầu ngôn ngữ{" "}
          <span className="font-mono text-white bg-white/10 border border-white/20 px-2 py-1 rounded-md mx-1 font-bold">
            Cypher
          </span>
          :
        </p>

        <Card className="mb-8 p-8">
          <SimpleList
            type="warning"
            items={[
              "Learning curve khá cao, khác biệt nhiều so với SQL.",
              "Câu lệnh Query cho luồng Flow thường mang cấu trúc phức tạp.",
              "Gặp khó khăn trong quá trình Debug hoặc tinh chỉnh (Trace) kết quả.",
            ]}
          />
        </Card>

        <div className="p-6 border-l-4 border-rose-500 bg-rose-500/[0.02] rounded-r-2xl">
          <p className="text-lg md:text-xl text-rose-400 font-medium">
            Viết câu lệnh Cypher phức tạp để trace Impact sẽ mất nhiều thời gian
            và công sức của Developer.
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
        <p className="text-lg md:text-xl text-zinc-400 mb-10 font-light">
          Mô hình Graph{" "}
          <span className="text-white font-medium">
            là hướng tiếp cận đúng đắn
          </span>
          , tuy nhiên vấp phải 3 trở ngại lớn khi áp dụng thủ công:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card
            isWarning={true}
            className="text-center p-6 border-t-2 border-t-rose-500"
          >
            <h4 className="text-xl md:text-2xl font-bold text-white mb-2 tracking-tight">
              Build
            </h4>
            <span className="text-base text-rose-400 font-light block">
              Phải hiểu rõ cấu trúc hệ thống
            </span>
          </Card>
          <Card
            isWarning={true}
            className="text-center p-6 border-t-2 border-t-rose-500"
            delay="delay-100"
          >
            <h4 className="text-xl md:text-2xl font-bold text-white mb-2 tracking-tight">
              Maintain
            </h4>
            <span className="text-base text-rose-400 font-light block">
              Dữ liệu thay đổi → khó đồng bộ
            </span>
          </Card>
          <Card
            isWarning={true}
            className="text-center p-6 border-t-2 border-t-rose-500"
            delay="delay-200"
          >
            <h4 className="text-xl md:text-2xl font-bold text-white mb-2 tracking-tight">
              Query
            </h4>
            <span className="text-base text-rose-400 font-light block">
              Phải dùng Cypher → khó tiếp cận
            </span>
          </Card>
        </div>

        <p className="text-xl md:text-2xl text-zinc-300 font-light tracking-tight animate-in fade-in duration-700 delay-500 text-center">
          Tổng quan: Graph DB đúng về mặt lý thuyết nhưng{" "}
          <span className="text-rose-500 font-bold uppercase tracking-widest block mt-2">
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
          {/* Tiêu đề GitNexus bự và nổi bật hơn chút với Gradient */}
          <h2 className="text-6xl md:text-[7rem] font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 tracking-tighter leading-none mb-12">
            GITNEXUS
          </h2>

          {/* Căn list ra giữa, giữ nguyên style UI cũ nhưng câu chữ rõ sức mạnh hơn */}
          <div className="space-y-4 w-full max-w-3xl text-left">
            <div className="flex items-center text-lg md:text-xl font-medium text-white bg-white/[0.03] border border-white/10 p-6 rounded-xl shadow-[inset_0_0_0_1px_rgba(255,255,255,0.02)]">
              <CheckCircle2 className="w-6 h-6 text-cyan-500 mr-5 flex-shrink-0" />
              Cung cấp sẵn cấu trúc rõ ràng (Structure).
            </div>
            <div className="flex items-center text-lg md:text-xl font-medium text-white bg-white/[0.03] border border-white/10 p-6 rounded-xl shadow-[inset_0_0_0_1px_rgba(255,255,255,0.02)]">
              <CheckCircle2 className="w-6 h-6 text-cyan-500 mr-5 flex-shrink-0" />
              Tự động hiểu và nối kết ngữ cảnh (Relationship).
            </div>
            <div className="flex items-center text-lg md:text-xl font-medium text-white bg-white/[0.03] border border-white/10 p-6 rounded-xl shadow-[inset_0_0_0_1px_rgba(255,255,255,0.02)]">
              <CheckCircle2 className="w-6 h-6 text-cyan-500 mr-5 flex-shrink-0" />
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
    title: "Nguyên lý hoạt động của GitNexus",
    content: () => (
      <div className="max-w-6xl">
        <p className="text-lg md:text-xl text-zinc-300 mb-8 font-light tracking-tight">
          GitNexus đóng vai trò như một Graph Engine{" "}
          <span className="text-white font-medium uppercase border-b border-white/30 pb-1">
            Được Tự Động Hóa Toàn Diện
          </span>
          :
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <Card className="flex items-start gap-4 p-6">
              <Search className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
              <div>
                <h4 className="text-lg font-bold text-white mb-2">
                  Quét Codebase
                </h4>
                <p className="text-zinc-500 font-light text-sm md:text-base">
                  Thiết lập luồng tự động quét định kỳ thư mục Repository.
                </p>
              </div>
            </Card>
            <Card className="flex items-start gap-4 p-6">
              <Activity className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
              <div>
                <h4 className="text-lg font-bold text-white mb-2">
                  Phân Tích Cú Pháp (AST)
                </h4>
                <p className="text-zinc-500 font-light text-sm md:text-base">
                  Mổ xẻ cấu trúc chuyên sâu của file logic ở tầng syntax.
                </p>
              </div>
            </Card>
            <Card className="flex items-start gap-4 p-6">
              <Network className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
              <div>
                <h4 className="text-lg font-bold text-white mb-2">
                  Dựng Bản Đồ Hệ Thống
                </h4>
                <p className="text-zinc-500 font-light text-sm md:text-base">
                  Trích xuất tự động Nodes & Edges thành CSDL Graph ngầm.
                </p>
              </div>
            </Card>
          </div>

          <Card className="h-full flex flex-col justify-center border-cyan-500/30 bg-cyan-500/[0.02] p-8">
            <SubHeading color="cyan">
              Trở thành nguồn dữ liệu đáng tin cậy
            </SubHeading>
            <div className="flex flex-col gap-5 text-base md:text-lg text-white font-light border-l border-cyan-500/20 pl-5">
              <span className="flex items-center">
                <ChevronRight className="w-5 h-5 mr-3 text-cyan-500 opacity-50" />{" "}
                Lưu vết chi tiết các hàm được trigger từ vị trí nào.
              </span>
              <span className="flex items-center">
                <ChevronRight className="w-5 h-5 mr-3 text-cyan-500 opacity-50" />{" "}
                Thống kê rõ ràng mạng lưới Dependency.
              </span>
              <span className="flex items-center">
                <ChevronRight className="w-5 h-5 mr-3 text-cyan-500 opacity-50" />{" "}
                Mô hình hóa Flow chạy thực tế toàn hệ thống.
              </span>
            </div>
          </Card>
        </div>
      </div>
    ),
  },
  // 16. GITNEXUS OUTPUT
  {
    section: "GITNEXUS OUTPUT",
    type: "solution",
    title: "Cấu trúc dữ liệu đầu ra",
    content: () => (
      <div className="max-w-6xl">
        <p className="text-lg md:text-xl text-zinc-400 mb-8 font-light">
          Bản đồ hệ thống tự động sinh ra bám sát 2 yếu tố cốt lõi của Graph DB:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="py-8">
            <SubHeading>1. Nodes (Thực Thể)</SubHeading>
            <div className="space-y-5 text-lg text-zinc-300 font-mono font-light pl-6 border-l border-zinc-800">
              <div className="flex items-center">
                <span className="text-zinc-600 mr-4 font-bold">/</span>{" "}
                Node_Function
              </div>
              <div className="flex items-center">
                <span className="text-zinc-600 mr-4 font-bold">/</span>{" "}
                Node_Service
              </div>
              <div className="flex items-center">
                <span className="text-zinc-600 mr-4 font-bold">/</span>{" "}
                Node_Component
              </div>
            </div>
          </Card>

          <Card className="py-8 bg-cyan-500/[0.02] border border-cyan-500/10">
            <SubHeading color="cyan">2. Edges (Ràng Buộc Trực Tiếp)</SubHeading>
            <div className="space-y-5 text-lg text-white font-mono font-light pl-6 border-l border-cyan-500/30">
              <div className="flex items-center">
                <span className="text-cyan-500 mr-4">→</span> Edge_Calls
              </div>
              <div className="flex items-center">
                <span className="text-cyan-500 mr-4">→</span> Edge_Imports
              </div>
              <div className="flex items-center">
                <span className="text-cyan-500 mr-4">→</span> Edge_DependsOn
              </div>
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
    title: "Cung cấp Context chuẩn cho AI",
    content: () => (
      <div className="max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="p-8">
            <SubHeading>Hiện Tại (Không GitNexus)</SubHeading>
            <div className="space-y-4">
              <div className="p-4 bg-white/[0.02] border border-white/5 rounded-xl text-base text-zinc-400 font-light flex items-center">
                <AlertTriangle className="w-5 h-5 mr-3 text-zinc-600 flex-shrink-0" />{" "}
                AI đối mặt với giới hạn Ngữ cảnh.
              </div>
              <div className="p-4 bg-white/[0.02] border border-white/5 rounded-xl text-base text-zinc-400 font-light flex items-center">
                <AlertTriangle className="w-5 h-5 mr-3 text-zinc-600 flex-shrink-0" />{" "}
                Phụ thuộc vào trí nhớ tạm hoặc phỏng đoán.
              </div>
              <div className="p-4 bg-white/[0.02] border border-white/5 rounded-xl text-base text-zinc-400 font-light flex items-center">
                <AlertTriangle className="w-5 h-5 mr-3 text-zinc-600 flex-shrink-0" />{" "}
                Dễ gây rủi ro khi thay đổi các tính năng hiện có.
              </div>
            </div>
          </Card>

          <Card className="bg-cyan-500/[0.02] border border-cyan-500/10 p-8">
            <SubHeading color="cyan">Với GitNexus</SubHeading>
            <div className="space-y-4">
              <div className="p-4 bg-cyan-500/[0.05] border border-cyan-500/20 rounded-xl text-base text-white font-medium flex items-center shadow-[inset_0_0_0_1px_rgba(34,211,238,0.1)]">
                <CheckCircle2 className="w-5 h-5 mr-3 text-cyan-400 flex-shrink-0" />{" "}
                Chuyển hóa Codebase thô thành System Map.
              </div>
              <div className="p-4 bg-cyan-500/[0.05] border border-cyan-500/20 rounded-xl text-base text-white font-medium flex items-center shadow-[inset_0_0_0_1px_rgba(34,211,238,0.1)]">
                <CheckCircle2 className="w-5 h-5 mr-3 text-cyan-400 flex-shrink-0" />{" "}
                Cung cấp nguồn dữ liệu đúng cho AI.
              </div>
              <div className="p-4 bg-cyan-500/[0.05] border border-cyan-500/20 rounded-xl text-base text-white font-medium flex items-center shadow-[inset_0_0_0_1px_rgba(34,211,238,0.1)]">
                <CheckCircle2 className="w-5 h-5 mr-3 text-cyan-400 flex-shrink-0" />{" "}
                Kết quả: Có độ tin cậy cao, sát thực tế.
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
        <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-6 mb-6">
          <div className="flex flex-col md:flex-row items-center gap-5">
            <span className="text-sm font-bold text-zinc-500 tracking-[0.2em] uppercase w-28 flex-shrink-0">
              Trước Kia:
            </span>
            <div className="flex items-center flex-wrap gap-3 text-base text-zinc-400 font-light">
              <span className="bg-[#0a0a0a] px-4 py-2 rounded-lg border border-white/10">
                Tìm theo keyword / grep
              </span>
              <ArrowRight className="text-zinc-600 w-4 h-4" />
              <span className="bg-[#0a0a0a] px-4 py-2 rounded-lg border border-white/10">
                Kết quả là các file rời rạc
              </span>
              <ArrowRight className="text-zinc-600 w-4 h-4" />
              <span className="text-white">AI phải tự suy luận flow</span>
            </div>
          </div>
        </div>

        <div className="bg-cyan-500/[0.05] border border-cyan-500/20 rounded-2xl p-6 mb-10 shadow-[inset_0_0_0_1px_rgba(34,211,238,0.1)]">
          <div className="flex flex-col md:flex-row items-center gap-5">
            <span className="text-sm font-bold text-cyan-500 tracking-[0.2em] uppercase w-28 flex-shrink-0">
              GitNexus:
            </span>
            <div className="flex items-center text-xl font-bold text-white tracking-tight">
              Dựa vào bản đồ trực quan, giúp AI có thể trace một cách chính xác
              và nhanh chóng.
            </div>
          </div>
        </div>

        <SubHeading>Hỗ trợ giảm thiểu đáng kể:</SubHeading>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <Card className="py-5 px-5 flex items-center justify-center text-center">
            <span className="text-base text-rose-300 font-light flex flex-col items-center gap-2">
              <XCircle className="w-6 h-6 text-rose-500 opacity-50" /> Cảm tính
              khi Review
            </span>
          </Card>
          <Card className="py-5 px-5 flex items-center justify-center text-center">
            <span className="text-base text-rose-300 font-light flex flex-col items-center gap-2">
              <XCircle className="w-6 h-6 text-rose-500 opacity-50" /> Bỏ sót
              dependency ẩn
            </span>
          </Card>
          <Card className="py-5 px-5 flex items-center justify-center text-center">
            <span className="text-base text-rose-300 font-light flex flex-col items-center gap-2">
              <XCircle className="w-6 h-6 text-rose-500 opacity-50" /> Phụ thuộc
              vào trí nhớ
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
        <p className="text-lg md:text-xl text-zinc-400 mb-8 font-light">
          Không cần Cypher Query phức tạp. Dev trực tiếp hỏi các AI (Copilot,
          Cursor, Claude):
        </p>

        <Card className="mb-8 p-8 bg-white/[0.02] border-l-4 border-l-cyan-500">
          <div className="font-mono text-lg md:text-xl text-cyan-100 space-y-5">
            <p className="flex items-center">
              <ChevronRight className="w-5 h-5 mr-4 text-cyan-500 flex-shrink-0" />{" "}
              "Phân tích xem hàm DownloadReport() được trigger từ những màn hình
              nào?"
            </p>
            <p className="flex items-center">
              <ChevronRight className="w-5 h-5 mr-4 text-cyan-500 flex-shrink-0" />{" "}
              "Thay đổi thuộc tính pdfUrl có thể tác động rủi ro đến module
              nào?"
            </p>
            <p className="flex items-center">
              <ChevronRight className="w-5 h-5 mr-4 text-cyan-500 flex-shrink-0" />{" "}
              "Trích xuất tài liệu mô tả luồng DownloadReport từ Flow hiện tại."
            </p>
          </div>
        </Card>

        <StatementBlock>
          <span className="text-2xl font-semibold tracking-tight text-white leading-snug">
            GitNexus cung cấp context đáng tin cậy cho AI phân tích trả lời.
          </span>
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
      <div className="max-w-5xl mx-auto space-y-10 font-sans antialiased text-zinc-300">
        {/* 01. CORE WORKFLOW */}
        <div className="space-y-2">
          <h3 className="text-[11px] font-bold tracking-[0.2em] text-zinc-500 uppercase flex items-center gap-3">
            <span className="text-zinc-700">01 —</span> Luồng triển khai hệ
            thống
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                step: "Bước 1",
                cmd: "npm install -g gitnexus",
                title: "Cài đặt hệ thống SDK",
              },
              {
                step: "Bước 3",
                cmd: "gitnexus analyze",
                title: "Phân tích mã nguồn",
              },
              {
                step: "Bước 2",
                cmd: "gitnexus serve",
                title: "kết nối Web UI qua chế độ bridge",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="relative bg-zinc-950 border border-zinc-800 p-6 rounded-xl overflow-hidden hover:border-zinc-700 transition-colors"
              >
                <div className="absolute -right-4 -top-4 text-4xl font-black text-zinc-900/50 select-none italic">
                  {i + 1}
                </div>
                <div className="bg-zinc-900/50 border border-zinc-800 px-3 py-2 rounded-md font-mono text-[13px] text-cyan-400 mb-3 flex items-center gap-2">
                  <span className="text-zinc-600 select-none">$</span>{" "}
                  {item.cmd}
                </div>

                <h4 className="text-sm font-medium text-zinc-400">
                  {item.title}
                </h4>
              </div>
            ))}
          </div>
        </div>

        {/* 02. UTILITY TOOLKIT */}
        <div className="space-y-2">
          <h3 className="text-[11px] font-bold tracking-[0.2em] text-zinc-500 uppercase flex items-center gap-3">
            <span className="text-zinc-700">02 —</span> Tiện ích quản trị
          </h3>
          <div className="bg-zinc-950 border border-zinc-800 p-6 rounded-xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { cmd: "gitnexus list", title: "Xem danh sách repo đã index" },
                { cmd: "gitnexus status", title: "Check status" },
                { cmd: "gitnexus wiki", title: "Tạo wiki tự động" },
                { cmd: "gitnexus clean (--all)", title: "Clean index repo" },
              ].map((item, i) => (
                <div key={i} className="flex flex-col">
                  <div className="bg-zinc-900/50 border border-zinc-800 px-3 py-2 rounded-md font-mono text-[13px] text-cyan-400 mb-3 flex items-center gap-2">
                    <span className="text-zinc-600 select-none">$</span>{" "}
                    {item.cmd}
                  </div>
                  <h4 className="text-sm font-medium text-zinc-400">
                    {item.title}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 03. SYSTEM INFO */}
        <div className="space-y-2">
          <h3 className="text-[11px] font-bold tracking-[0.2em] text-zinc-500 uppercase flex items-center gap-3">
            <span className="text-zinc-700">03 —</span> Thông số vận hành
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-zinc-950 border border-zinc-800 rounded-xl overflow-hidden">
              <div className="bg-zinc-900/30 px-4 py-3 border-b border-zinc-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <LayoutDashboard className="w-4 h-4 text-zinc-500" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                    Dashboard Console
                  </span>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex justify-between items-end border-b border-zinc-900 pb-3">
                  <span className="text-[11px] text-zinc-500 uppercase font-medium">
                    Web UI (Local)
                  </span>
                  <span className="text-sm font-mono text-white tracking-tight">
                    localhost:3000
                  </span>
                </div>
                <div className="flex justify-between items-end border-b border-zinc-900 pb-3">
                  <span className="text-[11px] text-zinc-500 uppercase font-medium">
                    Web UI (Cloud)
                  </span>
                  <span className="text-sm font-mono text-cyan-500 hover:text-cyan-400 transition-colors">
                    <a
                      href="https://gitnexus.vercel.app"
                      target="_blank"
                      rel="noreferrer"
                    >
                      gitnexus.vercel.app
                    </a>
                  </span>
                </div>
                <div className="flex justify-between items-end">
                  <span className="text-[11px] text-zinc-500 uppercase font-medium">
                    Engine xử lý
                  </span>
                  <span className="text-[10px] px-2 py-1 bg-cyan-500/10 rounded text-cyan-400 border border-cyan-500/20 font-bold">
                    GRAPH & SEMANTIC AI
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-zinc-950 border border-zinc-800 rounded-xl overflow-hidden">
              <div className="bg-zinc-900/30 px-4 py-3 border-b border-zinc-800 flex items-center">
                <div className="flex items-center gap-2">
                  <Database className="w-4 h-4 text-zinc-500" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                    Persistence Layer
                  </span>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex justify-between items-end border-b border-zinc-900 pb-3">
                  <span className="text-[11px] text-zinc-500 uppercase font-medium">
                    Thư mục lưu trữ
                  </span>
                  <span className="text-sm font-mono text-white tracking-tight">
                    your-repo/.gitnexus/
                  </span>
                </div>
                <div className="flex justify-between items-end border-b border-zinc-900 pb-3">
                  <span className="text-[11px] text-zinc-500 uppercase font-medium">
                    Quản lý registry
                  </span>
                  <span className="text-sm font-mono text-white tracking-tight">
                    .global/.gitnexus/registry.json
                  </span>
                </div>
                <div className="flex justify-between items-end">
                  <span className="text-[11px] text-zinc-500 uppercase font-medium">
                    Môi trường hoạt động
                  </span>
                  <span className="text-[10px] font-black text-emerald-500 uppercase tracking-wider flex items-center gap-1.5">
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
      <div className="max-w-6xl mx-auto space-y-8 font-sans antialiased text-zinc-300">
        {/* TOP: 1 + 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* 01. FLOW */}
          <div className="space-y-3 h-full flex flex-col">
            <h3 className="text-[11px] font-bold tracking-[0.2em] text-zinc-500 uppercase flex items-center gap-3">
              <span className="text-zinc-700">01 —</span> Luồng cơ bản
            </h3>

            <div className="space-y-3 flex-1">
              {[
                {
                  cmd: "gitnexus group create <name>",
                  title: "Tạo group hệ thống",
                },
                {
                  cmd: "gitnexus group add <group> <repo>",
                  title: "Thêm repo vào group",
                },
                {
                  cmd: "gitnexus group sync <group>",
                  title: "Đồng bộ context cross-repo",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-zinc-950 border border-zinc-800 rounded-xl p-4 hover:border-zinc-700 transition-colors"
                >
                  <div className="bg-zinc-900/60 border border-zinc-800 px-3 py-2 rounded-md font-mono text-[13px] text-cyan-400 mb-3 flex items-center gap-2 overflow-x-auto">
                    <span className="text-zinc-600">$</span>
                    {item.cmd}
                  </div>
                  <div className="text-sm text-zinc-300">{item.title}</div>
                </div>
              ))}
            </div>
          </div>

          {/* 02. EXAMPLE */}
          <div className="space-y-3 h-full flex flex-col">
            <h3 className="text-[11px] font-bold tracking-[0.2em] text-zinc-500 uppercase flex items-center gap-3">
              <span className="text-zinc-700">02 —</span> Ví dụ cấu trúc
            </h3>

            {/* KEY FIX: flex-1 + justify-center */}
            <div className="flex-1 bg-zinc-900/40 border border-zinc-800 rounded-lg p-6 font-mono text-[13px] leading-7 text-zinc-300 flex flex-col justify-center">
              <div className="text-cyan-400 mb-3">byct-system</div>

              <div className="pl-4 text-zinc-400">
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

        {/* BOTTOM: 03 VALUE */}
        <div className="space-y-3">
          <h3 className="text-[11px] font-bold tracking-[0.2em] text-zinc-500 uppercase flex items-center gap-3">
            <span className="text-zinc-700">03 —</span> Giá trị mang lại
          </h3>

          <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {[
                "Gom nhiều repo vào cùng một context hệ thống",
                "Hỗ trợ query flow xuyên repo rõ ràng hơn",
                "Dễ mở rộng từ frontend sang backend",
                "Phù hợp để đồng bộ shared graph cho team",
              ].map((text, i) => (
                <div
                  key={i}
                  className="text-base text-zinc-300 font-light flex items-start"
                >
                  <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full mr-3 mt-2"></span>
                  {text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    ),
  },
  // 21. SCALE
  {
    section: "SCALE",
    type: "solution",
    title: "Shared System Context cho Team",
    content: () => (
      <div className="max-w-6xl mx-auto space-y-8">
        {/* PROBLEM */}
        <div className="text-lg text-zinc-400 font-light text-center">
          System lớn, nhiều repo, nhiều service →
          <span className="text-white">
            {" "}
            không thể mỗi người tự analyze lại từ đầu
          </span>
        </div>

        {/* FLOW */}
        <Card className="p-6 bg-zinc-950 border border-zinc-800">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="flex-1 text-center p-5 rounded-xl bg-zinc-900/40 border border-zinc-800">
              <div className="text-white font-semibold mb-1">GitNexus</div>
              <div className="text-xs text-zinc-500">
                Analyze multi-repo → build system graph
              </div>
            </div>

            <ArrowRight className="text-zinc-600 w-5 h-5" />

            <div className="flex-1 text-center p-5 rounded-xl bg-cyan-500/[0.05] border border-cyan-500/20">
              <div className="text-cyan-400 font-semibold mb-1">FalkorDB</div>
              <div className="text-xs text-cyan-500/70">
                Lưu graph tập trung (shared context)
              </div>
            </div>

            <ArrowRight className="text-zinc-600 w-5 h-5" />

            <div className="flex-1 text-center p-5 rounded-xl bg-zinc-900/40 border border-zinc-800">
              <div className="text-white font-semibold mb-1">AI / Dev</div>
              <div className="text-xs text-zinc-500">
                Query cùng 1 system view
              </div>
            </div>
          </div>
        </Card>

        {/* BENEFITS */}
        <Card className="p-6 bg-zinc-950 border border-zinc-800">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-zinc-300">
            <div>• Không cần analyze thủ công lặp lại</div>
            <div>• Một source of truth cho toàn team</div>
            <div>• AI và dev dùng chung context</div>
            <div>• Giảm lệch hiểu system giữa các member</div>
          </div>
        </Card>

        {/* COMPARISON */}
        <Card className="p-6 bg-zinc-950 border border-zinc-800">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
            {/* LADYBUG */}
            <div className="space-y-3">
              <div className="text-white font-semibold">Ladybug</div>
              <div className="text-zinc-400 space-y-2">
                <div>• Dùng local (dev cá nhân)</div>
                <div>• Explore / debug graph</div>
                <div>• Model schema trực quan</div>
                <div>• Không cần infra</div>
                <div className="text-red-400">• Không phù hợp shared team</div>
              </div>
            </div>

            {/* FALKORDB */}
            <div className="space-y-3">
              <div className="text-cyan-400 font-semibold">FalkorDB</div>
              <div className="text-zinc-400 space-y-2">
                <div>• Graph DB chạy server</div>
                <div>• Query nhanh, scale lớn</div>
                <div>• Multi-user / multi-AI</div>
                <div>• Centralized system context</div>
                <div className="text-cyan-400">• Phù hợp team & production</div>
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
        <div className="mb-10 border-l-4 border-cyan-500 bg-cyan-500/[0.02] p-5 rounded-r-xl">
          <p className="text-xl text-zinc-300 font-light">
            Nhắc lại ví dụ: Chỉnh sửa hàm{" "}
            <span className="text-white font-mono font-medium mx-2 tracking-tight">
              downloadPdfReport
            </span>{" "}
            mang tới ảnh hưởng gì?
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="border border-rose-500/10 p-8">
            <SubHeading color="zinc">Tìm kiếm (Grep Text)</SubHeading>
            <SimpleList
              type="warning"
              items={[
                "Trả về các file chứa từ khóa một cách máy móc.",
                "Không đánh giá được mức độ ưu tiên hoặc trình tự gọi (Call-stack).",
              ]}
            />
          </Card>
          <Card className="bg-cyan-500/[0.05] border border-cyan-500/20 shadow-[inset_0_0_0_1px_rgba(34,211,238,0.1)] p-8">
            <SubHeading color="cyan">Sử dụng GitNexus + AI</SubHeading>
            <SimpleList
              type="primary"
              items={[
                "AI dùng data từ Graph để truy ra trình tự thực thi logic.",
                "Vẽ bản đồ: Ai kích hoạt hàm → Luồng Data đi về đâu → Tác động tới Service nào.",
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
        <div className="flex flex-col gap-6">
          {/* LEVEL COMPARISON */}
          <div className="flex flex-col gap-6 mt-2">
            <Card className="flex flex-col md:flex-row items-center gap-8 p-8 bg-white/[0.02]">
              <div className="w-16 h-16 bg-zinc-900 rounded-2xl flex items-center justify-center flex-shrink-0">
                <Search className="w-8 h-8 text-zinc-600" />
              </div>
              <div>
                <span className="text-xs text-zinc-500 font-bold tracking-[0.2em] uppercase block mb-2">
                  Cách cũ
                </span>
                <span className="text-2xl text-zinc-400 font-light leading-tight block">
                  Làm việc với code như text rời rạc
                </span>
                <span className="text-sm text-zinc-500 mt-2 block">
                  → Phải tự đọc, tự nối logic, dễ sai sót
                </span>
              </div>
            </Card>

            <Card className="flex flex-col md:flex-row items-center gap-8 p-8 bg-cyan-500/[0.05] border border-cyan-500/20">
              <div className="w-16 h-16 bg-cyan-500/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                <Brain className="w-8 h-8 text-cyan-400" />
              </div>
              <div>
                <span className="text-xs text-cyan-500 font-bold tracking-[0.2em] uppercase block mb-2">
                  Với GitNexus
                </span>
                <span className="text-2xl text-white leading-tight block">
                  Hiểu hệ thống như một bản đồ hoàn chỉnh
                </span>
                <span className="text-sm text-cyan-400 mt-2 block">
                  → Thấy rõ flow, dependency, impact ngay lập tức
                </span>
              </div>
            </Card>
          </div>

          {/* WORKFLOW */}
          <div className="mt-4">
            <Card className="p-8 flex flex-col gap-6">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                <span className="font-bold text-zinc-500 tracking-[0.2em] uppercase w-44">
                  Trước kia
                </span>
                <div className="flex items-center flex-wrap gap-4 text-lg text-zinc-400">
                  <span>User hỏi</span>
                  <ArrowRight className="w-4 h-4" />
                  <span>AI</span>
                  <ArrowRight className="w-4 h-4" />
                  <span className="text-rose-400 bg-rose-500/[0.05] border border-rose-500/20 px-3 py-1 rounded-lg">
                    Suy đoán
                  </span>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                <span className="font-bold text-cyan-500 tracking-[0.2em] uppercase w-44">
                  Bây giờ
                </span>
                <div className="flex items-center flex-wrap gap-4 text-lg text-white">
                  <span>User hỏi</span>
                  <ArrowRight className="w-4 h-4" />
                  <span className="bg-cyan-500/[0.1] px-4 py-1.5 rounded-xl border border-cyan-500/30">
                    AI + GitNexus
                  </span>
                  <ArrowRight className="w-4 h-4" />
                  <span className="text-cyan-400">
                    Trả lời dựa trên hệ thống thật
                  </span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    ),
  },
  // 27. COMPARISON
  {
    section: "COMPARISON",
    type: "solution",
    title: "Vì sao nên chọn GitNexus?",
    content: () => (
      <div className="max-w-5xl">
        <div className="border-t border-white/10 pt-2">
          <div className="flex py-5 border-b border-white/5 items-center">
            <div className="w-1/3 text-sm md:text-base text-zinc-500 font-light">
              Cách AI trả lời
            </div>
            <div className="w-1/3 text-sm md:text-base text-zinc-500">
              Dựa trên suy đoán, có thể sai
            </div>
            <div className="w-1/3 text-base md:text-lg text-white font-medium">
              Dựa trên dữ liệu thật từ code
            </div>
          </div>

          <div className="flex py-5 border-b border-white/5 items-center">
            <div className="w-1/3 text-sm md:text-base text-zinc-500 font-light">
              Hiểu codebase
            </div>
            <div className="w-1/3 text-sm md:text-base text-zinc-500">
              Chỉ thấy từng phần nhỏ (do limit context)
            </div>
            <div className="w-1/3 text-base md:text-lg text-white font-medium">
              Hiểu toàn bộ hệ thống qua Graph
            </div>
          </div>

          <div className="flex py-5 border-b border-white/5 items-center">
            <div className="w-1/3 text-sm md:text-base text-zinc-500 font-light">
              Tìm ảnh hưởng khi sửa code
            </div>
            <div className="w-1/3 text-sm md:text-base text-zinc-500">
              Phải tự grep, dễ sót
            </div>
            <div className="w-1/3 text-base md:text-lg text-white font-medium">
              Hiển thị đầy đủ flow & dependency
            </div>
          </div>

          <div className="flex py-5 border-b border-white/5 items-center">
            <div className="w-1/3 text-sm md:text-base text-zinc-500 font-light">
              Chuẩn bị dữ liệu
            </div>
            <div className="w-1/3 text-sm md:text-base text-zinc-500">
              Phải tự build & maintain
            </div>
            <div className="w-1/3 text-base md:text-lg text-cyan-400 font-medium">
              Tự động build Graph từ code
            </div>
          </div>

          <div className="flex py-5 border-b border-white/5 items-center">
            <div className="w-1/3 text-sm md:text-base text-zinc-500 font-light">
              Truy vấn dữ liệu
            </div>
            <div className="w-1/3 text-sm md:text-base text-zinc-500">
              Cần biết Cypher / SQL
            </div>
            <div className="w-1/3 text-base md:text-lg text-cyan-400 font-medium">
              Chỉ cần hỏi bằng ngôn ngữ tự nhiên
            </div>
          </div>

          <div className="flex py-5 border-b border-white/5 items-center">
            <div className="w-1/3 text-sm md:text-base text-zinc-500 font-light">
              Độ chính xác
            </div>
            <div className="w-1/3 text-sm md:text-base text-zinc-500">
              Phụ thuộc kinh nghiệm dev
            </div>
            <div className="w-1/3 text-base md:text-lg text-white font-medium">
              Dựa trên quan hệ thực trong code
            </div>
          </div>

          <div className="flex py-5 border-b border-white/5 items-center">
            <div className="w-1/3 text-sm md:text-base text-zinc-500 font-light">
              Thời gian phân tích
            </div>
            <div className="w-1/3 text-sm md:text-base text-zinc-500">
              Mất nhiều thời gian đọc code
            </div>
            <div className="w-1/3 text-base md:text-lg text-white font-medium">
              Trả kết quả gần như ngay lập tức
            </div>
          </div>

          <div className="flex py-5 items-center">
            <div className="w-1/3 text-sm md:text-base text-zinc-500 font-light">
              Phù hợp với ai
            </div>
            <div className="w-1/3 text-sm md:text-base text-zinc-500">
              Chủ yếu dành cho dev nhiều kinh nghiệm
            </div>
            <div className="w-1/3 text-base md:text-lg text-cyan-400 font-medium">
              Ai cũng có thể sử dụng (QA, PM, Dev)
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    section: "SHOWTIME",
    type: "solution",
    title: "",
    content: () => (
      <div className="flex items-center justify-center h-full w-full py-20">
        <div className="text-center max-w-4xl">
          <div className="text-[11px] uppercase tracking-[0.3em] text-cyan-400 font-bold mb-5">
            Kiểm chứng thực tế
          </div>
          <h2 className="text-8xl md:text-7xl font-black text-white tracking-tighter">
            Live Demo
          </h2>
          <p className="mt-6 text-xl text-zinc-400 font-light max-w-3xl mx-auto leading-8">
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
        <p className="text-lg md:text-xl text-zinc-400 mb-6 font-light">
          Việc AI chưa hoạt động hiệu quả khi làm việc với Codebase quy mô xuất
          phát từ nguyên nhân cốt lõi:
        </p>

        <Card className="mb-10 py-6 flex justify-center bg-white/[0.02]">
          <div className="flex flex-wrap gap-6 text-xl md:text-2xl font-bold text-white tracking-tight">
            <span>Thiếu Structure</span>
            <span className="text-zinc-700 font-light">/</span>
            <span>Mù mờ Dependency</span>
            <span className="text-zinc-700 font-light">/</span>
            <span>Đứt gãy Flow</span>
          </div>
        </Card>

        <p className="text-xl md:text-2xl text-zinc-300 font-light leading-snug mb-12 text-center max-w-4xl mx-auto">
          AI không hề yếu.
          <br />
          <br />
          Rào cản thực sự là do chúng đang bị{" "}
          <span className="text-white font-bold tracking-tight uppercase border-b-2 border-cyan-500 pb-1">
            Thiếu Ngữ Cảnh
          </span>
        </p>

        <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500 text-center mt-12">
          <span className="text-5xl md:text-6xl font-black tracking-tighter text-white block mb-4">
            GITNEXUS
          </span>
          <span className="text-base md:text-lg text-cyan-400 font-medium tracking-[0.2em] uppercase block">
            Xây dựng context chuẩn từ codebase.
          </span>
          <span className="text-base md:text-lg text-cyan-400 font-medium tracking-[0.2em] uppercase block">
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
      <div className="flex items-center justify-center h-full w-full py-16">
        <div className="w-full max-w-5xl text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/20 bg-cyan-500/[0.06] mb-6">
            <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
            <span className="text-[11px] md:text-xs uppercase tracking-[0.28em] text-cyan-400 font-bold">
              Questions & Discussion
            </span>
          </div>

          <h2 className="text-5xl md:text-6xl font-black text-white tracking-tighter leading-none">
            Giải đáp thắc mắc
          </h2>

          <p className="mt-5 max-w-2xl mx-auto text-lg md:text-xl text-zinc-400 font-light leading-8">
            Nếu mọi người muốn, chúng ta có thể trao đổi thêm về kiến trúc, cách
            tích hợp MCP, hoặc các tình huống áp dụng GitNexus trong thực tế.
          </p>

          <div className="mt-10 mx-auto max-w-2xl rounded-[24px] border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.02] p-6">
            <div className="text-base md:text-lg text-white font-medium">
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
      className="min-h-screen bg-[#000000] text-zinc-200 font-sans overflow-hidden flex flex-col relative selection:bg-cyan-500/30 selection:text-white"
    >
      {/* Premium Dark Mode Background with Spotlight effect */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      </div>

      {/* Top Progress Bar - Ultra Thin */}
      <div className="h-[2px] w-full bg-transparent fixed top-0 z-50">
        <div
          className="h-full bg-cyan-500 transition-all duration-300 ease-out shadow-[0_0_15px_rgba(34,211,238,0.8)]"
          style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
        />
      </div>

      {/* Header - Minimalist */}
      <header className="px-10 py-10 flex justify-between items-center z-[60] w-full fixed top-0 mix-blend-difference pointer-events-auto">
        <button
          type="button"
          onClick={toggleFullscreen}
          className="text-xl font-bold tracking-tighter text-white flex items-center gap-3 pointer-events-auto"
          title={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
          aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
        >
          <Network className="w-5 h-5" /> Khám phá AI
        </button>
        <div className="text-sm font-bold text-zinc-500 tracking-widest font-mono bg-white/[0.05] px-4 py-1.5 rounded-full border border-white/10 backdrop-blur-md">
          {(currentSlide + 1).toString().padStart(2, "0")}{" "}
          <span className="text-zinc-700 mx-2">/</span> {slides.length}
        </div>
      </header>

      {/* Main Slide Area - Perfect Centering & Max Width Constraint */}
      <main className="flex-1 flex flex-col justify-center items-start w-full relative z-10 min-h-screen pt-24 pb-32">
        <div className="w-full max-w-[1200px] px-10 md:px-20 mx-auto">
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

      {/* Floating Controls Toolbar - Glass Pill */}
      <div className="fixed bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-2 z-50 bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/10 p-1.5 rounded-full shadow-[0_0_40px_rgba(0,0,0,0.8)]">
        {/* Previous Button */}
        <button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className={`p-3 rounded-full transition-all ${currentSlide === 0 ? "opacity-20 cursor-not-allowed text-zinc-600" : "text-zinc-400 hover:text-white hover:bg-white/10"}`}
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Menu Toggle */}
        <div className="relative">
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="flex items-center justify-center px-6 py-2 rounded-full text-zinc-400 hover:text-white hover:bg-white/10 transition-colors text-xs font-bold tracking-[0.2em] uppercase"
          >
            Index
          </button>

          {/* Slide Navigator Modal */}
          {showMenu && (
            <div className="absolute bottom-16 left-1/2 -translate-x-1/2 w-[420px] max-h-[50vh] overflow-y-auto bg-[#0a0a0a] border border-white/10 shadow-2xl p-2 custom-scrollbar z-50 rounded-2xl">
              {slides.map((s, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setCurrentSlide(idx);
                    setShowMenu(false);
                  }}
                  className={`w-full text-left px-5 py-3.5 text-sm transition-all flex items-center rounded-xl mb-1 group
                    ${
                      currentSlide === idx
                        ? "text-cyan-400 bg-cyan-500/10 font-bold border border-cyan-500/20"
                        : "text-zinc-400 hover:text-white hover:bg-white/5 font-light border border-transparent"
                    }`}
                >
                  <span className={`w-10 font-mono text-xs opacity-50`}>
                    {(idx + 1).toString().padStart(2, "0")}
                  </span>
                  <span className="truncate">{s.title || s.section}</span>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1}
          className={`p-3 rounded-full transition-all ${currentSlide === slides.length - 1 ? "opacity-20 cursor-not-allowed text-zinc-600" : "text-zinc-400 hover:text-white hover:bg-white/10"}`}
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: rgba(255,255,255,0.2); }
      `,
        }}
      />
    </div>
  );
}
