import star from "../../assets/img/icons/star.png";
import yellowstar from "../../assets/img/icons/yellowstar.png";

const Rating = ({ rating }) => {
    const renderStars = () => {
      const stars = [];
      for (let i = 1; i <= 5; i++) {
        const starImg = i <= rating ? yellowstar : star;
        stars.push(
          <img
            key={i}
            src={starImg} 
            alt={`Star ${i}`}
            style={{ width: '20px', height: '20px', paddingLeft: '3px' }}
          />
        );
      }
      return stars;
    };
  
    return (
      <div style={{display:"flex", paddingTop:'5px' }}>
        {renderStars()}
      </div>
    );
  };

export default Rating;
