import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react'
import { Button, Text } from '@components/atoms';


interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    description: string;
}

export default function ModalBox({ isOpen, onClose, description }: ModalProps) {
    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            size={'xl'}>

            <ModalOverlay
                bg='none'
                backdropFilter='auto'
                backdropInvert='5%'
                backdropBlur='2px' />

            <ModalContent
                bg={"dark_slate.900"}
                color={'white'}
                px={3}>

                <ModalHeader>Detalhes do projeto</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Text textAlign={'justify'}>
                        {description}
                    </Text>
                </ModalBody>

                <ModalFooter>
                    <Button variant={'catchy'} onClick={onClose}>
                        Fechar
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}