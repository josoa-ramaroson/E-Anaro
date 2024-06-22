import React, { useState } from 'react';

const CourseTabs = ({ course }) => {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (index) => {
        setActiveTab(index);
    };

    return (
        <div className="px-[6%] py-[2%]">
            <div className="flex overflow-x-auto border-b border-gray-200">
                {course.chapters.map((chapter, index) => (
                    <button
                        key={index}
                        onClick={() => handleTabClick(index)}
                        className={`px-4 py-2 whitespace-nowrap ${
                            activeTab === index
                                ? 'text-blue-500 border-blue-500'
                                : 'text-gray-500 border-transparent'
                        } border-b-2 focus:outline-none`}
                    >
                        {`Chapter ${index+1} : ${chapter.title}`}
                    </button>
                ))}
            </div>
            <div className="mt-4">
                {course.chapters.map((chapter, index) => (
                    <div
                        key={index}
                        className={`${
                            activeTab === index ? 'block' : 'hidden'
                        }`}
                    >
                        {chapter.sections.map((section, idx) => (
                            <div key={idx} className="mb-4">
                                <h3 className="text-lg font-semibold">{section.title}</h3>
                                <p>{section.content}</p>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CourseTabs;
