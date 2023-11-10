import React from 'react';
import CanvasJSReact from '@canvasjs/react-charts';

const CanvasJSChart = CanvasJSReact.CanvasJSChart;


const ChartComponent = (prop) => {
    const z=prop.points;
    const dataPoints = [z];
    
    const options = {
        animationEnabled: true,
        title: {
            text: 'Performance Chart'
        },
        axisX: {
            
        },
        axisY: {
            
        },
        toolTip: {
            shared: true
        },
        data: [
            {
                type: 'stackedBar',
                name: 'Total Fight',
                showInLegend: 'true',
                dataPoints: dataPoints.map(item => ({ label: item.label, y: item.totalFight }))
            },
            {
                type: 'stackedBar',
                name: 'Fights Wins',
                showInLegend: 'true',
                dataPoints: dataPoints.map(item => ({ label: item.label, y: item.fightsWins }))
            },
            {
                type: 'stackedBar',
                name: 'Total Kata',
                showInLegend: 'true',
                dataPoints: dataPoints.map(item => ({ label: item.label, y: item.totalKata }))
            },
            {
                type: 'stackedBar',
                name: 'Kata Wins',
                showInLegend: 'true',
                dataPoints: dataPoints.map(item => ({ label: item.label, y: item.kataWins }))
            },
            {
                type: 'stackedBar',
                name: 'Rating',
                showInLegend: 'true',
                dataPoints: dataPoints.map(item => ({ label: item.label, y: item.rating }))
            }
        ]
    };
    
	return (
		<div>
			<CanvasJSChart options={options} />
		</div>
	);
};

export default ChartComponent;

