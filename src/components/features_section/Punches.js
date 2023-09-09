import React from 'react';

const Punches=()=> {
  const tableData = [
    { english: 'Stomach level punch', japanese: 'Chudan tzuki', pronounced: 'chew-dan zoo-key' },
    { english: 'Head level punch', japanese: 'Jodan tzuki', pronounced: 'joe-dan zoo-key' },
    { english: 'Forward back fist', japanese: 'Ura uchi', pronounced: 'oo-ra oo-chi' },
    { english: 'Side back fist', japanese: 'oko ura uchi', pronounced: 'yo-koe oo-ra oo-chi' },
    { english: 'Short punch', japanese: 'Shita tzuki', pronounced: 'sh-ta zoo-key' },
    { english: 'Rising elbow strike', japanese: 'Hijiate', pronounced: 'hid-gee a-tay' },
    { english: 'Round elbow strike', japanese: 'Mawashi empi', pronounced: 'ma-wash-ee em-pee' },
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

export default Punches;
