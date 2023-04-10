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
            onClose={onClose}>

            <ModalOverlay />
            <ModalContent
                bg={"dark_slate.900"}
                color={'white'}>

                <ModalHeader>Detalhes do projeto</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Text>
                        {description}
                    </Text>
                </ModalBody>

                <ModalFooter>
                    <Button variant={'catchy'} mr={3} onClick={onClose}>
                        Fechar
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}