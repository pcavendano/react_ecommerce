import React,{useState,useEffect} from "react"

const Context = React.createContext();

function ContextProvider(props){
    const [error,setError]=useState(null)
    const [isLoaded,setIsLoaded]=useState(false)
    const [allPhotos, setAllPhotos] = useState([])

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

    function toggleFavorite(id) {
        const updatedArr = allPhotos.map(photo => {
            if(photo.id === id) {
                console.log(id)
                console.log(!photo.isFavorite)
                return {...photo, isFavorite: !photo.isFavorite}
            }
            return photo
        })
        setAllPhotos(updatedArr)
    }

    return(
        
    <Context.Provider value={{allPhotos,toggleFavorite}}>
        {props.children}
    </Context.Provider>
    )
}
export {ContextProvider, Context}