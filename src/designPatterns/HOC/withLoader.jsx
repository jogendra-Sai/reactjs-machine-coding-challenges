import { useEffect, useState } from "react";

export function withLoader(Element, url) {
  return (props) => {
    const [data, setData] = useState(null);
    useEffect(() => {
      async function fetchData() {
        const imageData = await fetch(url);
        const response = await imageData.json();
        setData(response);
      }
      fetchData();
    }, []);
    if (!data) {
      return <div>Loading...</div>;
    }
    return <Element {...props} data={data} />;
  };
}
