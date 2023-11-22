import { useMutation } from 'react-query';
import axios from 'axios';

const useContactForm = () => {
  const sendMessage = async (msgData: any) => {
    const { data } = await axios.post('https://api.web3forms.com/submit', {
      ...msgData,
      access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
    });
    return data;
  };

  const sendMessageMutation = useMutation({
    mutationKey: 'send-message',
    mutationFn: sendMessage,
  });

  return { sendMessageMutation };
};

export default useContactForm;
