import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";

function App() {
  // const { products, error, loading } = custumReactQuery("/api/products");

  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    (async () => {
      try {
        setError(false);
        setLoading(true);
        const response = await axios.get("/api/products?search=" + search, {
          signal: controller.signal,
        });
        console.log(response.data);
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log("request cancelled", error.message);
          return;
        }
        setError(true);
        setLoading(false);
      }
    })();
    // cleanupcode
    return () => {
      controller.abort;
    };
  }, [search]);

  return (
    <>
      <h1>Chaie aur Code</h1>
      {loading && <h2>Loading...</h2>}
      {error && <h2>Somthing went wrong</h2>}

      <input
        type="text"
        placeholder="search"
        onChange={(e) => setSearch(e.target.value)}
      />
      <h2>Number of products are : {products.length}</h2>
    </>
  );
}

export default App;

// const custumReactQuery = (ApiUrl) => {

//   return { products, error, loading };
// };
