import { Box, Text, LinkBox, LinkOverlay, Image, Center } from '@chakra-ui/react'
import { Global } from '@emotion/react'

export const Sponsor = ({ href, title, thumbnail }) => (
    <Box w="100%" textAlign="center">
        <LinkBox cursor="pointer">
            <Center>
                <Image
                    src={thumbnail}
                    width="100"
                    height="100"
                    alt={title}
                    className="sponsor-thumbnail"
                    placeholder="blur"
                    loading="lazy"
                />
            </Center>
            <LinkOverlay href={href} target="_blank">
                <Text mt={2}>{title}</Text>
            </LinkOverlay>
        </LinkBox>
    </Box>
)

export const SponsorStyle = () => (
    <Global
        styles={`
        .sponsor-thumbnail {
            border-radius: 12px;
        }
    `}
    />
)

export default Sponsor