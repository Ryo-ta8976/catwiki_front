import React, { VFC } from 'react'
import {
  Input,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  InputGroup,
  InputRightElement,
  IconButton,
} from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'

type Props = {
  isOpen: boolean
  onClose: () => void
  handleClick: () => void
}

const SearchModal: VFC<Props> = (props) => {
  const { isOpen, onClose, handleClick } = props
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent height="50%">
        <ModalHeader>Search</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <InputGroup height={{ base: 3, lg: 10 }} m={{ base: 2, lg: 3 }}>
            <Input pr="4.5rem" type="text" placeholder="Enter your breed" />
            <InputRightElement width="4.5rem">
              <IconButton
                aria-label="Search database"
                icon={<SearchIcon />}
                onClick={handleClick}
                h={{ base: '1.5rem', lg: '1.75rem' }}
                size="sm"
              />
            </InputRightElement>
          </InputGroup>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default SearchModal
