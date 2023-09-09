import React from 'react';

const NumberTable=()=> {
  const tableData = [
    { english: '1', japanese: 'ichi', pronounced: 'itch' },
    { english: '2', japanese: 'ni', pronounced: 'knee' },
    { english: '3', japanese: 'san', pronounced: 'sun' },
    { english: '4', japanese: 'shi', pronounced: 'she' },
    { english: '5', japanese: 'go', pronounced: 'goh' },
    { english: '6', japanese: 'roku', pronounced: 'rook' },
    { english: '7', japanese: 'shichi', pronounced: 'sitch' },
    { english: '8', japanese: 'hachi', pronounced: 'hutch' },
    { english: '9', japanese: 'ku', pronounced: 'koo' },
    { english: '10', japanese: 'ju', pronounced: 'joo' },
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

export default NumberTable;
