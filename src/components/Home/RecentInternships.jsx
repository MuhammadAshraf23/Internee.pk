import React from 'react'
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { Button, Typography } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import { IoLocationOutline } from 'react-icons/io5'
import { BiTime } from 'react-icons/bi'
const trendingCardData = [
    {
        image:
            'https://internee.pk/images/jobs/analysis.jpg',
        title:
            'Data Analyist',
    },
    {
        image:
            'https://internee.pk/images/jobs/hack.jpeg',
        title:
            'Cyber Security',
    },
    {
        image:
            'https://internee.pk/images/jobs/cloud.jpg',
        title:
            'Cloud Computing',
    },
    {
        image:
            'https://internee.pk/images/jobs/FrontEnd.jpeg',
        title:
            'Frontend Developement',
    },
    {
        image:
            'https://internee.pk/images/jobs/BackendDevelopment.jpeg',
        title:
            'Backend Developement',
    },
    {
        image:
            'https://internee.pk/images/jobs/chatbotDevelopment.jpeg',
        title:
            'Chatbot Developement',
    },
    {
        image:
            'https://internee.pk/images/jobs/Machine%20Learning.jpeg',
        title:
            'Machine Learning',
    },
    {
        image:
            'https://internee.pk/images/jobs/Mobile%20App%20Developer.jpeg',
        title:
            'Mobile App Developement',
    },
    {
        image:
            'https://internee.pk/images/jobs/logo-designer-working-computer-desktop.jpg',
        title:
            'Graphic Design',
    },
];
const RecentInternships = () => {

    return (
        <>  <div className='mx-auto'>
            <div className='flex flex-wrap justify-between my-10'>
                {trendingCardData.map((items) => (
                    <div className='w-full sm:w-1/2 md:w-1/2 lg:w-1/3 px-3 py-5 hover:shadow-2xl' key={items.title}>
                        <Card className='all-card'>
                            <CardMedia
                                component="img"
                                height="194"
                                image={items.image}
                                alt="Image"
                            />
                            <CardContent>
                                <Typography variant="h6" fontWeight="bold">
                                    {items.title}
                                </Typography>
                                <div className='flex items-center ' >
                                    <IoLocationOutline className='text-green-500' /> <p className='mr-5 ml-1 text-gray-400'>Remote</p>
                                    <BiTime className='text-green-500' /> <p className='ml-1 text-gray-400'>1 Month</p>
                                </div>
                            </CardContent> <hr />
                            <div className='flex justify-end py-5 px-5'>
                                <Button variant="contained" style={{ borderRadius: '30px', padding: '10px 12px' }}>Apply Now</Button>
                            </div>
                        </Card>
                    </div>
                ))}

            </div>
            <div className='flex justify-end pb-10'>
            <Button variant="contained" style={{ borderRadius: '30px', padding: '20px 40px', textTransform: 'capitalize',fontSize:"20px" }}>Browser Internships</Button>
        </div>
        </div>
        </>
    )
}

export default RecentInternships