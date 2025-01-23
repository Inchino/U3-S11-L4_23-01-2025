import { Col, Row } from 'react-bootstrap';
import SingleNews from './SingleNews';
import News from "../types/News";

interface ListProps {
  news: News[];
}

const AllTheNews = ({ news }: ListProps) => {
  return (
    <Row className="g-2">
      {news.map((news) => (
        <Col xs={12} md={4} key={news.id}>
          <SingleNews news={news} />
        </Col>
      ))}
    </Row>
  );
};

export default AllTheNews;
