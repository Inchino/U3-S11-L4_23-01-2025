import { useEffect, useState } from 'react';
import Loading from './Loading';
import Error from './Error';
import AllTheNews from './AllTheNews';

interface Article {
    id: string;
    title: string;
    summary: string;
    published_at: string;
    image_url: string;
  }

const AdminArea: React.FC = () => {
  const [data, setData] = useState<Article[]>([]);
  const [isError, setIsError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setIsError(false);
      try {
        const response = await fetch('https://api.spaceflightnewsapi.net/v4/articles/');
        if (response.ok) {
            const news = await response.json()
            setData(news)
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
