import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import {
  BookOpen,
  BookText,
  CalendarDays,
  ClipboardCheck,
  ClipboardList,
  FileText,
  GraduationCap,
  Home,
  LayoutDashboard,
  Menu,
  Settings,
  Shield,
  User,
} from "lucide-react";
import { motion, useMotionValue, useTransform } from "framer-motion";

import "../../src/styles.css";

/* =========================================================
   EXAMS
========================================================= */

export const exams = [
  "UPSSSC PET",
  "SSC GD",
  "SSC MTS",
  "Army GD",
  "Army Agniveer",
  "BSF Tradesman",
  "UP Police",
  "MP Police",
];

/* =========================================================
   MAIN LAYOUT
========================================================= */

export function Layout({
  children,
}: {
  children?: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  const nav = [
    ["/", "Home", Home],
    ["/exams", "Exams", LayoutDashboard],
    ["/syllabus/UPSSSC_PET", "Syllabus", FileText],
    ["/practice", "Practice MCQ", BookOpen],
    ["/mock-tests", "Mock Tests", ClipboardCheck],
    ["/performance", "Performance", LayoutDashboard],
    ["/profile", "Profile", User],
  ] as const;

  return (
    <div className="app-shell">
      {/* SIDEBAR */}
      <aside className={`sidebar ${open ? "open" : ""}`}>
        <div className="brand">
          <div className="brand-mark">A</div>

          <b>
            ANSHU<span>MOCK</span>
          </b>

          <button
            className="close"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
          >
            ×
          </button>
        </div>

        <div className="side-label">MAIN MENU</div>

        <nav>
          {nav.map(([to, label, Icon]) => (
            <Link
              to={to}
              key={label}
              onClick={() => setOpen(false)}
            >
              <Icon size={18} />
              {label}
            </Link>
          ))}
        </nav>
      </aside>

      {/* MAIN */}
      <main>
        <header>
          <button
            className="menu"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <Menu />
          </button>

          <div className="crumb">
            <span>Anshumock</span>
          </div>

          <div className="header-actions">
            <Link className="language-btn" to="/profile">
              हिंदी
            </Link>

            <div className="top-avatar">AK</div>
          </div>
        </header>

        {children || <Outlet />}

        <Footer />
      </main>

      {/* BOTTOM DOCK */}
      <BottomNav />
    </div>
  );
}

/* =========================================================
   FOOTER
========================================================= */

function Footer() {
  return (
    <footer
      className="panel"
      style={{
        margin: "20px 40px",
        display: "flex",
        justifyContent: "space-between",
        gap: 12,
        flexWrap: "wrap",
      }}
    >
      <span>© 2026 Anshumock</span>

      <Link
        className="text-btn"
        to="/syllabus/UPSSSC_PET"
      >
        Syllabus
      </Link>

      <Link
        className="text-btn"
        to="/mock-tests"
      >
        Mock Tests
      </Link>
    </footer>
  );
}

/* =========================================================
   PAGE COMPONENT
========================================================= */

export function Page({
  title,
  text,
  children,
}: {
  title: string;
  text?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="content">
      <div className="page-title">
        <div>
          <div className="eyebrow">
            ANSHUMOCK PREPARATION
          </div>

          <h1>{title}</h1>

          {text && <p>{text}</p>}
        </div>
      </div>

      {children}
    </section>
  );
}

/* =========================================================
   MOBILE NAVIGATION
========================================================= */

const mobileIcons = [
  {
    to: "/profile",
    label: "Profile",
    Icon: User,
    bg: "from-teal-400 to-cyan-600",
  },
  {
    to: "/dashboard",
    label: "Dashboard",
    Icon: LayoutDashboard,
    bg: "from-blue-400 to-cyan-500",
  },
  {
    to: "/classes",
    label: "Classes",
    Icon: GraduationCap,
    bg: "from-purple-500 to-indigo-600",
  },
  {
    to: "/library",
    label: "Library",
    Icon: BookText,
    bg: "from-orange-400 to-pink-500",
  },
  {
    to: "/menu",
    label: "Menu",
    Icon: Menu,
    bg: "from-green-400 to-emerald-600",
  },
];

/* =========================================================
   DESKTOP NAVIGATION
========================================================= */

const desktopIcons = [
  {
    to: "/homepro",
    label: "Home",
    Icon: Home,
    bg: "from-slate-500 to-slate-700",
  },
  {
    to: "/profile",
    label: "Profile",
    Icon: User,
    bg: "from-teal-400 to-cyan-600",
  },
  {
    to: "/dashboard",
    label: "Dashboard",
    Icon: LayoutDashboard,
    bg: "from-blue-400 to-cyan-500",
  },
  {
    to: "/results",
    label: "Results",
    Icon: FileText,
    bg: "from-amber-400 to-orange-500",
  },
  {
    to: "/attendance",
    label: "Attendance",
    Icon: ClipboardList,
    bg: "from-green-400 to-emerald-600",
  },
  {
    to: "/schedule",
    label: "Schedule",
    Icon: CalendarDays,
    bg: "from-fuchsia-500 to-pink-600",
  },
  {
    to: "/library",
    label: "Library",
    Icon: BookText,
    bg: "from-orange-400 to-pink-500",
  },
  {
    to: "/classes",
    label: "Classes",
    Icon: GraduationCap,
    bg: "from-purple-500 to-indigo-600",
  },
  {
    to: "/settings",
    label: "Settings",
    Icon: Settings,
    bg: "from-zinc-400 to-zinc-700",
  },
  {
    to: "/admin",
    label: "Admin",
    Icon: Shield,
    bg: "from-red-500 to-rose-700",
  },
  {
    to: "/menu",
    label: "Menu",
    Icon: Menu,
    bg: "from-lime-400 to-green-600",
  },
];

/* =========================================================
   BOTTOM NAV
========================================================= */

const BottomNav = () => {
  const mouseX = useMotionValue(Infinity);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => {
      setIsMobile(window.innerWidth < 768);
    };

    check();

    window.addEventListener("resize", check);

    return () => {
      window.removeEventListener("resize", check);
    };
  }, []);

  const icons = isMobile
    ? mobileIcons
    : desktopIcons;

  return (
    <div
      role="navigation"
      aria-label="App Bottom Navigation"
      className="fixed bottom-5 left-0 right-0 flex justify-center z-50"
      onMouseMove={
        !isMobile
          ? (e) => mouseX.set(e.clientX)
          : undefined
      }
      onMouseLeave={
        !isMobile
          ? () => mouseX.set(Infinity)
          : undefined
      }
    >
      <div
        className="
          flex items-end justify-center
          gap-3 md:gap-4 lg:gap-4
          px-4 md:px-3 lg:px-3
          py-2 md:py-2
          rounded-2xl
          backdrop-blur-3xl
          bg-white/10 dark:bg-black/30
          border border-white/20
          shadow-[0_15px_40px_rgba(0,0,0,0.35)]
        "
      >
        {icons.map((item, i) => (
          <DockItem
            key={`${item.to}-${i}`}
            mouseX={mouseX}
            isMobile={isMobile}
            {...item}
          />
        ))}
      </div>
    </div>
  );
};

