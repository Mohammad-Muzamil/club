import React from 'react'

const Belts = () => {
  return (
    <table className="table ">
            <thead>
                <tr>
                <th className="text-uppercase " style={{color: 'black'  ,fontSize:"18px"}}>#</th>
                <th className="text-uppercase " style={{color: 'black'  ,fontSize:"18px"}}>BELT COLOR</th>
                <th className="text-uppercase "></th>
                </tr>
            </thead>
            <tbody id="table_body">
                <tr>
                <td> <span className="text-sm" style={{ color: 'black',fontSize:"16px"  }}>1</span></td>
                <td> <span className="text-lg" style={{ color: 'black',fontSize:"16px"  }}>White</span></td>
       
                </tr>
                <tr>
                <td> <span className="text-sm" style={{color: 'black',fontSize:"16px"}}>2</span></td>
                <td> <span className="text-lg" style={{color: 'black',fontSize:"16px" }}>Yellow</span></td>
                
                </tr>
                <tr>
                <td> <span className="text-sm" style={{color: 'black' ,fontSize:"16px" }}>3</span></td>
                <td> <span className="text-lg" style={{ color: 'black' ,fontSize:"16px"}}>Orange</span></td>
                </tr>
                <tr>
                <td> <span className="text-sm" style={{ color: 'black' ,fontSize:"16px"}}>4</span></td>
                <td> <span className="text-lg" style={{ color: 'black' ,fontSize:"16px"}}>Green</span></td>
                </tr>
                <tr>
                <td> <span className="text-sm" style={{ color: 'black',fontSize:"16px"}}>5</span></td>
                <td> <span className="text-lg" style={{color: 'black' ,fontSize:"16px"}}>Blue</span></td>
                </tr>
                <tr>
                <td> <span className="text-sm" style={{color: 'black',fontSize:"16px"}}>6</span></td>
                <td> <span className="text-lg" style={{color: 'black' ,fontSize:"16px"}}>Red</span></td>
                </tr>
                <tr>
                <td> <span className="text-sm" style={{color: 'black'  ,fontSize:"16px"}}>7</span></td>
                <td> <span className="text-lg" style={{ color: 'black' ,fontSize:"16px"}}>Brown</span></td>
                </tr>
                <tr>
                <td> <span className="text-sm" style={{ color: 'black' ,fontSize:"16px"}}>8</span></td>
                <td> <span className="text-lg" style={{ color: 'black' ,fontSize:"16px"}}>Black</span></td>
                </tr>
            </tbody>
        </table>
  )
}

export default Belts
