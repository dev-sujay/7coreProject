import { useContext } from 'react';
import { Container } from 'react-bootstrap';
import PostContext from '../src/context/PostContext';

const BlogPostDetails = () => {
  const { currentPost } = useContext(PostContext);

  if (!currentPost) return (
    <Container 
    className='text-center d-flex justify-content-center align-items-center'
    style={{
      marginTop: "90px",
      height: "calc(100vh - 90px)",
      width: "100%"
    }}>
      <h2>Post not found!</h2>
    </Container>
  );

  const { title, author, publishedAt, description, urlToImage, content } = currentPost;


  return (
    <Container 
    style={{
      marginTop: "90px",
    }}>
      <h1>{title}</h1>
      <p className='text-muted'>
        {
          author ?
            (
              `By ${author}`
            ) : null
        }
        {
          publishedAt ?
            (
              ` on ${new Date(publishedAt).toDateString()}`
            ) : null
        }
      </p>
      {
        urlToImage ? (
          <img
            src={urlToImage}
            alt={title}
            className='mb-3 object-fit-cover w-100'
            height={400}
          />
        ) : null
      }
      <p>{description}</p>
      <p>{content}</p>
    </Container>
  );
};

export default BlogPostDetails;
