import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = ( category ) => {

    //nunca colocar llamadas a funciones dentro de un functional component
    const [gifs, setGifs] = useState([]);
    const [isLoading, setIsLoading] = useState( true );


    const newGifs = async () => {
        const imagesGif = await getGifs(category);
        setGifs(imagesGif);
        setIsLoading(false);
    };

    useEffect(() => {
        newGifs();
    }, []);

    return {
        gifs,
        isLoading
    }
}
