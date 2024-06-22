import React, {useState} from 'react'
import Cours from './cours';





export default function MonProgramme({ listeDeMonCours }) {
  const tabs = [
    { title: 'En cours', list: listeDeMonCours },
  ];
  const [activeTab, setActiveTab] = useState(0); // Tracks the currently active tab index

  const handleClick = (index) => {
    setActiveTab(index);
  };


  return (
    <div className=" h-screen pt-16 flex flex-col gap-8">
      <h1 className="text-4xl">Mon Apprentissage</h1>

      <div className="flex flex-col">
        
        <div className="border border-gray-300 rounded p-4 flex flex-col gap-5">
          {tabs[activeTab].list.map((item) => (
            <Cours cours={item} />
          ))}
        </div>
      </div>
    </div>
  )
}