/* =========================================================
   DOCK ITEM
========================================================= */

type DockItemProps = {
  to: string;
  label: string;
  Icon: React.ComponentType<{
    size?: number;
  }>;
  bg: string;
  mouseX: ReturnType<typeof useMotionValue<number>>;
  isMobile: boolean;
};

const DockItem = ({
  to,
  Icon,
  mouseX,
  bg,
  isMobile,
  label,
}: DockItemProps) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const distance = useTransform(
    mouseX,
    (val) => {
      if (!ref.current) return 0;

      const rect =
        ref.current.getBoundingClientRect();

      return (
        val -
        (rect.left + rect.width / 2)
      );
    }
  );

  const scale = useTransform(
    distance,
    [-150, 0, 150],
    [1, isMobile ? 1 : 1.4, 1]
  );

  const y = useTransform(
    distance,
    [-150, 0, 150],
    [0, isMobile ? 0 : -8, 0]
  );

  const iconSize = isMobile ? 28 : 25;

  const containerSize = isMobile
    ? "w-14 h-14"
    : "w-11 h-11";

  return (
    <NavLink
      to={to}
      aria-label={label}
      title={label}
    >
      {({ isActive }) => (
        <motion.div
          ref={ref}
          style={
            !isMobile
              ? { scale, y }
              : undefined
          }
          className="flex flex-col items-center"
        >
          {/* ICON */}
          <motion.div
            whileTap={
              !isMobile
                ? { scale: 0.9 }
                : undefined
            }
            className={`
              flex items-center justify-center
              ${containerSize}
              rounded-xl
              text-white
              bg-gradient-to-br ${bg}
              transition-all duration-300
              ${isActive ? "shadow-lg" : ""}
            `}
          >
            <Icon size={iconSize} />
          </motion.div>

          {/* ACTIVE DOT */}
          <div
            className={`
              w-1.5 h-1.5 mt-1 rounded-full
              bg-white transition
              ${
                isActive
                  ? "opacity-100"
                  : "opacity-0"
              }
            `}
          />
        </motion.div>
      )}
    </NavLink>
  );
};

export default BottomNav;