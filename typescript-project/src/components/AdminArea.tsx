import { useEffect, useState } from 'react';
import Loading from './Loading';
import Error from './Error';
import AllTheNews from './AllTheNews';
import News from '../types/News'
import Response from '../types/Response'

const AdminArea = () => {
  const [data, setData] = useState<News[]>([]);
  const [isError, setIsError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setIsError(false);
      try {
        const response = await fetch('https://api.spaceflightnewsapi.net/v4/articles/');
        if (response.ok) {
            const news: Response = await response.json()
            setData(news.results)
            setIsLoading(false)
            setIsError(false)
          } else {
            console.log('error')
            setIsLoading(false)
            setIsError(true)
          }
        } catch (error) {
          console.log(error)
          setIsLoading(false)
          setIsError(true)
        }
    };

    fetchData();
  }, []);

  return (
    <div className="text-center">
      {isLoading && <Loading />}
      {isError && <Error />}
      {!isLoading && !isError && (
        <AllTheNews news={data}/>
      )}
    </div>
  );
};

export default AdminArea;
