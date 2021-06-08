import React from 'react';
import { Container, Row } from 'react-bootstrap';
import news1 from '../../../images/news1.png';
import news2 from '../../../images/news2.png';
import news3 from '../../../images/news3.png';
import SingleNews from '../SingleNews/SingleNews';
import './LatestNews.css';

const LatestNews = () => {

    const latestNews = [
        {
          id:1,
          title: "New Bike Arrivals",
          time: "March 15, 2021",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, tempora nihil...",
          image: news1
        },
        {
          id:2,
          title: "Replace New Parts",
          time: "March 17, 2021",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, tempora nihil...",
          image: news2
        },
        {
          id:3,
          title: "Replace New Parts",
          time: "March 17, 2021",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, tempora nihil...",
          image: news3
        }
      ]

    return (
          <section className='news-container' id='blog'>
            <Container className="py-5">
              <h3>Latest News From Our Blog</h3>
              <Row className="mt-5">
                  {
                       latestNews.map(news => <SingleNews key={news.id} news={news} />)
                  }
              </Row>
            </Container>
         </section>
    );
};

export default LatestNews;