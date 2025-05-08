'use client'
import useMessageStore from '@/app/redux/massege/messege'
import { notification } from 'antd'
import { useEffect } from 'react'

const useNotificationMessage = () => {
	const { message, messageType, clearMessage } = useMessageStore()
	const [api, contextHolder] = notification.useNotification()

	useEffect(() => {
		if (!message || !messageType) return

		const type = messageType.toLowerCase()
		const validTypes = ['success', 'info', 'warning', 'error']
		const notify = validTypes.includes(type) ? api[type] : api.info

		notify({
			message: type.toUpperCase(),
			description: message,
			placement: 'topRight',
		})

		clearMessage()
	}, [message, messageType])

	return { contextHolder }
}

export default useNotificationMessage
