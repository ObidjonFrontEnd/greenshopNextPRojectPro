import { useEffect } from 'react';
import useMessageStore from '@/app/redux/massege/messege';
import { notification } from 'antd';

const useNotificationMessage = () => {
  const { message, messageType } = useMessageStore();
  const [api, contextHolder] = notification.useNotification();

  useEffect(() => {
    if (!message || !messageType) return;

    const type = messageType.toLowerCase();
    const validTypes = ['success', 'info', 'warning', 'error'];

    const notify = validTypes.includes(type) ? api[type] : api.info;

    notify({
      message: type.toUpperCase(),
      description: message,
      placement: 'topRight',
    });
  }, [message, messageType, api]);

  return { contextHolder };
};

export default useNotificationMessage;
