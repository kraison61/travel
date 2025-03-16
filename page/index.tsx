// pages/index.js (or your page file)

import Home from "@/components/Home/Home";
import Head from "next/head";

export async function getStaticProps() {
  const resServices = await fetch("http://localhost:5000/api/services");
  const services = await resServices.json();

  const resImages = await fetch("http://localhost:5000/api/images");
  const imagesData = await resImages.json();

  return {
    props: {
      services: services.services,
      imagesData,
    },
    revalidate: 60, // Regenerate every 60 seconds (adjust as needed)
  };
}

const HomePage = ({ services, imagesData }) => {
  return (
    <div>
      <Head>
        <title>Your Page Title | Company Name</title>
        <meta
          name="description"
          content="A brief description of your page content."
        />
        {/* Add other relevant metadata */}
      </Head>
      <Home services={services} imagesData={imagesData} />
    </div>
  );
};

export default HomePage;