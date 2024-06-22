import React, {useState} from 'react'
import Cours from './cours';





export default function MonProgramme({ listeDeMonCours, listeDeMonCoursComplet }) {
  const tabs = [
    { title: 'En cours', list: listeDeMonCours },
    { title: 'Finis', list: listeDeMonCoursComplet},
  ];
  const [activeTab, setActiveTab] = useState(0); // Tracks the currently active tab index

  const handleClick = (index) => {
    setActiveTab(index);
  };


  return (
    <div className="w-[50%] h-screen pt-16 flex flex-col gap-8">
      <h1 className="text-4xl">Mon Apprentissage</h1>



      <div className="flex flex-col">
        <ul className="flex mb-4">
          {tabs.map((tab, index) => (
            <li
              key={index}
              className={`px-5 py-2 cursor-pointer text-lg hover:bg-gray-200 ${index === activeTab ? ' text-primary ' : 'text-gray-600'}`}
              onClick={() => handleClick(index)}
            >
              {tab.title}
            </li>
          ))}
        </ul>
        <div className="border border-gray-300 rounded p-4 flex flex-col gap-5">
          {tabs[activeTab].list.map((item) => (
            <Cours cours={item} />
          ))}
        </div>
      </div>
    </div>
  )
}
