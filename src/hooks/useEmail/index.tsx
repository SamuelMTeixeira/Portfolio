import { useState } from "react";
import emailjs from '@emailjs/browser';


interface FormProps {
    name: string;
    email: string;
    message: string;
}

interface EmailProps {
    serviceId: string;
    templateId: string;
    publicKey: string;
    form?: FormProps;
}

interface EmailHookReturn {
    sendEmail: ({ serviceId, templateId, publicKey, form }: EmailProps) => Promise<void>;
    loading: boolean;
    success: boolean;
    error?: any;
}

export default function useEmail(): EmailHookReturn {

    const [loading, setLoading] = useState<boolean>(false);
    const [success, setSuccess] = useState<boolean>(false);
    const [error, setError] = useState<any>(null);

    const sendEmail = async ({ serviceId, templateId, publicKey, form }: EmailProps) => {
        setLoading(true);
        setSuccess(false);
        setError(null);

        const templateParams = {
            name: form?.name,
            email: form?.email,
            message: form?.message
        }

        emailjs.send(serviceId, templateId, templateParams, publicKey)
            .then(() => {
                setLoading(false);
                setSuccess(true);
            })
            .catch(error => {
                setLoading(false);
                setError(error);
            });
    };

    return { sendEmail, loading, success, error };

}