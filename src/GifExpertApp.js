import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['Hi!']);

    return (
        <>
            <h2 className='title'>GifExpertApp ✨</h2>
            <h3 className='sub'> by Sebastián Rubio 🦔</h3>
            <AddCategory setCategories={setCategories}/>
            <ol>
                { 
                    categories.map(category => 
                        <GifGrid 
                            key = { category }
                            category = { category } 
                        />
                    )
                }
            </ol>
        </>
    )
}