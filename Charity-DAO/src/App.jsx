import Banner from "./components/Banner";
import Head from "./components/Head";

const App = () => {
  return (
    <div className="min-h-screen text-gray-900 dark:text-gray-300 dark:bg-[#000]">
      <Head />
      <Banner />
    </div>
  );
};

export default App;
