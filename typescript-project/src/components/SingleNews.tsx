import React from 'react';
import { Card } from 'react-bootstrap';

interface NewsProps {
  image: string;
  title: string;
  published_at: string;
  authors: { name: string }[]; // Definito come array
  summary: string;
}

interface CardProps {
  news: NewsProps;
}

const SingleNews: React.FC<CardProps> = ({ news }) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={news.image} alt="Card image" />
      <Card.Body>
        <Card.Title>{news.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          Published on {news.published_at} by{' '}
          {news.authors.map((author) => author.name).join(', ')}
        </Card.Subtitle>
        <Card.Text>{news.summary}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default SingleNews;

