import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
const Shop = () => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    const abort = new AbortController();
    const data = await fetch('https://jsonplaceholder.typicode.com/posts',{signal:abort.signal});

    const jsonData = await data.json();
    setItems(jsonData);
    return () => abort.abort();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const [items, setItems] = useState(null);
 
  return (
    <div>
      <h1>shop page</h1>
      <h2>Products</h2>
      <ul className="tiems">
        {!items && 'Fetching Items...'}
        {items &&
          items.map((item) => (
            <li key={item.id}>
              <Link to={`/shop/${item.id}`}>{item.title}</Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Shop;
