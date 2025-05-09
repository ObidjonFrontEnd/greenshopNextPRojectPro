'use client'
import { Row, Col } from 'antd'
import PostCard from '../postcard'

export default function PostList({ posts }) {
  
 
  return (
    <Row gutter={[16, 16]}>
      {posts?.map(post => (
        <Col xs={24} sm={12} lg={8} key={post.id}>
          <PostCard
            post={post}
          />
        </Col>
      ))}
    </Row>
  )
}