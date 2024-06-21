import * as React from 'react';
import { useState } from 'react';
import { Input } from '../assets/style/cardNFT.style';
import { Button } from '@mui/material';
import emailjs from 'emailjs-com';

const style: React.CSSProperties = {
    width: 400,
    border: '2px solid #000',
};

interface BasicModalProps {
    text: string;
}

export const BasicModal: React.FC<BasicModalProps> = ({ text }) => {
    const [email, setEmail] = useState('');

    const handleSendEmail = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();

        emailjs.send('service_kn1jz5u', 'template_tkhebyd', { message: text, user_email: email }, 'WyJFWyQu49nrPiRxr')
            .then((response) => {
                console.log('Email successfully sent!', response.status, response.text);
                alert('Письмо успешно отправлено!');
            })
            .catch((error) => {
                console.error('Email sending failed:', error);
                alert('Ошибка при отправке письма. Пожалуйста, попробуйте позже.');
            });
    };

    return (
        <div style={style}>
            <label>{text} - more information will be sent to your email.</label>
            <Input
                width={200}
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <Button variant="outlined" onClick={handleSendEmail}>
                Send on email
            </Button>
        </div>
    );
};