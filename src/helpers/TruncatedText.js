const TruncateText = (text, maxLength ) => {
    if ( text ==undefined ||text==null ||text==""){
      return "";
    }
    if (  text.length <= maxLength) {
      return text;
    }
 
  
    const truncatedText = text.substring(0, maxLength);
    return truncatedText+"...";
  };
export default TruncateText;