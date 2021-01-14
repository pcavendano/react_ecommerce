import React,{useState,useEffect} from "react"

const Context = React.createContext();

function ContextProvider(props){
    const [error,setError]=useState(null)
    const [isLoaded,setIsLoaded]=useState(false)
    const [allPhotos, setAllPhotos] = useState([])

    const toggleFavorite=(id)=>{
        const trouve = allPhotos.find((element=>
            element.id ===id))
        trouve.isFavorite === false?trouve.isFavorite=true:trouve.isFavorite=false
        
    }
    useEffect(()=>{
        fetch("https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json")
        .then(res=>res.json())
        .then(
            (result)=>{
                setIsLoaded(true)
                setAllPhotos(result)
            },
            (error)=>{
                setIsLoaded(true);
                setError(error);
            }
        )
    },[])

    return(
        
    <Context.Provider value={{allPhotos,toggleFavorite}}>
        {props.children}
    </Context.Provider>
    )
}
export {ContextProvider, Context}