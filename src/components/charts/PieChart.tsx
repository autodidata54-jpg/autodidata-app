import React from 'react';

interface PieData {
  name: string;
  value: number;
  color: string;
}

interface PieChartProps {
  data: PieData[];
  children?: React.ReactNode;
}

export const PieChart = ({ data, children: _children }: PieChartProps) => {
  if (!data || data.length === 0) return null;

  const total = data.reduce((acc, d) => acc + d.value, 0);
  let cumulativeAngle = 0;
  
  const size = 200;
  const center = size / 2;
  const radius = 70;
  const innerRadius = 50;

  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        {data.map((d, i) => {
          const angle = (d.value / total) * 360;
          const startAngle = cumulativeAngle;
          const endAngle = cumulativeAngle + angle;
          cumulativeAngle += angle;

          const x1 = center + radius * Math.cos((Math.PI * (startAngle - 90)) / 180);
          const y1 = center + radius * Math.sin((Math.PI * (startAngle - 90)) / 180);
          const x2 = center + radius * Math.cos((Math.PI * (endAngle - 90)) / 180);
          const y2 = center + radius * Math.sin((Math.PI * (endAngle - 90)) / 180);

          const ix1 = center + innerRadius * Math.cos((Math.PI * (startAngle - 90)) / 180);
          const iy1 = center + innerRadius * Math.sin((Math.PI * (startAngle - 90)) / 180);
          const ix2 = center + innerRadius * Math.cos((Math.PI * (endAngle - 90)) / 180);
          const iy2 = center + innerRadius * Math.sin((Math.PI * (endAngle - 90)) / 180);

          const largeArcFlag = angle > 180 ? 1 : 0;

          const pathData = [
            `M ${x1} ${y1}`,
            `A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2}`,
            `L ${ix2} ${iy2}`,
            `A ${innerRadius} ${innerRadius} 0 ${largeArcFlag} 0 ${ix1} ${iy1}`,
            'Z'
          ].join(' ');

          return (
            <path key={i} d={pathData} fill={d.color} stroke="#fff" strokeWidth="2">
              <title>{`${d.name}: ${d.value}%`}</title>
            </path>
          );
        })}
        <text x={center} y={center + 5} textAnchor="middle" style={{ fontSize: '12px', fontWeight: 'bold', fill: '#1e293b' }}>
          Estudos
        </text>
      </svg>
    </div>
  );
};
