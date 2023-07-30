// Card components
import {
    Card as CardBase,
    CardBody,
    CardFooter,
} from '@chakra-ui/react'

// Modal components
import { Skeleton as SkeletonBox, SkeletonText } from '@chakra-ui/react'
export default function Skeleton() {


    return (
        <>
            <CardBase
                width={{ base: 'xs', sm: 'sm', md: 'md', xl: 'lg' }}
                bg={"dark_slate.900"}
                color={'white'}
                boxShadow={'sm'}
                borderRadius={'lg'}>

                <SkeletonBox height={250} width={'full'} />

                <CardBody py={4}>
                    <SkeletonText noOfLines={1} spacing='4' skeletonHeight='4' />
                </CardBody>

                <CardFooter
                    p={2}
                    pt={0}
                    justify='space-between'
                    flexWrap='wrap'
                    sx={{
                        '& > button': {
                            minW: '136px',
                        },
                    }}
                >
                    <SkeletonText noOfLines={1} spacing='4' w={'45%'} skeletonHeight='4' />

                    <SkeletonText noOfLines={1} spacing='4' w={'45%'} skeletonHeight='4' />

                </CardFooter>
            </CardBase >

        </>
    )
}