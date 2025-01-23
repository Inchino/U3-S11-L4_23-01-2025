import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import News from "../types/News";

interface CardProps {
  news: News;
}

const SingleNews = ({ news }: CardProps) => {
  const navigate = useNavigate();

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={news.image_url} alt="Card image" />
      <Card.Body>
        <Card.Title>{news.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          Published on {new Date(news.published_at).toLocaleTimeString("en-US")}
        </Card.Subtitle>
        <Card.Text>{news.summary}</Card.Text>
        <Button
          variant="primary"
          onClick={() => navigate("/article/" + news.id)}
        >
          Go to the news!
        </Button>
      </Card.Body>
    </Card>
  );
};

export default SingleNews;
