import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import NavHeader from '../components/NavHeader';
import axios from 'axios';
import CourseTabs from './components/course-tab';

export default function CourseDetails() {

    const { courseTitle } = useParams();

    const [course, setCourse] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCourse = async () => {
            try {
                setIsLoading(true);
                const response = await axios.get(`http://localhost:8082/cours/${encodeURIComponent(courseTitle)}`);
                setCourse(response.data);
                setIsLoading(false);
            } catch (error) {
                setError(error.message);
                setIsLoading(false);
            }
        };

        fetchCourse();
    }, [courseTitle]);
    return (
        <div >
            <div className="bg-secondary py-3 pr-[6%] shadow-xl">
                <NavHeader />
            </div>
            <div className="h-screen w-screen-w-70  ">
                <div className="flex flex-col  gap-10 items-stretch pt-10 w-screen h-screen " >
                    {isLoading && <p>Loading</p>}
                    {!isLoading && <div>
                        <h1 className="text-title px-10 border-b-2 border-b-gray-500 text-center">{course.courseTitle}</h1>
                        <div  className="px-24" >
                            <CourseTabs course={course} />
                        </div>
                    </div>}
                </div>
            </div>
        </div>
    )
}
