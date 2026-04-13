import React from 'react';

interface DataPoint {
  name: string;
  note?: number;
  matematica?: number;
  portugues?: number;
  historia?: number;
  [key: string]: any;
}

interface LineChartProps {
  data: DataPoint[];
  dataKeys?: string[];
  colors?: string[];
  margin?: any;
  children?: React.ReactNode;
}

export const LineChart = ({ data, dataKeys = ['note'], colors = ['#3b82f6'], children: _children }: LineChartProps) => {
  if (!data || data.length === 0) return null;

  const width = 400;
  const height = 200;
  const padding = 20;
  
  const maxValue = 100;
  const minValue = 0;
  
  const getPoints = (key: string) => data.map((d, i) => ({
    x: padding + (i * (width - 2 * padding)) / (data.length - 1),
    y: height - padding - ((d[key] - minValue) * (height - 2 * padding)) / (maxValue - minValue),
  }));

  return (
    <div style={{ width: '100%', height: '100%', minHeight: '180px' }}>
      <svg width="100%" height="100%" viewBox={`0 0 ${width} ${height}`} preserveAspectRatio="none" style={{ overflow: 'visible' }}>
        <defs>
          {colors.map((c, i) => (
            <linearGradient key={i} id={`lineGradient-${i}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={c} stopOpacity="0.2" />
              <stop offset="100%" stopColor={c} stopOpacity="0" />
            </linearGradient>
          ))}
        </defs>
        
        {/* Y-Axis Lines */}
        {[0, 25, 50, 75, 100].map((v) => {
          const y = height - padding - (v * (height - 2 * padding)) / 100;
          return (
            <g key={v}>
              <line x1={padding} y1={y} x2={width - padding} y2={y} stroke="#f1f5f9" strokeWidth="1" />
              <text x={padding - 5} y={y + 4} textAnchor="end" style={{ fontSize: '10px', fill: '#94a3b8', fontWeight: 'bold' }}>{v}</text>
            </g>
          );
        })}

        {dataKeys.map((key, index) => {
            const points = getPoints(key);
            const color = colors[index % colors.length];
            const pathData = points.reduce((acc, p, i, a) => {
                if (i === 0) return `M ${p.x},${p.y}`;
                const prev = a[i - 1];
                const cp1x = prev.x + (p.x - prev.x) / 2;
                const cp2x = prev.x + (p.x - prev.x) / 2;
                return `${acc} C ${cp1x},${prev.y} ${cp2x},${p.y} ${p.x},${p.y}`;
            }, '');
            const areaData = `${pathData} L ${points[points.length - 1].x},${height - padding} L ${points[0].x},${height - padding} Z`;

            return (
                <g key={key}>
                    <path d={areaData} fill={`url(#lineGradient-${index})`} />
                    <path d={pathData} fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    {points.map((p, i) => (
                        <circle key={i} cx={p.x} cy={p.y} r="3" fill="#fff" stroke={color} strokeWidth="2" />
                    ))}
                </g>
            );
        })}

        {/* X-Axis labels */}
        {data.map((d, i) => (
          <text 
            key={i} 
            x={padding + (i * (width - 2 * padding)) / (data.length - 1)} 
            y={height - 2} 
            textAnchor="middle" 
            style={{ fontSize: '9px', fill: '#94a3b8', fontWeight: 'bold' }}
          >
            {d.name}
          </text>
        ))}
      </svg>
    </div>
  );
};
