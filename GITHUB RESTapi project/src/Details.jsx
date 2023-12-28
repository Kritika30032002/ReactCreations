import React from 'react'
import { Card, CardHeader,Image, Heading,Text, Divider, Button, ButtonGroup,Stack,CardBody, CardFooter } from '@chakra-ui/react'
import "./Detail.css"
const Details = ({data , repositories}) => {
  return (


    <>

    <div className="detail">

    <div className="profile">

    <Card maxW='sm'>
  <CardBody>
    <Image
      src={data.avatar_url}
      alt='user image/avataurl'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>{data.name}</Heading>
      <Text>
      {data.bio}
      </Text>
      <Text color='blue.600' fontSize='2xl'>
      {data.location}
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    
  </CardFooter>
</Card>

    </div>
    
    
    
    
    <div className="repo">


<Button variant='solid' colorScheme='blue'>
  Repositories
      </Button>
    
          {repositories.map(repo => (
            <div className="" key={repo.name}>
              
                <div className="">
                  <a href={repo.html_url} className="" target="_blank">
                    {repo.name}
                  </a>
                </div>
              </div>
            
          ))}

    </div>





    </div>
        
    </>



  )
}

export default Details