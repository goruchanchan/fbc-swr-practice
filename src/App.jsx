import useSWR from "swr";
import "./App.css";

function App() {
  const url = "https://httpstat.us/200?sleep=2000";
  const headers = { Accept: "application/json" };
  const fetcher = () => fetch(url, { headers }).then((res) => res.json());
  const { data, error, isLoading } = useSWR(url, fetcher);

  if (error) return <p>Status: failed to load</p>;
  if (isLoading) return <p>Status: loading...</p>;
  return <p>Status: {data.description}</p>;
}

export default App;
