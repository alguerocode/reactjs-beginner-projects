import {useEffect, useState} from 'react';
import { useParams} from 'react-router';
const ItemDetails = () => {
  const {id: itemId} = useParams();
  console.log(itemId);
  useEffect(() => {
    FetchItem();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const [item, setItem] = useState(false);
  const FetchItem = async () => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${itemId}`
    );
    const data = await response.json();
    setItem(data);
  };
  return (
    <div>
      <div>{!item && 'Loading...'}</div>
      <div>
        {item && (
          <div>
            <h1>{item.title}</h1>
            <h3>{item.userId}</h3>
            <p>{item.body}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ItemDetails;
