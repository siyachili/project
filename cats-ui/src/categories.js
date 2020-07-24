import React,{useEffect, useState} from "react" ;
import axios from "axios";
import Card from "./card";


const Categories = () => {
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const handleSetCategories = (data) => setCategories(data);
  

  
  useEffect(() => {
    const fetchData = async () => {
     
        const response = await axios.get("https://api.chucknorris.io/jokes/categories");
        
        setCategories(response.data)
      
      
    } 
    fetchData();
    setLoading(false)
  }, []);

  if(loading){
    return <div>Loading...</div>
  }

  return (
    <div>
      
        { (categories && categories.length >0) 
          && categories.map((category, index) => {
                return <div key={index} style={{paddingLeft:"12%"}}>
                    <Card categoryName={category} />
                </div>
            })  
        }
    
    </div>
  );
}
export default Categories;