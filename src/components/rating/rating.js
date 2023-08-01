// import star from "../../assets/img/icons/star.png";
// import yellowstar from "../../assets/img/icons/yellowstar.png";

// const Rating = ({ rating, width=20,height=20 }) => {
//     const renderStars = () => {
//       const stars = [];
//       for (let i = 1; i <= 5; i++) {
//         const starImg = i <= rating ? yellowstar : star;
//         stars.push(
//           <img
//             key={i}
//             src={starImg} 
//             alt={`Star ${i}`}
//             style={{ width: width, height: height, paddingLeft: '3px' }}
//           />
//         );
//       }
//       return stars;
//     };
  
//     return (
//       <div style={{display:"flex", paddingTop:'5px' }}>
//         {renderStars()}
//       </div>
//     );
//   };

// export default Rating;

import React, { useState, useEffect } from 'react';
import star from "../../assets/img/icons/star.png";
import yellowstar from "../../assets/img/icons/yellowstar.png";

const Rating = ({ rating, width = 13, height = 13 }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleWindowResize = () => {
      setIsMobile(window.innerWidth <= 990);
    };
    window.addEventListener('resize', handleWindowResize);
    handleWindowResize();

    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      const starImg = i <= rating ? yellowstar : star;
      stars.push(
        <img
          key={i}
          src={starImg}
          alt={`Star ${i}`}
          style={{
            width: isMobile ? `${width}px` : `${width * 2}px`,
            height: isMobile ? `${height}px` : `${height * 2}px`,
            paddingLeft: '1px',marginBottom:'-15px'
          }}
        />
      );
    }
    return stars;
  };

  return (
    <div style={{ display: "flex", paddingTop: '5px' }}>
      {renderStars()}
    </div>
  );
};

export default Rating;

