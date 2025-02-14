import {
    Container,
    Box,
    Flex,
    Spacer,
    Divider,
    Button,
    Center,
    Heading,
    Text,
    Link,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
    useDisclosure,
    useColorModeValue,
} from "@chakra-ui/react"
import { SiEventbrite } from "react-icons/si"
import { FaRegLightbulb } from "react-icons/fa6"
import NextLink from "next/link"
import Layout from "../components/layouts/article"
import AnimatedBox from "../components/animated-box"

const Register = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <Layout title="Register">
            <Container maxW="container.md">
                <AnimatedBox delay={0.1}>
                    <Box
                        borderRadius="lg"
                        mb={6}
                        p={3}
                        textAlign="center"
                        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
                    >
                        <Box pb='1'>
                            <Text as='b' fontSize='xl'>January 18-19, 2025</Text>
                        </Box>

                        <Button onClick={onOpen} bg='cardinal'>Rain Date</Button>

                        <Modal isOpen={isOpen} onClose={onClose} isCentered>
                            <ModalOverlay />
                            <ModalContent>
                                <ModalHeader>HackBI Rain Date</ModalHeader>
                                <ModalCloseButton />
                                <ModalBody>
                                    In case of any inclement weather, HackBI will occur on <b>January 25-26, 2025</b>.
                                </ModalBody>

                                <ModalFooter>
                                    <Button bg='cardinal' mr={3} onClick={onClose}>
                                        Close
                                    </Button>
                                </ModalFooter>
                            </ModalContent>
                        </Modal>
                    </Box>
                </AnimatedBox>

                <AnimatedBox delay={0.15}>
                    <Flex>
                        <Box p={6} width="29ch" borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}>
                            <Center>
                                <Heading as="h3" variant="section-title">Student Registration</Heading>
                            </Center>

                            <Center>
                                <Button
                                    as={NextLink}
                                    href="https://www.eventbrite.com/e/hackbi-viii-tickets-1008426840827"
                                    bg='cardinal'
                                    target="_blank"
                                    leftIcon={<SiEventbrite />}
                                >Register</Button>
                            </Center>

                            <Heading as="h3" variant="section-title">Forms</Heading>
                            Non-Ireton students must print, fill out, and bring
                            the forms to the hackathon
                            <Divider my={6} />

                            <Center>
                                <Box>
                                    <Box>
                                        <Link href="/forms/guest_permission_form.pdf" target="_blank" download="HackBI Guest Permission Form">
                                            Guest Permission Form
                                        </Link>
                                    </Box>
                                </Box>
                            </Center>
                            <Center>
                                <Box>
                                    <Link href="/forms/emergency_care_form.pdf" target="_blank" download="HackBI Emergency Care Form">
                                        Emergency Care Form
                                    </Link>
                                </Box>
                            </Center>
                        </Box>

                        <Spacer />

                        <Box p={6} width="29ch" borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}>
                            <Center>
                                <Heading as="h3" variant="section-title">Adult Registration</Heading>
                            </Center>
                            Sign-up to be an adult volunteer, mentor, or judge!
                            <Divider my={6} />

                            <Heading as="h3" variant="section-title">Adult Volunteers</Heading>
                            <Text fontSize="xs">
                                Supervise and monitor students
                            </Text>
                            <Link href="https://www.signupgenius.com/go/60B054DAAAA2CA6FF2-52416101-hack" target="_blank">
                                <Button
                                    variant="ghost"
                                    color={useColorModeValue('#f0a822', '#f0a822')}
                                    leftIcon={<FaRegLightbulb />}
                                >
                                    Sign Up!
                                </Button>
                            </Link>

                            <Heading as="h3" variant="section-title">Mentors</Heading>
                            <Text fontSize="xs">
                                Offer technical advice and guidance to hackers
                            </Text>
                            <Link href="https://www.signupgenius.com/go/60B054DAAAA2CA6FF2-52416199-hack" target="_blank">
                                <Button
                                    variant="ghost"
                                    color={useColorModeValue('#f0a822', '#f0a822')}
                                    leftIcon={<FaRegLightbulb />}
                                >
                                    Sign Up!
                                </Button>
                            </Link>

                            <Heading as="h3" variant="section-title">Judges</Heading>
                            <Text fontSize="xs">
                                Attend student presentations and choose the best projects to receive prizes
                            </Text>
                            <Link href="https://www.signupgenius.com/go/60B054DAAAA2CA6FF2-52416142-hack" target="_blank">
                                <Button
                                    variant="ghost"
                                    color={useColorModeValue('#f0a822', '#f0a822')}
                                    leftIcon={<FaRegLightbulb />}
                                >
                                    Sign Up!
                                </Button>
                            </Link>
                        </Box>
                    </Flex>
                </AnimatedBox>
            </Container>
        </Layout>
    )
}

export default Register
