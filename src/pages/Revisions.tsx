import { useState } from 'react';
import { Check, ChevronDown, Clock } from 'lucide-react';

export default function Revisions() {
  const [reviews, setReviews] = useState([
    { id: 1, topic: 'Funções Quadráticas', subject: 'Matemática', type: '24h', done: false, isToday: true },
    { id: 2, topic: 'Revolução Francesa', subject: 'História', type: '7d', done: false, isToday: true },
    { id: 3, topic: 'Leis de Newton', subject: 'Física', type: '30d', done: true, isToday: false },
  ]);

  const toggleReview = (id: number) => {
    setReviews(reviews.map(r => r.id === id ? { ...r, done: !r.done } : r));
  };

  const pending = reviews.filter(r => !r.done);
  const completed = reviews.filter(r => r.done);

  return (
    <div className="p-5 flex flex-col gap-6 animate-in fade-in duration-300 min-h-screen pb-24">
      {/* Header and Config */}
      <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex flex-col gap-3">
        <h2 className="font-bold text-lg text-gray-900">Cronograma</h2>
        
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-gray-600">Padrão de Revisão</span>
          <button className="flex items-center gap-2 bg-gray-50 border border-gray-200 px-3 py-1.5 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-100 transition">
            24h / 7d / 30d <ChevronDown className="w-4 h-4" />
          </button>
        </div>
        <p className="text-xs text-gray-500 mt-1">O ciclo se repetirá automaticamente baseado no padrão escolhido.</p>
      </div>

      {/* Pending List */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-bold text-gray-900 flex items-center gap-2">
            Pendentes <span className="bg-orange-100 text-orange-700 py-0.5 px-2 rounded-full text-xs">{pending.length}</span>
          </h3>
        </div>

        <div className="flex flex-col gap-3">
          {pending.map(r => (
            <div key={r.id} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4 transition-all">
              <button 
                onClick={() => toggleReview(r.id)}
                className="w-6 h-6 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-primary transition"
              >
              </button>
              <div className="flex-1">
                <div className="flex items-start justify-between">
                  <h4 className="font-bold text-gray-900 text-sm">{r.topic}</h4>
                  {r.isToday && <span className="bg-blue-50 text-blue-600 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">Hoje</span>}
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-xs font-semibold text-gray-500">{r.subject}</span>
                  <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                  <span className="text-xs font-medium text-gray-400 flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {r.type}
                  </span>
                </div>
              </div>
            </div>
          ))}
          {pending.length === 0 && (
            <div className="text-center py-8 bg-white rounded-xl border border-dashed border-gray-200">
              <p className="text-gray-500 text-sm font-medium">Você não tem revisões pendentes!</p>
            </div>
          )}
        </div>
      </div>

      {/* Completed List */}
      <div className="mt-2">
        <h3 className="font-bold text-gray-400 flex items-center gap-2 mb-3">
          Concluídas <span className="bg-gray-100 text-gray-500 py-0.5 px-2 rounded-full text-xs">{completed.length}</span>
        </h3>

        <div className="flex flex-col gap-3 opacity-60">
          {completed.map(r => (
            <div key={r.id} className="bg-gray-50 p-4 rounded-xl border border-gray-100 flex items-center gap-4">
              <button 
                onClick={() => toggleReview(r.id)}
                className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center transition"
              >
                <Check className="w-4 h-4 text-white" />
              </button>
              <div className="flex-1">
                <h4 className="font-semibold text-gray-500 text-sm line-through decoration-gray-300">{r.topic}</h4>
                <div className="flex items-center gap-2 mt-0.5">
                  <span className="text-xs font-medium text-gray-400">{r.subject}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
