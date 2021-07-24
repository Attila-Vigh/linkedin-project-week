import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { AUTHORIZATION } from '../../hidden/credentials'
import SinglePost from './SinglePost'
import ProfileBox from '../ProfileBox'
import NewsFeedPoster from '../NewsFeed/NewsFeedPostInput/Home-Top'
import HomeAsideNewsAndTopCourses from './HomeAsideNewsAndTopCourses/HomeAsideNewsAndTopCourses';
import HomeAsideItem from './HomeAsideNewsAndTopCourses/HomeAsideItem';
import useFetch from '../../util/useFetch';
import CheckForErrorAndPending from '../../util/CheckForErrorAndPending';


export default function HomePage({...userFetch}) {

    
    
    const URL = 'https://striveschool-api.herokuapp.com/api/posts/'
    const { dataList: posts, isPending, isError } = useFetch( URL, AUTHORIZATION )
    

    return (
        <Container id='profilepage' className='mt-3'>
            <CheckForErrorAndPending isPending={ isPending } isError={ isError } />
            <Row>
                <Col className='col-md-2 ordder-md-1 '>
                    <ProfileBox {...userFetch}/>
                </Col>
                <Col className='col-md-6 ordder-md-2 px-3 pl-4 '>
                    <NewsFeedPoster {...userFetch}/>
                    {
                        posts && 
                        posts.sort((a,b) => a.createdAt <  b.createdAt? 1 : -1).slice(0, 10).map( post => 
                            < SinglePost key={ post._id } user={post}/>)
                    }
                </Col>
                <Col className='col-md-4 ordder-md-3'>
                        <HomeAsideNewsAndTopCourses>
                            <HomeAsideItem 
                                title="LinkedIn News"
                                infoIcon="These are the day’s top professional news stories and conversations. Learn more about how they’re selected."
                                infoList={[ 
                                    { subTitle: '‘Pingdemic’ hits supermarket shelves ' , time: '2h ago' , readers: "670 "     },
                                    { subTitle: "Netflix CEO responds to 'Slack firing'", time: '1d ago' , readers: "364,268 " },
                                    { subTitle: "'Tell me about your hobbies'"          , time: '17h ago', readers: "71,738 "  },
                                    { subTitle: 'My salary? Shhh, it’s a secret '       , time: '3d ago' , readers: "37,540 "  },
                                    { subTitle: 'Europe’s first ‘super app’?'           , time: '22h ago', readers: "4,750 "   },
                                    { subTitle: 'Govt triples initial NHS pay offer '   , time: '10h ago', readers: "1,646 "   },
                                    { subTitle: 'Border checks cut for UK travellers '  , time: '1d ago' , readers: "3,648 "   },
                                    { subTitle: 'How many careers should you have?'     , time: '2d ago' , readers: "5,212 "   },
                                    { subTitle: 'Are new tech habits here to stay?'     , time: '1d ago' , readers: "1,106 "   },
                                    { subTitle: 'Business backlash over ‘pingdemic’ '   , time: '2d ago' , readers: "4,814 "   },
                                ]}
                            />
                            <HomeAsideItem 
                                title="Today’s top courses"
                                infoIcon="These are the day’s trending courses on LinkedIn Learning."
                                ulOrOl="ol"
                                infoList={[ 
                                    { subTitle: 'Practices for Regulating Your Nervous System and Reducing Stress' , time: 'Jay Fields'},
                                    { subTitle: "Digital Transformation", time: 'Peter High' , },
                                    { subTitle: "15 Secrets Successful People Know about Time Management (getAbstract Summary)" , time: 'getAbstract', },
                                ]}
                            />
                        </HomeAsideNewsAndTopCourses>
                </Col>
            </Row>
        </Container>
    )
}
