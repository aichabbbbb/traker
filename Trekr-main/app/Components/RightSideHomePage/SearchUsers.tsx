"use client"
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import axios from 'axios';
import styles from "./RightSideHomePage.module.css";
import baseURL from "../../utils/baseUrl"

const SearchUsers = () => {
  
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (e : any) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value && typeof window !== 'undefined') {
        const accessToken = localStorage.getItem('accessToken');
      try {
        const response = await axios.get(`${baseURL}/api/search?query=${value}`,{
          headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/json'
          }
        });
        setSearchResults(response.data);
        console.log(response.data)
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
    } else {
      setSearchResults([]);
    }
  };

  return ( 
    <div className={styles.search_container}>
      <div className={styles.image_fly}>
        <img 
          src="/Assets/plane_image_treker.png"
          alt="fly image trekr"
        />
      </div>
      <div className={styles.input_search}>
        <input 
          type="text"
          className={styles.search_input}
          value={searchTerm}
          onChange={handleSearch}
        />
        <FaSearch className={styles.search_icon} />
      </div>
      {/* {searchResults.length > 0 && (
        <div className={styles.search_results}>
          {searchResults.map(result => (
            <div key={result.id} className={styles.search_result}>
              {result.name}
            </div>
          ))}
        </div>
      )} */}
    </div>
   );
}
 
export default SearchUsers;
