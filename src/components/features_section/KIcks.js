import React from 'react';

const Kicks=()=> {
  const tableData = [


    { english: 'Front kick', japanese: 'Mae geri', pronounced: 'may ger-ee' },
    { english: 'Round kick', japanese: 'Mawashi geri', pronounced: 'ma-wash-ee ger-ee' },
    { english: 'Side kick', japanese: 'Yoko geri', pronounced: 'yoh-koe ger-ee' },
    { english: 'Back kick', japanese: 'Ushiro geri', pronounced: 'oh-shi-roh ger-ee' },
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

export default Kicks;
