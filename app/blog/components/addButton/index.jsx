'use client'
import { useState } from 'react'
import { Button, Modal, Form, Input } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import useMessageStore from '@/app/redux/massege/messege'
import useUserStore from '@/app/redux/usetData/userData'


export default function AddButton() {
  const { message, setMessage } = useMessageStore()
  const { user } = useUserStore() 
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [form] = Form.useForm()

  const showModal = () => {
    if (!user) {
      setMessage('You must be logged in to add a post.', 'Error')
      return
    }
    setOpen(true)
  }

  const handleCancel = () => setOpen(false)

  const handleSubmit = async (values) => {
    setLoading(true)
    try {
      const res = await fetch('https://dummyjson.com/posts/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...values,
          userId: user?.id || 5, 
        }),
      })

      const data = await res.json()
      console.log('Post added:', data)
      setMessage('Post successfully added!', 'Success')
      form.resetFields()
      setOpen(false)
    } catch (error) {
      console.error('Error adding post:', error)
      setMessage(error.message, 'Error')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="mb-4">
      <Button
        type="dashed"
        shape="circle"
        icon={<PlusOutlined />}
        size="large"
        onClick={showModal}
      />

      <Modal
        open={open}
        title="Add New Blog Post"
        onCancel={handleCancel}
        footer={null}
      >
        <Form layout="vertical" form={form} onFinish={handleSubmit}>
          <Form.Item
            label="Title"
            name="title"
            rules={[{ required: true, message: 'Please enter a title' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Body"
            name="body"
            rules={[{ required: true, message: 'Please enter content' }]}
          >
            <Input.TextArea rows={4} />
          </Form.Item>

          <Form.Item>
            <Button style={{ backgroundColor: '#46A358' }} type="primary" htmlType="submit" loading={loading}>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  )
}
