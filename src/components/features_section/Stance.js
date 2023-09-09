import React from 'react';

const Stance=()=> {
  const tableData = [
 

    { english: 'Ready stance', japanese: 'Heiko datchi', pronounced: 'hey-koh dutch' },
    { english: 'Forward stance', japanese: 'Zenkutsu datchi', pronounced: 'zen-koot-sue dutch' },
    { english: 'Horse riding stance', japanese: 'Kiba datchi', pronounced: 'ki-bah dutch' },
    { english: 'Sumo stance', japanese: 'Shiko datchi', pronounced: 'shi-koh dutch' },

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

export default Stance;
