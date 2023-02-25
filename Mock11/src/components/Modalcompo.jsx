import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalOverlay, Text, useDisclosure } from '@chakra-ui/react'
import React from 'react'

const Modalcompo= ({data}) => {
console.log(data)
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (

    <div>
        
        <Button onClick={onOpen}>Open Modal</Button>
<Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
  <ModalOverlay />
  <ModalContent>
    <ModalHeader>Modal Title</ModalHeader>
    <ModalCloseButton />
    <ModalBody>
      <Text fontWeight='bold' mb='1rem'>
        You can scroll the content behind the modal
      </Text>
      <Lorem count={2} />
    </ModalBody>

    <ModalFooter>
      <Button colorScheme='blue' mr={3} onClick={onClose}>
        Close
      </Button>
      <Button variant='ghost'>Secondary Action</Button>
    </ModalFooter>
  </ModalContent>
</Modal>
    </div>
  )
}

export default Modalcompo