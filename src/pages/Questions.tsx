import { Plus } from 'lucide-react';

export default function Questions() {
  return (
    <div className="p-5 flex flex-col gap-6 animate-in fade-in duration-300 min-h-screen pb-24">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-gray-900 tracking-tight">Questões</h2>
        <button className="bg-primary text-white px-4 py-2 flex items-center gap-1.5 rounded-full text-sm font-bold shadow-md shadow-primary/20 hover:bg-primary/90 transition-all active:scale-95">
          <Plus className="w-4 h-4 text-white" strokeWidth={3} /> Registrar
        </button>
      </div>

      {/* Weaknesses Overview (similar to Dashboard but tailored for questions) */}
      <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex flex-col gap-4">
        <h3 className="font-bold text-gray-900 mb-1">Taxas Críticas</h3>
        <div className="flex flex-col gap-4">
          <div>
            <div className="flex justify-between text-sm mb-1 px-1">
              <span className="font-semibold text-gray-700">Equações de 2º Grau</span>
              <span className="font-bold text-red-500">30%</span>
            </div>
            <div className="w-full bg-red-50 rounded-full h-2.5 overflow-hidden border border-red-100">
              <div className="bg-red-500 h-full rounded-full" style={{ width: '30%' }}></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between text-sm mb-1 px-1">
              <span className="font-semibold text-gray-700">Verbos</span>
              <span className="font-bold text-orange-500">50%</span>
            </div>
            <div className="w-full bg-orange-50 rounded-full h-2.5 overflow-hidden border border-orange-100">
              <div className="bg-orange-500 h-full rounded-full" style={{ width: '50%' }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Detail by Subject */}
      <div>
        <h3 className="font-bold text-gray-900 mb-4 px-1">Por Disciplina</h3>
        <div className="flex flex-col gap-4">
          
          {/* Subject Block */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="bg-blue-50/50 p-4 border-b border-blue-50 flex items-center justify-between">
              <h4 className="font-bold text-gray-900">Matemática</h4>
              <span className="text-xs font-bold text-blue-600 bg-blue-100 px-2 py-1 rounded-md">82% Geral</span>
            </div>
            <div className="p-2 flex flex-col gap-1">
              <div className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-xl transition cursor-default">
                <span className="text-sm font-medium text-gray-700 truncate pr-4">Porcentagem</span>
                <div className="flex items-center gap-3 shrink-0">
                  <span className="text-xs text-gray-500 font-medium bg-gray-100 px-2 py-1 rounded">18/20</span>
                  <span className="text-sm font-bold text-green-600 w-10 text-right">90%</span>
                </div>
              </div>
              <div className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-xl transition cursor-default bg-red-50/30">
                <span className="text-sm font-medium text-gray-700 truncate pr-4">Equações de 2º Grau</span>
                <div className="flex items-center gap-3 shrink-0">
                  <span className="text-xs text-gray-500 font-medium bg-gray-100 px-2 py-1 rounded">6/20</span>
                  <span className="text-sm font-bold text-red-500 w-10 text-right">30%</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="bg-emerald-50/50 p-4 border-b border-emerald-50 flex items-center justify-between">
              <h4 className="font-bold text-gray-900">Português</h4>
              <span className="text-xs font-bold text-emerald-600 bg-emerald-100 px-2 py-1 rounded-md">68% Geral</span>
            </div>
            <div className="p-2 flex flex-col gap-1">
              <div className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-xl transition cursor-default bg-orange-50/30">
                <span className="text-sm font-medium text-gray-700 truncate pr-4">Verbos</span>
                <div className="flex items-center gap-3 shrink-0">
                  <span className="text-xs text-gray-500 font-medium bg-gray-100 px-2 py-1 rounded">10/20</span>
                  <span className="text-sm font-bold text-orange-500 w-10 text-right">50%</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
