import axios from"axios";
let mainUrl="https://corefitserver.onrender.com"
export const baseURL=mainUrl;
let apiInstance=axios.create({baseURL,});
export default apiInstance;
export const produc = (media) => {
    return (
        `https://corefitserver.onrender.com/${media}`
    );
  };
