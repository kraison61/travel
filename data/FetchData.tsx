'use client'


// import DestinationSlider from "@/components/Home/Destination/DestinationSlider";
import Destination from "@/components/Home/Destination/Destination";
import React, { useState, useEffect } from "react";




const FetchData = () => {


    const [services, setServices] = useState([]); // State to store the fetched object
    const [loading, setLoading] = useState(true); // State to track loading status
    const [error, setError] = useState(null); // State to store any errors
  
    // Fetch data when the component mounts
    useEffect(() => {
      const fetchData = async () => {
        try {
          // Fetch data from the API
          const response = await fetch("http://localhost:5000/api/services");
  
          // Check if the response is OK (status code 200-299)
          if (!response.ok) {
            throw new Error("Failed to fetch data");
          }
  
          // Parse the JSON response
          const result = await response.json();
  
          // Update the state with the fetched object
          setServices(result.services);
        } catch (error) {
          // Handle any errors
          setError(error.message);
        } finally {
          // Set loading to false after the request completes
          setLoading(false);
        }
      };
  
      fetchData(); // Call the fetch function
    }, []); // Empty dependency array means this runs once on mount
  
    // Render loading state
    if (loading) {
      return <div>Loading...</div>;
    }
  
    // Render error state
    if (error) {
      return <div>Error: {error}</div>;
    }

    // console.log(data)
  




  return (
    <div>
        <Destination services={services} />
    </div>
  )
}
export default FetchData