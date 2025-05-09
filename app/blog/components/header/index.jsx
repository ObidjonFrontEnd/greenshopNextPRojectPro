'use client'
import { Typography } from 'antd'

const { Title } = Typography

export default function Header() {
  return (
    <Title level={1} className="text-center mb-6">
      My Feed
    </Title>
  )
}
