import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart, Bar, 
  LineChart, Line, 
  PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer 
} from 'recharts';
import PageWrapper from './PageWrapper';

// REAL DATA: GitHub Repository History (Sep 2025 - Mar 2026)
const dataActivity = [
  { month: 'Sep 21', repos: 5, label: 'Early Dev' },
  { month: 'Oct 22', repos: 4, label: 'Analytics' },
  { month: 'Nov 23', repos: 0, label: 'Pause' },
  { month: 'Dec 24', repos: 0, label: 'Pause' },
  { month: 'Jan 25', repos: 0, label: 'Pause' },
  { month: 'Feb 26', repos: 1, label: 'DSA' },
  { month: 'Mar 26', repos: 2, label: 'Advanced AI' },
];

// REAL DATA: CT-Liver HCC Classifier Accuracy Progression
const dataModel = [
  { epoch: 'E1', accuracy: 32, loss: 0.85 },
  { epoch: 'E5', accuracy: 38, loss: 0.72 },
  { epoch: 'E10', accuracy: 42, loss: 0.65 },
  { epoch: 'Final', accuracy: 46, loss: 0.58 },
];

// REAL DATA: Technical Focus based on Repository Distribution
const dataDomain = [
  { name: 'Data Analytics', value: 45, color: '#0891b2' },
  { name: 'ML & Deep Learning', value: 30, color: '#0ea5e9' },
  { name: 'Programming Basics', value: 25, color: '#64748b' },
];

const DataVisualizations = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <PageWrapper id="insights" className="py-24">
      <section className="relative w-full">
        <div className="w-full text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-black mb-4 text-slate-900 tracking-tight">Project <span className="text-gradient">Insights</span></h2>
            <div className="w-24 h-1.5 bg-[var(--color-primary)] mx-auto rounded-full mb-8"></div>
            <p className="text-slate-600 max-w-3xl mx-auto text-lg font-medium leading-relaxed">
              Replacing arbitrary numbers with real outcomes. Here are the core metrics derived from my GitHub laboratory and project validation phases.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-10 max-w-7xl mx-auto">
            {/* Repo Activity Chart */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="glass-card p-10 h-[450px] shadow-xl shadow-slate-200/50"
            >
              <h3 className="text-xl font-black text-slate-800 mb-2 uppercase tracking-wider text-center">GitHub Laboratory</h3>
              <p className="text-sm text-slate-400 font-bold mb-8 uppercase text-center">Repository Volume Progression</p>
              <ResponsiveContainer width="100%" height="75%">
                <BarChart data={dataActivity} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.05)" vertical={false} />
                  <XAxis dataKey="month" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} dy={10} />
                  <YAxis stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} dx={-10} />
                  <Tooltip 
                    cursor={{ fill: 'rgba(8, 145, 178, 0.05)' }}
                    contentStyle={{ backgroundColor: 'white', border: '1px solid rgba(8, 145, 178, 0.1)', borderRadius: '12px', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}
                  />
                  <Bar dataKey="repos" fill="url(#colorActivity)" radius={[6, 6, 0, 0]} name="Public Repositories" />
                  <defs>
                    <linearGradient id="colorActivity" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#0891b2" stopOpacity={0.9}/>
                      <stop offset="95%" stopColor="#06b6d4" stopOpacity={0.8}/>
                    </linearGradient>
                  </defs>
                </BarChart>
              </ResponsiveContainer>
            </motion.div>

            {/* Model Progress Chart */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-card p-10 h-[450px] shadow-xl shadow-slate-200/50"
            >
              <h3 className="text-xl font-black text-slate-800 mb-2 uppercase tracking-wider text-center">HCC Classifier</h3>
              <p className="text-sm text-slate-400 font-bold mb-8 uppercase text-center">Model Validation Progress (%)</p>
              <ResponsiveContainer width="100%" height="75%">
                <LineChart data={dataModel} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.05)" vertical={false} />
                  <XAxis dataKey="epoch" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} dy={10} />
                  <YAxis stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} dx={-10} domain={[0, 60]} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: 'white', border: '1px solid rgba(8, 145, 178, 0.1)', borderRadius: '12px', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}
                  />
                  <Legend verticalAlign="top" height={36} iconType="circle" wrapperStyle={{ paddingBottom: '20px', fontWeight: '700', fontSize: '13px' }}/>
                  <Line type="monotone" dataKey="accuracy" stroke="#0891b2" strokeWidth={4} dot={{ r: 6, fill: '#0891b2', strokeWidth: 0 }} name="Accuracy %" activeDot={{ r: 8, stroke: '#fff', strokeWidth: 2 }} />
                  <Line type="stepAfter" dataKey="loss" stroke="#94a3b8" strokeWidth={2} name="Training Loss" opacity={0.5} yAxisId={0} orientation="left"/>
                </LineChart>
              </ResponsiveContainer>
            </motion.div>

            {/* Domain Focus Pie Chart */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="glass-card p-10 h-[480px] lg:col-span-2 lg:w-1/2 lg:mx-auto shadow-xl shadow-slate-200/50"
            >
              <h3 className="text-xl font-black text-slate-800 mb-2 uppercase tracking-wider text-center">Technical Domain Focus</h3>
              <p className="text-sm text-slate-400 font-bold mb-10 uppercase text-center">Workload Distribution by Topic</p>
              <ResponsiveContainer width="100%" height="70%">
                <PieChart>
                  <Pie
                    data={dataDomain}
                    cx="50%"
                    cy="45%"
                    innerRadius={75}
                    outerRadius={115}
                    paddingAngle={8}
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    labelLine={false}
                  >
                    {dataDomain.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} stroke="rgba(255,255,255,0.5)" strokeWidth={2} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ backgroundColor: 'white', border: '1px solid rgba(8, 145, 178, 0.1)', borderRadius: '12px', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}
                  />
                  <Legend verticalAlign="bottom" align="center" iconType="circle" wrapperStyle={{ paddingTop: '20px', fontWeight: '700', fontSize: '13px' }}/>
                </PieChart>
              </ResponsiveContainer>
            </motion.div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default DataVisualizations;
