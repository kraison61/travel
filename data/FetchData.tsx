const FetchData = async () => {
  const data = await fetch("http://localhost:5000/api/services");
  const posts = await data.json();
  console.log(posts);
  return (
    <>
      <h1>Fetching Data</h1>
      <ul>
        {/* {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))} */}
      </ul>
    </>
  );
};

export default FetchData;
