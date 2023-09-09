import React from 'react';

const Blocks=()=> {
  const tableData = [
    { english: 'Rising head level block', japanese: 'Jodan age uke', pronounced: 'joe-dan a-geh oo-kay' },
    { english: 'Inside hooking block', japanese: 'Uchi uke', pronounced: 'oo-chee oo-ka' },
    { english: 'Outside hooking block', japanese: 'Soto uke', pronounced: 'soh-toe oo-kay' },
    { english: 'Downward block', japanese: 'Gedan barai', pronounced: 'geh-dan barr-eye' },
    { english: 'Sweeping block', japanese: 'Gedan uke', pronounced: 'geh-dan oo-kay' },

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

export default Blocks;
