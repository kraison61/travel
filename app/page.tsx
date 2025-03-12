import Home from "@/components/Home/Home";

const HomePage = async () => {
  const data = await fetch("http://localhost:5000/api/services");
  const services = await data.json();
  const dataImages = await fetch("http://localhost:5000/api/images");
  const imagesData = await dataImages.json();

  // console.log(imagesData);

  return (
    <div>
      <Home services={services.services} imagesData={imagesData.images} />
    </div>
  );
};

export default HomePage;
