
import Home from "@/components/Home/Home";


const HomePage = async () => {

const data = await fetch('http://localhost:5000/api/services')
const services = await data.json()

  return (
      <div>
        <Home services={services}/>
      </div>
  );
};

export default HomePage;
