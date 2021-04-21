import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = ({defaultCategories = []}) => {

    //const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];

    //const [categories, setCategories] = useState(['One Punch']);
    const [categories, setCategories] = useState(defaultCategories);

    // const handleAdd = () => {
    //     setCategories([...categories, 'HunterAdd'])
    //     setCategories( cats => [...categories, 'HunterAdd'])
    // }

    return ( 
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories }/>
            <hr />

            {/* <button onClick={() => setCategories(['HunterAdd', ...categories])}>Agregar</button> */}

            <ol>
                {
                    categories.map((category) => (
                        <GifGrid 
                            key={ category } 
                            category={ category }
                        />
                    ))
                }
            </ol>
        </>
     );
}

