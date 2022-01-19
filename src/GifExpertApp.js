import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = ({defaultCategories = []}) => {
    //const [categories, setCategories] = useState(['Hi!']);
    const [categories, setCategories] = useState(defaultCategories);

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