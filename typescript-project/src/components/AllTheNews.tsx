import React from 'react';
import { Col, Row } from 'react-bootstrap';
import SingleNews from './SingleNews';

interface NewsItem {
  id: number;
  [key: string]: any;
}

interface ListProps {
  news: {
    results: NewsItem[];
  };
}

const AllTheNews: React.FC<ListProps> = ({ news }) => {
  return (
    <Row className="g-2">
      {news.results.map((item) => (
        <Col xs={12} md={4} key={item.id}>
          <SingleNews news={item} />
        </Col>
      ))}
    </Row>
  );
};

export default AllTheNews;
