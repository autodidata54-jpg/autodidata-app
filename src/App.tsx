import { Routes, Route, NavLink, Navigate } from "react-router-dom";

// ✅ Certifique-se que isso está instalado: npm install lucide-react
import {
  LayoutDashboard,
  BookOpenCheck,
  FileEdit,
  HelpCircle,
  CalendarDays,
  Timer,
  PieChart,
} from "lucide-react";

// ✅ Imports das páginas
import Dashboard from "./pages/Dashboard";
import Revisions from "./pages/Revisions";
import Exams from "./pages/Exams";
import Questions from "./pages/Questions";
import CalendarView from "./pages/CalendarView";
import Sessions from "./pages/Sessions";

function App() {
  const navItemStyle = ({ isActive }: { isActive: boolean }) => ({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    width: "100%",
    padding: "12px 16px",
    background: isActive ? "#333" : "transparent",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    textAlign: "left" as const,
    cursor: "pointer",
    textDecoration: "none",
    fontSize: "14px",
    fontWeight: isActive ? "bold" : "normal",
    transition: "background 0.2s",
    marginBottom: "4px",
  });

  return (
    <div style={{ display: "flex", height: "100vh", background: "#f8f9fa" }}>
      {/* Sidebar */}
      <aside
        style={{
          width: "240px",
          background: "#111",
          color: "#fff",
          padding: "24px 16px",
          display: "flex",
          flexDirection: "column",
          flexShrink: 0,
        }}
      >
        <h2 style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "32px", paddingLeft: "8px" }}>
          📚 Autodidata
        </h2>

        <nav style={{ flex: 1 }}>
          <NavLink to="/" style={navItemStyle}>
            <LayoutDashboard size={18} /> Dashboard
          </NavLink>

          <NavLink to="/revisoes" style={navItemStyle}>
            <BookOpenCheck size={18} /> Revisões
          </NavLink>

          <NavLink to="/simulados" style={navItemStyle}>
            <PieChart size={18} /> Simulados
          </NavLink>

          <NavLink to="/questoes" style={navItemStyle}>
            <FileEdit size={18} /> Questões
          </NavLink>

          <NavLink to="/calendario" style={navItemStyle}>
            <CalendarDays size={18} /> Calendário
          </NavLink>

          <NavLink to="/sessoes" style={navItemStyle}>
            <Timer size={18} /> Sessões
          </NavLink>
        </nav>

        <div style={{ marginTop: "auto", borderTop: "1px solid #333", paddingTop: "16px" }}>
          <button
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              width: "100%",
              padding: "12px 16px",
              background: "transparent",
              color: "#aaa",
              border: "none",
              cursor: "pointer",
              fontSize: "14px",
            }}
          >
            <HelpCircle size={18} /> Ajuda
          </button>
        </div>
      </aside>

      {/* Conteúdo */}
      <main style={{ flex: 1, overflowY: "auto" }}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/revisoes" element={<Revisions />} />
          <Route path="/simulados" element={<Exams />} />
          <Route path="/questoes" element={<Questions />} />
          <Route path="/calendario" element={<CalendarView />} />
          <Route path="/sessoes" element={<Sessions />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
