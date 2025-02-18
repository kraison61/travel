import React from "react";

const TourDetailsPage = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  return <div>ทดสอบ - TourDetailsPage : {id}</div>;
};

export default TourDetailsPage;
