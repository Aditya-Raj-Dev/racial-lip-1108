import React from 'react';
import './HowItWork.css';
import Footer from '../Footer/Footer';
import img_1 from '../Image/img_1.png';
import img_2 from '../Image/img_2.png';
import img_3 from '../Image/img_3.png';
import img_4 from '../Image/img_4.png';
import img_5 from '../Image/img_5.png';
import img_6 from '../Image/img_6.png';
import img_7 from '../Image/img_7.png';
import img_8 from '../Image/img_8.png';
import img_9 from '../Image/img_9.png';
import img_10 from '../Image/img_10.png';
import facebook from '../Image/facebook.png';
import Carousel from 'react-elastic-carousel';
import Card from './Card';
import {
  AspectRatio,
  Box,
  Button,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Portal,
  Stack,
} from '@chakra-ui/react';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react';
import { PhoneIcon } from '@chakra-ui/icons';

export default function HowItWork() {
  const breakPoints = [
    {
      width: 1,
      itemsToShow: 1,
    },
    {
      width: 500,
      itemsToShow: 1,
    },
    {
      width: 768,
      itemsToShow: 2,
    },
    {
      width: 1200,
      itemsToShow: 2,
    },
  ];
  const data = [{ img: { img_6 } }];
  const data1 = [{ img: { img_7 } }];
  const data2 = [{ img: { img_8 } }];
  const data3 = [{ img: { img_9 } }];
  const data4 = [{ img: { img_10 } }];
  return (
    <>
      <div className="Main_Top_Div">
        <div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <h1 className="Top_heading_h1">
              Raising Funds was never this easy. Start a fundraiser in
              5 minutes!
            </h1>
          </div>
          <div className="Secound_Main_Div">
            <div className="Image_Div">
              <img
                style={{ marginTop: '30px' }}
                src={img_1}
                alt="image"
              />
              <img className="img_2style" src={img_2} alt="" />
            </div>
            <div className="Form_dIv">
              <div>
                <img
                  className="imgdang"
                  src="https://ketto.gumlet.io/assets/images/how-it-works/ketto-logo.svg?w=480&dpr=2.0"
                  alt="image"
                />
                <p className="ptag_1">
                  We know you are in urgent need of funds.
                  <span className="spnastles">
                    Our personal fundraiser expert is waiting to get
                    you started!
                  </span>
                </p>
                <Stack spacing={3} style={{ marginTop: '20px' }}>
                  <Input variant="outline" placeholder="Name" />
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents="none"
                      children={<PhoneIcon color="gray.300" />}
                    />
                    <Input type="tel" placeholder="Phone number" />
                  </InputGroup>
                </Stack>
                <Menu>
                  <MenuButton
                    style={{
                      borderRadius: '7px',
                      padding: '5px',
                      marginTop: '20px',
                      border: '2px solid #e2e8f0',
                      width: '100%',
                    }}
                  >
                    What will be the funds used for?
                  </MenuButton>
                  <Portal>
                    <MenuList>
                      <MenuItem>Cancer treatment</MenuItem>
                      <MenuItem>Accident treatment</MenuItem>
                      <MenuItem>Liver/Kidney transplant</MenuItem>
                      <MenuItem>Heart operation</MenuItem>
                      <MenuItem>Pre-mature baby care (NICU)</MenuItem>
                    </MenuList>
                  </Portal>
                </Menu>
                <p className="ptagasldj">
                  102 People started a fundraiser in last 2 days
                </p>
                <Stack align="center">
                  <Button
                    size="lg"
                    colorScheme="cyan"
                    variant="outline"
                    style={{ fontWeight: '700' }}
                  >
                    GET A CALL
                  </Button>
                </Stack>
                <Stack align="center">
                  <Button
                    style={{ marginTop: '20px' }}
                    colorScheme="green"
                    variant="solid"
                    size="lg"
                  >
                    <img
                      style={{ width: '25px', marginRight: '10px' }}
                      src={img_3}
                      alt="image"
                    />
                    CONNECT TO WHATAPP
                  </Button>
                </Stack>
              </div>
            </div>
          </div>
        </div>
        <div className="thrid_main_div3">
          <div style={{ width: '600px', margin: 'auto' }}>
            <h2 className="thridh2main">What is Crowdfunding?</h2>
            <p className="thridp2main">
              In its simplest form, Crowdfunding is a practice of
              giving monetary funds to overcome specific social,
              cultural, or economic hurdles individuals face in their
              daily lives.
            </p>
          </div>
        </div>
        <div className="youtubevedio_div_text">
          <div>
            <AspectRatio maxW="560px" ratio={1}>
              <iframe
                style={{ height: '400px', borderRadius: '10px' }}
                src="https://www.youtube.com/embed/4uu-mKoFR6w"
                title="What is Crowdfunding? | Ketto"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              />
            </AspectRatio>
          </div>
          <div>
            <div className="vediosidepart">
              {' '}
              So how does Crowdfunding work On Ketto?{' '}
            </div>
            <div className="vediosidedesc">
              {' '}
              Let us assume an individual, unfortunately, meets with
              an accident on the road. His medical expenses and
              hospital bills start piling up. Now he needs ₹5 Lakh to
              pay his expensive medical bills. Fortunately, his best
              friend signed up on Ketto’s crowdfunding platform,
              completed the process of submitting valid documents
              needed for verification. In a few minutes, he created a
              crowdfunding campaign to raise funds for his friend’s
              medical expenses. Now, this campaign can be shared with
              all his near and dear ones through WhatsApp, Instagram,
              Twitter, Facebook and E-mail. In a matter of few
              minutes, funds start coming in to support the financial
              needs of the injured friend.{' '}
            </div>
          </div>
        </div>
        <div>
          <h2
            style={{
              fontWeight: 'bold',
              fontSize: '36px',
              lineHeight: '45px',
            }}
          >
            Start a Fundraiser in three simple steps
          </h2>
          <div className="Secound_Main_Div">
            <div style={{ display: 'flex', marginTop: '50px' }}>
              <img
                style={{ height: '450px', marginRight: '30px' }}
                src="https://ketto.gumlet.io/assets/images/homepage/sac-separator.png?w=100&dpr=2.0"
                alt="image"
              />
              <div>
                <p className="spanasdlP">Start your fundraiser</p>
                <p className="spanasldf">
                  It’ll take only 2 minutes. Just tell us a few
                  details about you and the ones you are raising funds
                  for.
                </p>
                <div style={{ marginTop: '100px' }}>
                  <p className="spanasdlP">Share your fundraiser</p>
                  <p className="spanasldf">
                    All you need to do is share the fundraiser with
                    your friends and family. In no time, support will
                    start pouring in.
                  </p>
                  <p className="paasldfhn">
                    Share your fundraiser directly from dashboard on
                    social media.
                  </p>
                </div>
                <div style={{ marginTop: '100px' }}>
                  <p className="spanasdlP">Withdraw Funds</p>
                  <p className="spanasldf">
                    The funds raised can be withdrawn without any
                    hassle directly to your bank account.
                  </p>
                  <p className="paasldfhn">
                    It takes only 5 minutes to withdraw funds on
                    ketto.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <img
                style={{
                  width: '60%',
                  height: '600px',
                  marginTop: '50px',
                }}
                src={img_4}
              />
            </div>
          </div>
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2,1fr)',
            marginTop: '50px',
          }}
        >
          <div>
            <Stack align="center">
              <Button
                style={{ width: '400px', borderRadius: '10px' }}
                colorScheme="twitter"
                size="lg"
              >
                START A FUNDRAISER FOR FREE
              </Button>
            </Stack>
          </div>
          <div>
            <Stack align="center">
              <Button
                style={{ width: '400px', borderRadius: '10px' }}
                colorScheme="twitter"
                variant="outline"
              >
                TALK TO US
              </Button>
            </Stack>
          </div>
        </div>
        <div style={{ display: 'flex', marginTop: '50px' }}>
          <p className="ptagasdflk">
            Have any questions for us? Chat with our team on Facebook
            or WhatsApp now.
          </p>
          <Stack align="center">
            <Button
              style={{
                marginTop: '5px',
                marginLeft: '50px',
                height: '40px',
                borderRadius: '20px',
              }}
              colorScheme="green"
              variant="solid"
              size="lg"
            >
              <img
                style={{ width: '25px', marginRight: '10px' }}
                src={img_3}
                alt="image"
              />
              CHAT WITH US
            </Button>
          </Stack>
          <Stack align="center">
            <Button
              style={{
                marginTop: '5px',
                marginLeft: '50px',
                height: '40px',
                borderRadius: '20px',
              }}
              colorScheme="facebook"
              variant="solid"
              size="lg"
            >
              <img
                style={{ width: '25px', marginRight: '10px' }}
                src={facebook}
                alt="image"
              />
              CHAT WITH US
            </Button>
          </Stack>
        </div>
        <div style={{ marginTop: '100px' }}>
          <img src={img_5} alt="image" />
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2,1fr)',
              marginTop: '30px',
              marginBottom: '50px',
            }}
          >
            <div>
              {' '}
              <Stack align="center">
                <Button
                  style={{ width: '300px' }}
                  colorScheme="twitter"
                  variant="solid"
                >
                  Start a Fundraiser
                </Button>
              </Stack>
            </div>
            <div>
              {' '}
              <Stack spacing={2} align="center">
                <Button
                  style={{ width: '300px' }}
                  colorScheme="twitter"
                  variant="outline"
                >
                  Browse Fundraiser
                </Button>
              </Stack>
            </div>
          </div>
        </div>
      </div>
      <div className="crosal_lastasdlk">
        <h2 className="crosaltopasjdf">
          Most Promising Platform To Raise Funds
        </h2>
        <p className="crosalpnucey">
          Millions of people succesfully raised funds on Ketto for
          their cause. Hear what some of our successful campaigners
          have to say.
        </p>
        <div className="maincrosalcnwo">
          <Carousel breakPoints={breakPoints}>
            <Card data={data} />
            <Card data={data1} />
            <Card data={data2} />
            <Card data={data3} />
            <Card data={data4} />
          </Carousel>
        </div>
      </div>
      <div className="Main_Top_Div">
        <div className="faqsessionwin">
          <h2 className="faqsession">FAQs</h2>
          <hr
            style={{ border: '1px solid grey', borderRadius: '5px' }}
          />
          <div className="chakrafaqsesiion">
            <Accordion>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left">
                      How do I raise funds?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel
                  style={{
                    display: 'flex',
                    justifyContent: 'left',
                    color: '#999999',
                  }}
                >
                  To Start a Fundraiser, follow the three steps:
                  <br /> 1. Sign up on Ketto <br />
                  2. Fill up the form <br />
                  3. Hit Submit
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left">
                      Can I raise funds for a friend as well?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel
                  style={{
                    display: 'flex',
                    justifyContent: 'left',
                    color: '#999999',
                  }}
                >
                  Yes, you can also raise funds for a friend, a loved
                  one or anyone in need during life's crucial moments
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left">
                      Does the raised amount reach the individual
                      directly?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel
                  style={{
                    display: 'flex',
                    justifyContent: 'left',
                    color: '#999999',
                  }}
                >
                  With Ketto, the money you collect goes directly to
                  the bank account associated with your fundraising
                  page. Raising money for yourself or anyone has never
                  been easier.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left">
                      Is it safe?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel
                  style={{
                    display: 'flex',
                    justifyContent: 'left',
                    color: '#999999',
                  }}
                >
                  Your Ketto fundraiser features the very best in
                  secure payment encryption technology. Not only are
                  your donors online payments safe, your money is
                  stored securely until you're ready to request a
                  withdrawal via electronic bank transfer.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left">
                      What if I don't reach my goal?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel
                  style={{
                    display: 'grid',
                    justifyContent: 'left',
                    color: '#999999',
                  }}
                >
                  No problem. You will still receive the raised amount
                  after the transactional processing fee. To know more
                  about transactional processing fee, visit:
                  <p style={{ color: 'blue', cursor: 'pointer' }}>
                    {' '}
                    www.ketto.org/support/plans-and-pricing
                  </p>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left">
                      I have more questions, who do I write to?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel
                  style={{
                    display: 'grid',
                    justifyContent: 'left',
                    color: '#999999',
                  }}
                >
                  You can write to info@ketto.org Know someone who
                  needs funds for medical treatment urgently? Help
                  them out by sharing this information with them.
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
        <div style={{ marginTop: '50px', marginBottom: '50px' }}>
          <div style={{ display: 'flex', marginTop: '50px' }}>
            <p className="ptagasdflk">
              Have any questions for us? Chat with our team on
              Facebook or WhatsApp now.
            </p>
            <Stack align="center">
              <Button
                style={{
                  marginTop: '5px',
                  marginLeft: '50px',
                  height: '40px',
                  borderRadius: '20px',
                }}
                colorScheme="green"
                variant="solid"
                size="lg"
              >
                <img
                  style={{ width: '25px', marginRight: '10px' }}
                  src={img_3}
                  alt="image"
                />
                CHAT WITH US
              </Button>
            </Stack>
            <Stack align="center">
              <Button
                style={{
                  marginTop: '5px',
                  marginLeft: '50px',
                  height: '40px',
                  borderRadius: '20px',
                }}
                colorScheme="facebook"
                variant="solid"
                size="lg"
              >
                <img
                  style={{ width: '25px', marginRight: '10px' }}
                  src={facebook}
                  alt="image"
                />
                CHAT WITH US
              </Button>
            </Stack>
          </div>
        </div>
      </div>
    </>
  );
}
