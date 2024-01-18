import { useEffect, useState } from "react";

const useFetchUserData = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        setError(error instanceof Error ? error : new Error("An unknown error occurred"));
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  console.log("Fetched users:", users);
  return { users, loading, error };
};

export default useFetchUserData;
