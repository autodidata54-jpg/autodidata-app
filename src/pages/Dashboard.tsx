import { Target, CheckCircle2, XCircle, Clock, AlertTriangle, TrendingUp } from 'lucide-react';
import { PieChart, LineChart, ResponsiveContainer } from '../components/charts/index.tsx';

const pieData = [
  { name: 'Matemática', value: 35, color: '#3b82f6' },
  { name: 'Português', value: 25, color: '#10b981' },
  { name: 'História', value: 20, color: '#f59e0b' },
  { name: 'Geografia', value: 20, color: '#8b5cf6' },
];

const lineData = [
  { name: '10/03', note: 65 },
  { name: '17/03', note: 68 },
  { name: '24/03', note: 75 },
  { name: '31/03', note: 82 },
  { name: '07/04', note: 85 },
];

export default function Dashboard() {
  return (
    <div className="p-5 flex flex-col gap-6 animate-in fade-in duration-300">
      
      {/* Metrics Grid */}
      <div className="grid grid-cols-2 gap-3">
        <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between">
          <div className="flex items-center gap-2 text-gray-500 mb-2">
            <Target className="w-4 h-4" />
            <span className="text-xs font-semibold uppercase tracking-wider">Questões</span>
          </div>
          <span className="text-2xl font-bold text-gray-900">1.248</span>
        </div>
        
        <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between">
          <div className="flex items-center gap-2 text-gray-500 mb-2">
            <TrendingUp className="w-4 h-4 text-primary" />
            <span className="text-xs font-semibold uppercase tracking-wider">Taxa Acerto</span>
          </div>
          <div className="flex items-end gap-1">
            <span className="text-2xl font-bold text-gray-900">76</span>
            <span className="text-sm font-semibold text-gray-500 mb-1">%</span>
          </div>
        </div>

        <div className="bg-white p-3 rounded-2xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs font-semibold text-gray-500">Acertos</span>
            <CheckCircle2 className="w-4 h-4 text-green-500" />
          </div>
          <span className="text-lg font-bold text-gray-900">948</span>
        </div>

        <div className="bg-white p-3 rounded-2xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs font-semibold text-gray-500">Erros</span>
            <XCircle className="w-4 h-4 text-red-500" />
          </div>
          <span className="text-lg font-bold text-gray-900">300</span>
        </div>

        <div className="bg-white p-3 rounded-2xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs font-semibold text-gray-500">Horas</span>
            <Clock className="w-4 h-4 text-blue-500" />
          </div>
          <span className="text-lg font-bold text-gray-900">142h</span>
        </div>

        <div className="bg-white p-3 rounded-2xl shadow-sm border border-gray-100 bg-orange-50 border-orange-100">
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs font-semibold text-orange-600">Revisões</span>
            <AlertTriangle className="w-4 h-4 text-orange-500" />
          </div>
          <span className="text-lg font-bold text-orange-700">12 Pend.</span>
        </div>
      </div>

      {/* Weaknesses */}
      <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
        <h3 className="font-bold text-gray-900 mb-4">Pior Desempenho</h3>
        <div className="flex flex-col gap-4">
          <div>
            <div className="flex justify-between text-sm mb-1 line-clamp-1">
              <span className="font-medium text-gray-700">Geometria Analítica</span>
              <span className="font-bold text-red-500">42%</span>
            </div>
            <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
              <div className="bg-red-500 h-2 rounded-full" style={{ width: '42%' }}></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between text-sm mb-1 line-clamp-1">
              <span className="font-medium text-gray-700">Crise de 1929</span>
              <span className="font-bold text-orange-500">55%</span>
            </div>
            <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
              <div className="bg-orange-500 h-2 rounded-full" style={{ width: '55%' }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
        <h3 className="font-bold text-gray-900 mb-4">Evolução nos Simulados</h3>
        <div className="h-48 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={lineData} dataKeys={['note']}>
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 mb-4">
        <h3 className="font-bold text-gray-900 mb-4">Distribuição de Estudo</h3>
        <div className="h-48 w-full flex items-center justify-center">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart data={pieData}>
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="flex flex-wrap gap-3 justify-center mt-2">
          {pieData.map((item, i) => (
            <div key={i} className="flex items-center gap-1.5">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
              <span className="text-xs font-medium text-gray-600">{item.name}</span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
