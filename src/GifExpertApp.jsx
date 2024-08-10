import { useState } from "react"
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'One Piece' ]);

    const onAddCategoria = ( newCategory) => {
        if (categories.includes(newCategory)) return;
        setCategories([ newCategory,...categories ]);
    }

    return (
        <>
            <h2>GifExpertApp</h2>
        
            <AddCategory 
                onNewCategory = { onAddCategoria }
            />

            { 
                categories.map( categories => (
                    <GifGrid key={ categories } category={ categories }/>
                ))
            }
        </>
    )
}

