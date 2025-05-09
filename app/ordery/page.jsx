'use client'
import { useEffect, useState } from 'react'
import { Form, Input, Select, Checkbox, Radio, Button } from 'antd'
import Image from 'next/image'
import HeaderSm from '../Components/header/Responsive/headerSm'
import { CreditCard } from 'lucide-react'
import OrderConfirmationModal from './confirm.jsx'

const { Option } = Select

export default function BillingAddressForm() {
	const [cartItems, setCartItems] = useState([])
	const [isModalOpen, setIsModalOpen] = useState(false)
	useEffect(() => {
		const fetchCart = async () => {
			try {
				const res = await fetch('https://dummyjson.com/carts/1')
				const data = await res.json()
				setCartItems(data.products)
			} catch (error) {
				console.error('Error fetching cart:', error)
			}
		}

		fetchCart()
	}, [])
	
	
	const subtotal = cartItems.reduce(
		(sum, item) => sum + item.price * item.quantity,
		0
	)
	const shipping = 16
	const total = subtotal + shipping

	return (
		<div className='max-w-[1200px] mx-auto px-[15px] mt-[50px]'>
			<div className='md:hidden'>
				<HeaderSm />
			</div>
			<Form layout='vertical' className='grid md:grid-cols-2 gap-8'>
				<div>
					<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
						<Form.Item
							name='firstName'
							label='First Name'
							rules={[{ required: true }]}
						>
							<Input />
						</Form.Item>
						<Form.Item
							name='lastName'
							label='Last Name'
							rules={[{ required: true }]}
						>
							<Input />
						</Form.Item>
						<Form.Item
							name='country'
							label='Country / Region'
							rules={[{ required: true }]}
						>
							<Select>
								<Option value='sa'>Uzbekistan</Option>
							</Select>
						</Form.Item>
						<Form.Item
							name='city'
							label='Town / City'
							rules={[{ required: true }]}
						>
							<Input />
						</Form.Item>
						<Form.Item
							name='street'
							label='Street Address'
							rules={[{ required: true }]}
						>
							<Input placeholder='House number and street name' />
						</Form.Item>
						<Form.Item name='apartment' label=' '>
							<Input placeholder='Apartment, suite, unit, etc. (optional)' />
						</Form.Item>
						<Form.Item name='state' label='State' rules={[{ required: true }]}>
							<Select>
								<Option value='Toshken'>Toshkent</Option>
								<Option value='Samarqand'>Samarqand</Option>
								<Option value='Jizzax'>Jizzax</Option>
								<Option value='Andijon'>Andijon</Option>
								<Option value='Buxoro'>Buxoro</Option>
								<Option value='Fargona'>Fargona</Option>
								<Option value='Namangan'>Namangan</Option>
								<Option value='Qashqadaryo'>Qashqadaryo</Option>
								<Option value='Sirdaryo'>Sirdaryo</Option>	
							</Select>
						</Form.Item>
						<Form.Item name='zip' label='ZIP' rules={[{ required: true }]}>
							<Input />
						</Form.Item>
						<Form.Item
							name='email'
							label='Email address'
							rules={[{ required: true, type: 'email' }]}
						>
							<Input />
						</Form.Item>
						<Form.Item
							name='phone'
							label='Phone Number'
							rules={[{ required: true }]}
						>
							<Input addonBefore='+966' />
						</Form.Item>
					</div>

					<Form.Item name='shipDifferentAddress' valuePropName='checked'>
						<Checkbox>Ship to a different address?</Checkbox>
					</Form.Item>

					<Form.Item name='orderNotes' label='Order notes (optional)'>
						<Input.TextArea rows={3} />
					</Form.Item>
				</div>

				<div className='bg-white p-6 rounded-xl shadow-md'>
					<h2 className='text-lg font-semibold mb-4'>Your Order</h2>
					<div className='border-b pb-4 mb-4'>
						{cartItems.map((item, index) => (
							<div key={index} className='flex items-center gap-3 mb-3'>
								<div className='w-12 h-12 bg-gray-100 rounded-md overflow-hidden'>
									<Image
										src={item.thumbnail || '/placeholder.jpg'}
										alt={item.title}
										width={48}
										height={48}
									/>
								</div>
								<div className='flex-1'>
									<div className='font-medium'>
										{item.title}
										<span className='text-sm text-gray-500'>
											{' '}
											(x {item.quantity})
										</span>
									</div>
									<div className='text-xs text-gray-400'>SKU: {item.id}</div>
								</div>
								<div className='font-semibold text-green-600'>
									${(item.price * item.quantity).toFixed(2)}
								</div>
							</div>
						))}
					</div>

					<div className='space-y-1 text-sm'>
						<div className='flex justify-between'>
							<span>Subtotal</span>
							<span>${subtotal.toFixed(2)}</span>
						</div>
						<div className='flex justify-between'>
							<span>Coupon Discount</span>
							<span>(-) $0.00</span>
						</div>
						<div className='flex justify-between'>
							<span>Shipping</span>
							<span>${shipping.toFixed(2)}</span>
						</div>
						<div className='text-right text-xs text-green-600 cursor-pointer'>
							View shipping charge
						</div>
						<hr className='my-2' />
						<div className='flex justify-between font-bold text-lg'>
							<span>Total</span>
							<span className='text-green-600'>${total.toFixed(2)}</span>
						</div>
					</div>

					<h3 className='font-semibold mt-6 mb-2'>Payment Method</h3>
					<Form.Item name='payment' initialValue='cod'>
						<Radio.Group style={{ display: 'flex', alignItems: 'center', gap: '12px' }}  >
							<Radio value='card'>
								<span className='flex '>
									<CreditCard size={24} />
								</span>
							</Radio>
							<Radio value='bank'>Direct bank transfer</Radio>
							<Radio value='cod'>Cash on delivery</Radio>
						</Radio.Group>
					</Form.Item>

					<Button
						htmlType='submit'
						type='primary'
						block
						style={{ backgroundColor: '#46A358' }}
						onClick={() => setIsModalOpen(true)}
					>
						Place Order
					</Button>
				</div>
			</Form>
			<OrderConfirmationModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} orderData={cartItems}/>
		</div>
	)
}
