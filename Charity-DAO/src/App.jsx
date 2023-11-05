import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import {
  getInfo,
  getProposals,
  isWallectConnected,
} from "./Blockchain.services";
import Head from "./components/Head";
import Home from "./pages/Home";
import Proposal from "./pages/Proposal";

import { createWeb3Modal, defaultWagmiConfig } from "@web3modal/wagmi/react";

import { WagmiConfig } from "wagmi";
import { arbitrum, mainnet } from "wagmi/chains";

const projectId = "eb48ad3ada4866e68f414a1035e58a1a";

// 2. Create wagmiConfig
const metadata = {
  name: "Web3Modal",
  description: "Web3Modal Example",
  url: "https://web3modal.com",
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
};

const chains = [mainnet, arbitrum];
const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata });

// 3. Create modal
createWeb3Modal({ wagmiConfig, projectId, chains });

const App = () => {
  const [loaded, setLoaded] = useState(false);
  useEffect(async () => {
    await isWallectConnected();
    getInfo();
    getProposals();
    setLoaded(true);
  }, []);

  return (
    <WagmiConfig config={wagmiConfig}>
      <div className="min-h-screen bg-white text-gray-900 dark:bg-[#212936] dark:text-gray-300">
        <Head />
        {loaded ? (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/proposal/:id" element={<Proposal />} />
          </Routes>
        ) : null}

        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </WagmiConfig>
  );
};

export default App;
