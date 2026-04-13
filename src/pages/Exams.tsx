import { Plus, Target } from 'lucide-react';
import { LineChart, ResponsiveContainer } from '../components/charts/index.tsx';

const evolutionData = [
  { name: 'Sim. 1', matematica: 60, portugues: 65, historia: 70 },
  { name: 'Sim. 2', matematica: 65, portugues: 70, historia: 75 },
  { name: 'Sim. 3', matematica: 72, portugues: 75, historia: 80 },
  { name: 'Sim. 4', matematica: 80, portugues: 82, historia: 85 },
];

export default function Exams() {
  return (
    <div className="p-5 flex flex-col gap-6 animate-in fade-in duration-300 min-h-screen pb-24">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-gray-900 tracking-tight">Evolução Geral</h2>
        <button className="bg-primary text-white px-4 py-2 flex items-center gap-1.5 rounded-full text-sm font-bold shadow-md shadow-primary/20 hover:bg-primary/90 transition-all active:scale-95">
          <Plus className="w-4 h-4 text-white" strokeWidth={3} /> Registrar
        </button>
      </div>

      {/* Chart */}
      <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex flex-col gap-4">
        <div className="flex items-center gap-2 mb-2">
          <Target className="w-5 h-5 text-gray-400" />
          <h3 className="font-bold text-gray-900">Desempenho por Disciplina</h3>
        </div>
        
        <div className="h-60 w-full mt-2">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart 
                data={evolutionData} 
                dataKeys={['matematica', 'portugues', 'historia']} 
                colors={['#3b82f6', '#10b981', '#f59e0b']}
            >
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* History */}
      <div>
        <h3 className="font-bold text-gray-900 mb-4 px-1">Histórico de Simulados</h3>
        <div className="flex flex-col gap-3">
          {[1, 2, 3].map((_, i) => (
            <div key={i} className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex justify-between items-center mb-3 pb-3 border-b border-gray-50">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-xs">
                    S{4-i}
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-gray-900">Simulado {4-i}</h4>
                    <span className="text-[11px] font-medium text-gray-400">12/04/2026</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="block text-lg font-bold text-gray-900">82%</span>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-green-500">Acertos</span>
                </div>
              </div>
              <div className="flex gap-2">
                <span className="bg-gray-50 border border-gray-100 text-gray-600 text-[10px] font-semibold px-2 py-1 rounded-md">
                  Mat: 85%
                </span>
                <span className="bg-gray-50 border border-gray-100 text-gray-600 text-[10px] font-semibold px-2 py-1 rounded-md">
                  Por: 78%
                </span>
                <span className="bg-gray-50 border border-gray-100 text-gray-600 text-[10px] font-semibold px-2 py-1 rounded-md">
                  His: 90%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
