import { useState, useEffect } from 'react';
import axios from 'axios';
import BlogPostItem from './BlogPostItem';
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import CustomPagination from './CustomPagination';

const BlogPostList = () => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const pageSize = 10;
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(0);

  useEffect(() => {
    setLoading(true);
    const fetchPosts = async () => {
      try {
        const response = await axios.get(`https://newsapi.org/v2/everything?q=technology&apiKey=${import.meta.env.VITE_API_KEY}&page=${page}&pageSize=${pageSize}`);
        console.log(response)
        if (response?.data?.status === "ok") {
          setPosts(response.data.articles);
          setCount(response.data.totalResults);
        }else{
          throw new Error(response?.data?.message)
        }
      } catch (error) {
        console.error(error, "Error fetching posts");
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [page]);

  const handlePageChange = (num) => {
    setPage(num);
  };

  return (
    <Container>
      {
        loading ? (
          <div className='d-flex justify-content-center align-items-center' style={{
            height: '95vh',
            width: '100%'
          }} >
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </div>
        ) : (
          <Row style={{
            marginTop: '90px'
          }}>
            {
              posts?.filter(p => p.title !== "[Removed]")?.map((post, idx) => (
                <Col key={idx} md={4}>
                  <BlogPostItem post={post} idx={idx} />
                </Col>
              ))
            }
          </Row>
        )
      }
      <CustomPagination 
        count={count} 
        pageSize={pageSize} 
        page={page} 
        loading={loading} 
        handlePageChange={handlePageChange}
      />
    </Container>
  );
};

export default BlogPostList;
