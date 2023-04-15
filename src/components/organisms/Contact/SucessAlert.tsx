import { useState } from 'react';

// Alert
import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
    Box,
} from '@chakra-ui/react'

interface AlertProps {
    message: string;
    onClose: () => void;
}

const SucessAlert = ({ message, onClose }: AlertProps) => {
    const [show, setShow] = useState(true);

    setTimeout(() => {
        setShow(false);
        onClose();
    }, 2000);

    return (
        <>
            {show && (
                <Alert status='success' bg={'green.800'} rounded={'md'}>
                    <AlertIcon />
                    <Box>
                        <AlertTitle>Successo!</AlertTitle>
                        <AlertDescription>{message}</AlertDescription>
                    </Box>

                </Alert>
            )}
        </>
    );
};

export default SucessAlert;
