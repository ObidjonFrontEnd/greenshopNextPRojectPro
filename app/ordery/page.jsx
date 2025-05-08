
'use client'
import { Form, Input, Select, Checkbox, Radio, Button } from 'antd'
import Image from 'next/image'
import HeaderSm from '../Components/header/Responsive/headerSm'

const { Option } = Select

export default function BillingAddressForm() {
	return (
		<div className='max-w-[1200px] mx-auto px-[15px] mt-[50px]'>
     <div className="md:hidden">
      <HeaderSm/>
     </div>
			<div className='grid md:grid-cols-2 gap-8'>
				<Form layout='vertical' className='w-full'>
					<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
						<Form.Item
							name='firstName'
							label='First Name'
							rules={[{ required: true }]}
						>
							{' '}
							<Input />{' '}
						</Form.Item>
						<Form.Item
							name='lastName'
							label='Last Name'
							rules={[{ required: true }]}
						>
							{' '}
							<Input />{' '}
						</Form.Item>

						<Form.Item
							name='country'
							label='Country / Region'
							rules={[{ required: true }]}
						>
							{' '}
							<Select>
								<Option value='sa'>Saudi Arabia</Option>
							</Select>{' '}
						</Form.Item>
						<Form.Item
							name='city'
							label='Town / City'
							rules={[{ required: true }]}
						>
							{' '}
							<Input />{' '}
						</Form.Item>

						<Form.Item
							name='street'
							label='Street Address'
							rules={[{ required: true }]}
						>
							{' '}
							<Input placeholder='House number and street name' />{' '}
						</Form.Item>
						<Form.Item name='apartment' label=' '>
							{' '}
							<Input placeholder='Apartment, suite, unit, etc. (optional)' />{' '}
						</Form.Item>

						<Form.Item name='state' label='State' rules={[{ required: true }]}>
							{' '}
							<Select>
								<Option value='riyadh'>Riyadh</Option>
							</Select>{' '}
						</Form.Item>
						<Form.Item name='zip' label='ZIP' rules={[{ required: true }]}>
							{' '}
							<Input />{' '}
						</Form.Item>

						<Form.Item
							name='email'
							label='Email address'
							rules={[{ required: true, type: 'email' }]}
						>
							{' '}
							<Input />{' '}
						</Form.Item>
						<Form.Item
							name='phone'
							label='Phone Number'
							rules={[{ required: true }]}
						>
							{' '}
							<Input addonBefore='+966' />{' '}
						</Form.Item>
					</div>

					<Form.Item name='shipDifferentAddress' valuePropName='checked'>
						<Checkbox>Ship to a different address?</Checkbox>
					</Form.Item>

					<Form.Item name='orderNotes' label='Order notes (optional)'>
						<Input.TextArea rows={3} />
					</Form.Item>
				</Form>

				<div className='bg-white p-6 rounded-xl shadow-md'>
					<h2 className='text-lg font-semibold mb-4'>Your Order</h2>
					<div className='border-b pb-4 mb-4'>
						{[
							{
								name: 'Barberton Daisy',
								sku: '1995751877966',
								qty: 2,
								price: 238,
								image: '/daisy.jpg',
							},
							{
								name: 'Blushing Bromeliad',
								sku: '1995751875065',
								qty: 6,
								price: 834,
								image: '/bromeliad.jpg',
							},
							{
								name: 'Aluminum Plant',
								sku: '1995751877786',
								qty: 9,
								price: 1611,
								image: '/aluminum.jpg',
							},
						].map((item, index) => (
							<div key={index} className='flex items-center gap-3 mb-3'>
								<div className='w-12 h-12 bg-gray-100 rounded-md overflow-hidden'>
									<Image
										src={item.image}
										alt={item.name}
										width={48}
										height={48}
									/>
								</div>
								<div className='flex-1'>
									<div className='font-medium'>
										{item.name}{' '}
										<span className='text-sm text-gray-500'>
											(x {item.qty})
										</span>
									</div>
									<div className='text-xs text-gray-400'>SKU: {item.sku}</div>
								</div>
								<div className='font-semibold text-green-600'>
									${item.price.toFixed(2)}
								</div>
							</div>
						))}
					</div>

					<div className='space-y-1 text-sm'>
						<div className='flex justify-between'>
							<span>Subtotal</span>
							<span>$2,683.00</span>
						</div>
						<div className='flex justify-between'>
							<span>Coupon Discount</span>
							<span>(-) $0.00</span>
						</div>
						<div className='flex justify-between'>
							<span>Shipping</span>
							<span>$16.00</span>
						</div>
						<div className='text-right text-xs text-green-600 cursor-pointer'>
							View shipping charge
						</div>
						<hr className='my-2' />
						<div className='flex justify-between font-bold text-lg'>
							<span>Total</span>
							<span className='text-green-600'>$2,699.00</span>
						</div>
					</div>

					<h3 className='font-semibold mt-6 mb-2'>Payment Method</h3>
					<Form.Item name='payment' initialValue='cod'>
						<Radio.Group className='grid gap-3'>
							<Radio value='card'>
								{' '}
								<span className='flex gap-2 items-center'>
									{' '}
									<Image
										src='/cards.png'
										alt='cards'
										width={100}
										height={20}
									/>{' '}
								</span>{' '}
							</Radio>
							<Radio value='bank'> Direct bank transfer </Radio>
							<Radio value='cod'> Cash on delivery </Radio>
						</Radio.Group>
					</Form.Item>

					<Button
						type='primary'
						block
						className='bg-green-600 hover:bg-green-700 mt-4'
					>
						Place Order
					</Button>
				</div>
			</div>
		</div>
	)
}
