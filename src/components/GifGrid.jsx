import { GifGridItem } from './GIfGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ category }) => {

    const { images, isLoading} = useFetchGifs( category );

    console.log( isLoading );
    return (
        <div>
            <h3>{ category }</h3>

            { isLoading && <p>Loading...</p> }

            <div className='card-grid'>
                {
                    images.map( ( images ) => (
                        <GifGridItem 
                            key={images.id} 
                            { ...images }
                        />
                    ))
                }
            </div>
            
        </div>
    )
}