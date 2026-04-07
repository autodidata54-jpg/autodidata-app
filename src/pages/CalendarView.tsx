import { useState } from 'react';
import { ChevronLeft, ChevronRight, Circle } from 'lucide-react';
import { format, addMonths, subMonths, isSameDay, startOfMonth, endOfMonth, eachDayOfInterval, addDays, getDay } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export default function CalendarView() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  const daysOfWeek = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];

  // Calculate calendar days
  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(currentDate);
  const daysInMonth = eachDayOfInterval({ start: monthStart, end: monthEnd });

  const startDay = getDay(monthStart);
  const leadingEmptyDays = Array.from({ length: startDay }).map((_, i) => i);

  // Mock tasks mapped by date string
  const mockTasks: Record<string, { title: string, subject: string, done: boolean }[]> = {
    [format(new Date(), 'yyyy-MM-dd')]: [
      { title: 'Funções Quadráticas', subject: 'Matemática', done: false },
      { title: 'Revolução Francesa', subject: 'História', done: true },
    ],
    [format(addDays(new Date(), 1), 'yyyy-MM-dd')]: [
      { title: 'Leis de Newton', subject: 'Física', done: false },
    ],
  };

  const selectedDateStr = format(selectedDate, 'yyyy-MM-dd');
  const todaysTasks = mockTasks[selectedDateStr] || [];

  return (
    <div className="p-5 flex flex-col gap-6 animate-in fade-in duration-300 min-h-screen pb-24">
      <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex flex-col gap-4">
        
        {/* Header Navigation */}
        <div className="flex items-center justify-between px-2 text-gray-900">
          <button 
            onClick={() => setCurrentDate(subMonths(currentDate, 1))}
            className="p-1 rounded-full hover:bg-gray-100 transition"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <h2 className="font-bold text-lg capitalize tracking-tight">
            {format(currentDate, 'MMMM yyyy', { locale: ptBR })}
          </h2>
          <button 
            onClick={() => setCurrentDate(addMonths(currentDate, 1))}
            className="p-1 rounded-full hover:bg-gray-100 transition"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Days of Week */}
        <div className="grid grid-cols-7 gap-1 mt-2 mb-1">
          {daysOfWeek.map((day) => (
            <div key={day} className="text-center text-[10px] font-bold text-gray-400 uppercase tracking-wider">
              {day}
            </div>
          ))}
        </div>

        {/* Calendar Grid */}
        <div className="grid grid-cols-7 gap-1">
          {leadingEmptyDays.map((i) => (
            <div key={`empty-${i}`} className="h-10"></div>
          ))}
          {daysInMonth.map((date) => {
            const isSelected = isSameDay(date, selectedDate);
            const isToday = isSameDay(date, new Date());
            const dateStr = format(date, 'yyyy-MM-dd');
            const hasTasks = mockTasks[dateStr] && mockTasks[dateStr].length > 0;
            
            return (
              <button
                key={date.toString()}
                onClick={() => setSelectedDate(date)}
                className={`flex flex-col items-center justify-center h-10 w-full rounded-xl transition-all relative ${
                  isSelected ? 'bg-primary text-white font-bold shadow-md shadow-primary/20' : 
                  isToday ? 'bg-primary/10 text-primary font-bold' : 'text-gray-700 font-medium hover:bg-gray-50'
                }`}
              >
                <span className="text-sm">{format(date, 'd')}</span>
                {hasTasks && (
                  <div className={`absolute bottom-1 w-1.5 h-1.5 rounded-full ${isSelected ? 'bg-white' : 'bg-primary'}`}></div>
                )}
              </button>
            )
          })}
        </div>
      </div>

      {/* Selected Day Details */}
      <div className="flex flex-col gap-3">
        <h3 className="font-bold text-gray-900 px-1 text-sm flex gap-1.5 items-center">
          Eventos para {format(selectedDate, "dd 'de' MMMM", { locale: ptBR })}
          {isSameDay(selectedDate, new Date()) && <span className="bg-primary/10 text-primary text-[10px] uppercase font-bold px-2 py-0.5 rounded-full ml-1">Hoje</span>}
        </h3>

        {todaysTasks.length > 0 ? (
          <div className="flex flex-col gap-3">
            {todaysTasks.map((task, i) => (
              <div key={i} className={`bg-white p-4 rounded-xl border border-gray-100 flex items-center justify-between transition ${task.done ? 'opacity-60' : 'shadow-sm'}`}>
                <div>
                  <h4 className={`font-bold ${task.done ? 'line-through text-gray-400' : 'text-gray-900'} text-sm`}>{task.title}</h4>
                  <span className="text-xs font-semibold text-gray-500 mt-0.5 inline-block">{task.subject}</span>
                </div>
                <div className={`w-3 h-3 rounded-full ${task.done ? 'bg-green-500' : 'bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.6)]'}`}></div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white p-8 rounded-2xl border border-dashed border-gray-200 flex flex-col items-center justify-center text-center">
            <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center text-gray-300 mb-3">
              <Circle className="w-6 h-6" />
            </div>
            <p className="text-sm font-medium text-gray-600">Nenhuma revisão ou evento programado para este dia.</p>
          </div>
        )}
      </div>
    </div>
  );
}
