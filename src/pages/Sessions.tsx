import { PieChart, ResponsiveContainer } from '../components/charts/index.tsx';
import { Plus, Trash2, Clock } from 'lucide-react';

const cycleData = [
  { name: 'Matemática', value: 120, color: '#3b82f6' },
  { name: 'Português', value: 90, color: '#10b981' },
  { name: 'Física', value: 60, color: '#8b5cf6' },
];

export default function Sessions() {
  return (
    <div className="p-5 flex flex-col gap-6 animate-in fade-in duration-300 min-h-screen pb-24">
      
      {/* Session Logger */}
      <div className="bg-white p-5 rounded-2xl shadow-md border-t-4 border-primary shadow-primary/5 flex flex-col gap-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-10 translate-x-10"></div>
        <h2 className="font-bold text-lg text-gray-900 tracking-tight z-10 flex items-center gap-2">
          <Clock className="text-primary w-5 h-5" /> Registrar Sessão
        </h2>
        
        <div className="flex flex-col gap-3 z-10">
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-gray-600 uppercase tracking-wider">Disciplina</label>
            <select className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2.5 text-sm font-medium text-gray-800 outline-none focus:border-primary transition">
              <option>Selecione uma disciplina...</option>
              <option>Matemática</option>
              <option>Português</option>
              <option>Física</option>
            </select>
          </div>
          
          <div className="grid grid-cols-2 gap-3">
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-gray-600 uppercase tracking-wider whitespace-nowrap">Tempo (THE)</label>
              <select className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2.5 text-sm font-medium text-gray-800 outline-none focus:border-primary transition">
                <option>00h 30m</option>
                <option>01h 00m</option>
                <option>01h 30m</option>
              </select>
            </div>
            
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-gray-600 uppercase tracking-wider whitespace-nowrap">Concentração (NC)</label>
              <select className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2.5 text-sm font-medium text-gray-800 outline-none focus:border-primary transition">
                <option>Alta</option>
                <option>Média</option>
                <option>Baixa</option>
              </select>
            </div>
          </div>
          
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-gray-600 uppercase tracking-wider">Qualidade</label>
            <select className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2.5 text-sm font-medium text-gray-800 outline-none focus:border-primary transition">
              <option>Excelente</option>
              <option>Boa</option>
              <option>Ruim</option>
            </select>
          </div>

          <button className="mt-2 w-full bg-primary text-white font-bold py-3.5 rounded-xl shadow-lg shadow-primary/30 hover:bg-primary/90 transition active:scale-[0.98] flex items-center justify-center gap-2">
            Registrar Estudo
          </button>
        </div>
      </div>

      {/* Study Cycle Planning */}
      <div>
        <div className="flex items-center justify-between mb-4 px-1">
          <h3 className="font-bold text-gray-900 text-lg">Ciclo Atual</h3>
          <span className="bg-blue-100 text-blue-700 font-bold text-xs px-2.5 py-1 rounded-md">4h 30m Total</span>
        </div>

        <div className="flex flex-col gap-4">
          <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
            <div className="h-40 w-full flex items-center justify-center -mt-2">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart data={cycleData}>
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            {[1, 2, 3].map((_, i) => (
              <div key={i} className="bg-white p-3 rounded-xl border border-gray-100 shadow-sm flex items-center gap-3">
                <div className="w-2 h-10 rounded-full" style={{ backgroundColor: cycleData[i]?.color || '#cbd5e1' }}></div>
                <div className="flex-1">
                  <h4 className="font-bold text-sm text-gray-900">{cycleData[i]?.name || 'Inglês'}</h4>
                  <div className="flex items-center gap-2 mt-0.5 text-xs font-semibold text-gray-400">
                    <span>Bloco {i + 1}</span>
                    <span>•</span>
                    <button className="text-primary hover:underline">0 tópicos</button>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <select className="bg-gray-50 border border-gray-200 rounded-lg px-2 py-1 text-xs font-semibold text-gray-700 outline-none w-20">
                    <option>{cycleData[i]?.value / 60}h 00m</option>
                    <option>01h 30m</option>
                  </select>
                  <button className="p-1.5 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-md transition">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}

            <button className="w-full bg-white border-2 border-dashed border-gray-200 text-gray-500 font-bold py-3.5 rounded-xl hover:border-primary hover:text-primary transition flex items-center justify-center gap-2 mt-1">
              <Plus className="w-4 h-4" /> Nova Disciplina
            </button>
          </div>
        </div>
      </div>
    
    </div>
  );
}
