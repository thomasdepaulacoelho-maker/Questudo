import React from 'react'
import QuestItem from './QuestItem'

export default function QuestList({quests, saveEditQuest, saveConcludedQuest, deleteQuest}) {
  return (
    <div className='flex flex-col gap-3 w-full'>
    {
      quests.map((quest) => (
        <QuestItem
        key={quest.id}
        quest={quest}
        saveEditQuest={saveEditQuest}
        saveConcludedQuest={saveConcludedQuest}
        deleteQuest={deleteQuest}
        />
      ))
    }  
    </div>
  )
}
