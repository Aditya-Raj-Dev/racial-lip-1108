import { GiHamburgerMenu } from 'react-icons/gi';
import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Input,
} from '@chakra-ui/react'
import {GrSearch} from 'react-icons/gr';
import {RiWhatsappLine} from 'react-icons/ri';

import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react'




const Navbar = () => {

  const { isOpen, onOpen, onClose } = useDisclosure()
  const [size, setSize] = React.useState('md')

  const btnRef = React.useRef()
     
 function handlemedia(){}
  
  const handleSizeClick = (newSize) => {
    setSize(newSize)
    onOpen()
  }

  const sizes = ['xs', 'sm', 'md', 'lg', 'xl', 'full']

  return (
    <div className='navbar'>
       <div className='logo'>
         <img src="https://ketto.gumlet.io/assets/images/logo-light-bg.svg?w=70&dpr=1.3" alt="" height="200px" width="70px"/>
       </div>
       {/* 2nd Div */}
       <div className='midnav'>
           <Link to="/fundraisers">Browse Fundraisers</Link>
           <select>
           <option value="">Fundraise For</option>
              <option value="">Medical Treatment</option>
              <option value="">NGO / Charity</option>
              <option value="">Other Cause</option>
           </select>
           <Link to="/how">How It Works</Link>
          
           <>
          <Button
            onClick={() => handleSizeClick(size)}
            colorScheme="white"
            color="black"
            key={size}
            m={4}
           
          ><GrSearch fontSize={20} marginright={20}/>search</Button>
       
  
        <Modal onClose={onClose} size={5}  isOpen={isOpen}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader><h2 className='ketto'>SEARCH KETTO</h2></ModalHeader>
            <ModalCloseButton />
            <ModalBody >
              <Input placeholder= ' &#61442; Search by fundraisers,fundraiser creator,beneficiary on NGO' 
              size='lg' fontFamily="sans-serif"  border="0px"></Input>
              <br />
              <hr />
              <div style={{height:"30px"}}>

              </div>
              <div style={{display:"flex",padding:"10px",gap:"3px", backgroundColor:"lightgray"}}>
                <h2 className='ketto'>CLICK HERE</h2>
                <h2 style={{margingBottom:"6px"}}> to view fundraisers you have supported on Ketto</h2>
              </div>
            </ModalBody>
          </ModalContent>
        </Modal>
        </>
       </div>
       <div className='rightnav'>
       <Button 
        leftIcon={<RiWhatsappLine/>} 
        height="9" 
        fontWeight="bold" 
        colorScheme='whatsapp' 
        variant='outline'>
          Chat
      </Button>

      <Button 
        height="9" 
        fontWeight="bold" 
        colorScheme='teal' 
        variant='outline'>
          Start a Fundraiser
      </Button>
       <p>Sign In</p>
       </div>
    <div className='media'>
    <Button ref={btnRef}  onClick={onOpen}>
        <GiHamburgerMenu/>
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
          <img src="https://ketto.gumlet.io/assets/images/logo-light-bg.svg?w=70&dpr=1.3" alt="" height="200px" width="70px"/>
          </DrawerHeader>

          <DrawerBody>
            login
            signup
          </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme='blue'>Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
    </div>
  )
}

export default Navbar