import React from 'react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import "./Button.css"
import { FaFacebookSquare } from 'react-icons/fa';
import { BsWhatsapp } from 'react-icons/bs';

const Buttoncomp = () => {
  return (
    <div className='mainbut'>
      <div className='topbutton'>
        <Button colorScheme='teal' variant='solid'  backgroundColor={"#069395"} padding="1rem">
        START A FUNDRAISER FOR FREE 
            </Button>
            <Button colorScheme='teal' variant='outline' color="teal" width="300px">
                TALK TO US
            </Button>
      </div>
      <div className='lastbut'>
        <p>Have any questions for us? Chat with our team on Facebook or WhatsApp now.</p>
        <Button colorScheme='facebook' leftIcon={<FaFacebookSquare/>}>Facebook</Button>
        <Button colorScheme='whatsapp' leftIcon={<BsWhatsapp/>}>Whatsapp</Button>
      </div>
    </div>
  )
}

export default Buttoncomp