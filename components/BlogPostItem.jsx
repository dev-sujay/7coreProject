import { useNavigate } from 'react-router-dom';
import { Card, CardImg, CardBody, CardTitle, CardText, Button } from 'react-bootstrap';
import { useContext } from 'react';
import PostContext from '../src/context/PostContext';

const BlogPostItem = ({ post, idx }) => {
  const { setCurrentPost } = useContext(PostContext);
  const navigate = useNavigate();

  return (
    <Card className="mb-3">
      {
        post.urlToImage ? (
          <CardImg
            top
            className='max-height-200 object-fit-cover'
            src={
              post.urlToImage
            }
            alt="Card image cap"
          />
        ) : null
      }
      <CardBody>
        <CardTitle>
          <Button onClick={() => {
            setCurrentPost(post);
            navigate('/post/' + idx +1);
          }} 
          variant='link' 
          className='p-0 text-start'>
            {post.title}
          </Button>
        </CardTitle>
        <CardText className='text-muted' style={{
          fontSize: '14px'
        }} >
          {
            post.author ?
              (
                `By ${post.author}`
              ) : null
          }
          {
            post.publishedAt ?
              (
                ` on ${new Date(post.publishedAt).toDateString()}`
              ) : null
          }
        </CardText>
        <CardText className='text-muted fs-6 max-height-50'>
          {post.description}
        </CardText>
      </CardBody>
    </Card>
  );
};

export default BlogPostItem;
