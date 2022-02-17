import React, { Suspense } from "react";
import Background from "../../components/background";
import Loading from "../../components/loading";
const Mods = React.lazy(() => import("../../components/mods"));

const Home = () => {
  return (
    <>
      <Background url="assets/backgrounds/1.jpg" />
      <Suspense fallback={<Loading />}>
        <Mods />
      </Suspense>
    </>
  );
};

export default Home;
