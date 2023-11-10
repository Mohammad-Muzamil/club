import React from 'react';
import CanvasJSReact from '@canvasjs/react-charts';

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const App = ({ yValues }) => {
	const currentYear = new Date().getFullYear();
	const options = {
		animationEnabled: true,
		title: {
			text: `MONTHLY FEES - ${currentYear}`
		},
		axisX: {
			valueFormatString: "MMM"
		},
		axisY: {
			title: "Amount (in PKR)",
			prefix: "Rs "
		},
		data: [{
			yValueFormatString: "$#,###",
			xValueFormatString: "MMMM",
			type: "spline",
			dataPoints: yValues.map((y, index) => ({ x: new Date(currentYear, index), y }))
		}]
	};

	return (
		<div>
			<CanvasJSChart options={options} />
		</div>
	);
};

export default App;
