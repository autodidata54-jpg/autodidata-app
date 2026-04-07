import { useState } from "react";

// ✅ Certifique-se que isso está instalado: npm install lucide-react
import {
  LayoutDashboard,
  BookOpenCheck,
  FileEdit,
  HelpCircle,
  CalendarDays,
  Timer,
} from "lucide-react";

// ✅ Imports das páginas (verifique se os caminhos existem)
import Dashboard from "./pages/Dashboard";
import Revisions from "./pages/Revisions";

function App() {
  const [activePage, setActivePage] = useState("dashboard");

  const renderPage = () => {
    switch (activePage) {
      case "dashboard":
        return <Dashboard />;
      case "revisions":
        return <Revisions />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      {/* Sidebar */}
      <aside
        style={{
          width: "220px",
          background: "#111",
          color: "#fff",
          padding: "20px",
        }}
      >
        <h2>📚 Autodidata</h2>

        <nav style={{ marginTop: "20px" }}>
          <button onClick={() => setActivePage("dashboard")}>
            <LayoutDashboard size={18} /> Dashboard
          </button>

          <button onClick={() => setActivePage("revisions")}>
            <BookOpenCheck size={18} /> Revisões
          </button>

          <button>
            <FileEdit size={18} /> Conteúdos
          </button>

          <button>
            <CalendarDays size={18} /> Agenda
          </button>

          <button>
            <Timer size={18} /> Timer
          </button>

          <button>
            <HelpCircle size={18} /> Ajuda
          </button>
        </nav>
      </aside>

      {/* Conteúdo */}
      <main style={{ flex: 1, padding: "20px" }}>
        {renderPage()}
      </main>
    </div>
  );
}

export default App;
