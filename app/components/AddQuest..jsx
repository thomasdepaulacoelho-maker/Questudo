"use client"
import React, { useState } from "react";

export default function AddQuest({saveAddQuest}) {
    const [title, setTitle] = useState('')
    const [priority, setPriority] = useState('Normal')

    function handleSubmit(e){
        e.preventDefault()
        if(!title.trim()) return
        saveAddQuest(title, priority)
        setTitle("")
        setPriority("Normal")
    }

    return (
        <div className="w-full">
            <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-full">
                <input type="text" 
                    placeholder="Informe o titulo da missão"
                    value={title}
                    className="p-2 rounded border"
                    onChange={(e) => setTitle(e.target.value)}
                />
                <select value={priority} className="p-2 rounded border" onChange={(e) => setPriority(e.target.value)} name="" id="">
                    <option value="Urgente">Urgente</option>
                    <option value="Urgente, mas nem tanto">Urgente, mas nem tanto</option>
                    <option value="Normal">Normal</option>
                    <option value="Baixa prioridade">Baixa prioridade</option>
                </select>
                <button type='submit' className='bg-orange-500 p-2 rounded-2xl text-white'>
                    Adicionar
                </button>
            </form>
        </div>
    )
}