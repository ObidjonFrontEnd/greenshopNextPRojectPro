'use client'
import { Card, Typography } from 'antd'
import { EyeOutlined, HeartOutlined } from '@ant-design/icons'

const { Paragraph, Title } = Typography

export default function PostCard({ post }) {
  const { title, body, views = 0, reactions = {} } = post
  const likes = reactions?.likes || 0

  return (
    <Card hoverable className="h-full flex flex-col justify-between">
      <div>
        <Title level={4}>{title}</Title>
        <Paragraph ellipsis={{ rows: 3 }}>{body}</Paragraph>
      </div>
      <div className="flex justify-between text-gray-500 mt-4 text-sm">
        <span><EyeOutlined /> {views}</span>
        <span><HeartOutlined /> {likes}</span>
      </div>
    </Card>
  )
}
