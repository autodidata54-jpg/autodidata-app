export * from './LineChart';
export * from './PieChart';

// Shared components that do nothing but prevent errors
export const ResponsiveContainer = ({ children }: any) => <div style={{ width: '100%', height: '100%', position: 'relative' }}>{children}</div>;
export const XAxis = (_props: any) => null;
export const YAxis = (_props: any) => null;
export const Tooltip = (_props: any) => null;
export const Legend = (_props: any) => null;
export const Cell = (_props: any) => null;
export const Line = (_props: any) => null;
export const Pie = (_props: any) => null;
export const Area = (_props: any) => null;
export const AreaChart = ({ children }: any) => <div>{children}</div>;
export const CartesianGrid = (_props: any) => null;
export const BarChart = (_props: any) => null;
export const Bar = (_props: any) => null;
