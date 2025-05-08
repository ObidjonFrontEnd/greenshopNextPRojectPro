'use client'

import HeaderSm from '@/app/Components/header/Responsive/headerSm'
import useMessageStore from '@/app/redux/massege/messege'
import { Form, Input, InputNumber } from 'antd'
import axios from 'axios'

const AddProductForm = () => {
	const { message, setMessage } = useMessageStore()

	const onFinish = async values => {
		try {
			const res = await axios.post('https://dummyjson.com/products/add', {
				values,
			})
			setMessage('Add Product Success', 'Success')
		} catch (error) {
			setMessage(error.message, 'Error')
		}
	}

	return (
		<div className='max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg mt-[50px]'>
      <div className="md:hidden">
        <HeaderSm/>
      </div>
			<h2 className='text-2xl font-semibold mb-4 text-center'>
				Add New Product
			</h2>
			<Form
				layout='vertical'
				onFinish={onFinish}
				className='grid grid-cols-1 gap-4'
			>
				<Form.Item
					name='title'
					label='Product Name'
					rules={[{ required: true, message: 'Please enter the product name' }]}
				>
					<Input placeholder='Enter product name' />
				</Form.Item>

				<Form.Item
					name='price'
					label='Price'
					rules={[
						{ required: true, message: 'Please enter the product price' },
					]}
				>
					<InputNumber
						className='w-full'
						min={0}
						formatter={value => `$ ${value}`}
						parser={value => value.replace(/\$\s?|(,*)/g, '')}
						placeholder='Enter price'
					/>
				</Form.Item>

				<Form.Item
					name='quantity'
					label='Quantity'
					rules={[{ required: true, message: 'Please enter the quantity' }]}
				>
					<InputNumber
						className='w-full'
						min={1}
						placeholder='Enter quantity'
					/>
				</Form.Item>

				<Form.Item
					name='description'
					label='Description'
					rules={[{ required: true, message: 'Please enter a description' }]}
				>
					<Input.TextArea rows={4} placeholder='Enter product description' />
				</Form.Item>

				<Form.Item>
					<button type='submit' className='bg-[#46A358] px-[15px] py-[10px] text-white text-[18px] font-blod rounded-[8px] '>
						Add Product
					</button>
				</Form.Item>
			</Form>
		</div>
	)
}

export default AddProductForm
