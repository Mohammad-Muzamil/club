import React from 'react';

const General=()=> {
  const tableData = [
    { english: 'Founder', japanese: 'Kancho', pronounced: 'kun-choe' },
    { english: 'Master', japanese: 'Shihan', pronounced: 'she-harn' },
    { english: 'Teacher', japanese: 'Sensei', pronounced: 'sen-say' },
    { english: 'Assistant', japanese: 'Sempai', pronounced: 'sem-pie' },
    { english: 'Yes', japanese: 'Hai', pronounced: 'hay' },
    { english: 'Shout', japanese: 'Kiai', pronounced: 'key-eye' },
    { english: 'Hall', japanese: 'Dojo', pronounced: 'dough-joe' },
    { english: 'Begin', japanese: 'Hajime', pronounced: 'ha-jim-ay' },
    { english: 'Stop', japanese: 'Yame', pronounced: 'yar-may' },
    { english: 'Sparring', japanese: 'Kumite', pronounced: 'koo-mi-tay' },
    { english: 'Pattern/form', japanese: 'Kata', pronounced: 'car-ta' },
    { english: 'Uniform', japanese: 'Gi', pronounced: 'gee' },
    { english: 'Bow', japanese: 'Rei', pronounced: 'ray' },
    { english: 'Everyone', japanese: 'Autogani', pronounced: 'au-ta-gar-nee' },
  ];

  return (
    <table className="table align-items-center justify-content-center mb-0">
      <thead>
        <tr>
          <th style={{color: 'black'  ,fontSize:"18px"}} className="text-uppercase ">ENGLISH</th>
          <th style={{color: 'black'  ,fontSize:"18px"}} className="text-uppercase  ps-2">JAPANESE</th>
          <th style={{color: 'black'  ,fontSize:"18px"}} className="text-uppercase  ps-2">PRONOUNCED</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((row, index) => (
          <tr key={index}>
            <td style={{color: 'black'  ,fontSize:"16px"}}>{row.english}</td>
            <td style={{color: 'black'  ,fontSize:"16px"}}>{row.japanese}</td>
            <td style={{color: 'black'  ,fontSize:"16px"}}>{row.pronounced}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default General;
