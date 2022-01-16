import Login from "./login";

const Home = () => {
  return (
      <>
       <Login />
      </>
  );
}

Home.requiresAuth = false;
export default Home;
