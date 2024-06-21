import React, {
    FormEvent,
    useState
} from 'react';

import {
    ModalBackdrop,
    ModalContainer,
    Form,
    Input,
    Button,
    TransactionStatus,
    CloseButtonSend
} from '../assets/style/cardNFT.style';

import {
    Hex,
    parseEther
} from 'viem';

import {
    BaseError,
    useSendTransaction,
    useWaitForTransactionReceipt
} from 'wagmi';

import { SendType } from '../types/SendType';
import {BasicModal} from './EmailSend'; 

export const SendTransaction: React.FC<SendType> = ({ amount }) => {

    const { data: hash, error, isPending, sendTransaction } = useSendTransaction();
    const { isLoading: isConfirming, isSuccess: isConfirmed } = useWaitForTransactionReceipt({ hash });
    
    const [isOpen, setIsOpen] = useState(true);

    const handleClose = () => setIsOpen(false);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {

        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);
        const to = formData.get('address') as Hex;
        const value = formData.get('value') as string;
        sendTransaction({ to, value: parseEther(value) });

    };

    return (

        <>

            <ModalBackdrop isOpen={isOpen}>

                <ModalContainer>

                    <CloseButtonSend onClick={handleClose}>
                        x
                    </CloseButtonSend>

                    <Form onSubmit={handleSubmit}>

                        <Input
                            name="address"
                            placeholder="Address"
                            value={'0x3e48dE65Bd18AdEEB0026Ec430f59d8F54b22201'}
                            required
                        />

                        <Input
                            name="value"
                            placeholder="Amount"
                            type="text"
                            value={amount}
                            required
                        />

                        <Button
                            disabled={isPending}
                            type="submit">

                            {isPending ? 'Confirming...' : 'Send'}

                        </Button>

                    </Form>

                    {hash && <TransactionStatus>Transaction Hash: {hash}</TransactionStatus>}

                    {isConfirming && <TransactionStatus>Waiting for confirmation...</TransactionStatus>}

                    {isConfirmed && <TransactionStatus>Transaction confirmed.</TransactionStatus>}

                    {/* {error && <TransactionStatus>Error: {(error as BaseError).shortMessage || error.message}</TransactionStatus>} */}
                    { error && <BasicModal text={(error as BaseError).shortMessage || error.message} />}

                </ModalContainer>

            </ModalBackdrop>

        </>

    );

};
