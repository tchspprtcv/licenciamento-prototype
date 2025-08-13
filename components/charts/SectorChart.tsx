import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useData } from '../../context/DataContext';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/Card';

export const SectorChart = () => {
    const { sectors } = useData();

    const chartData = sectors.map(sector => ({
        name: sector.name,
        Categorias: sector.categoryCount,
        Licenças: sector.licenseCount,
    }));

    return (
        <Card>
            <CardHeader>
                <CardTitle>Distribuição por Setor</CardTitle>
            </CardHeader>
            <CardContent>
                <div style={{ width: '100%', height: 300 }}>
                    <ResponsiveContainer>
                        <BarChart
                            data={chartData}
                            margin={{
                                top: 5, right: 30, left: 20, bottom: 5,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" angle={-15} textAnchor="end" height={60} interval={0} />
                            <YAxis allowDecimals={false} />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="Categorias" fill="#3b82f6" />
                            <Bar dataKey="Licenças" fill="#ef4444" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </CardContent>
        </Card>
    );
};
