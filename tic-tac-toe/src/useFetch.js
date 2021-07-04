import { useEffect, useState } from "react";

const useFetch = (method, body, url) => {
  const abort = new AbortController();
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [errorFetching, setErrorFetching] = useState(null);
  useEffect(() => {
    fetch(url, {
      method: method,
      body: body,
      headers: {
        "Content-Type": "application/json"
      },
      signal: abort.signal
    }).then(response => {
      if (!response.ok) {
        return new Error('fetch data failed ,server Error or not found');
      } else {
        return response.json()
      }
    })
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(err => {
        if (err.name === 'AbortError') {
          console.log('fetch aborted')
        } else {
          alert(err.message);
          setErrorFetching(err)
        }
      })
    return () => abort.abort()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url, body, method])
  return { data, isLoading, errorFetching };
}

export default useFetch;