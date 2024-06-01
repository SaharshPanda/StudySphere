import axios from "axios";

const doAxios = async (url, method, payload, success, error, header) => {

  switch (method.toLowerCase()) {
    case "post":
      try {
        const response = await axios.post(url, payload);
        // console.log("The created Post",url,payload);
        success(response)
      } catch (err) {
        // console.log("Error creating post:", err.response.data);
        error(err)
      }
      break ;
      case "get" : 
      try{
        const response = await axios.get(url);
        success(response)
      } catch(err){
        error(err)
      }
      break ;
      case "delete" :
        try{
        axios.delete(url,);
        }
        catch(err) {
    error(err);
  };
  break ;
  case "update" :
    try {
      const response = await axios.put(url, payload);
      // console.log("The created Post",url,payload);
      success(response)
    } catch (err) {
      // console.log("Error creating post:", err.response.data);
      error(err)
    }
    break ;
  }
};

const baseUrl = "http://localhost:5001/"

export {baseUrl}

export default doAxios;
