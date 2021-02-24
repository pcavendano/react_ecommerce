import React, { useState, useEffect } from "react";

const Context = React.createContext();

function ContextProvider(props) {
  // eslint-disable-next-line
  const [error, setError] = useState(null);
  // eslint-disable-next-line
  const [isLoaded, setIsLoaded] = useState(false);
  const [allPhotos, setAllPhotos] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  //Add /react_ecommerce to ecommerce_route variable for gh_pages to work
  const ecommerce_route = ``;

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setAllPhotos(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  function toggleFavorite(id) {
    const updatedArr = allPhotos.map((photo) => {
      if (photo.id === id) {
        return { ...photo, isFavorite: !photo.isFavorite };
      }
      return photo;
    });
    setAllPhotos(updatedArr);
  }

  function addImageToCart(newItem) {
    if (cartItems.find((item) => item.id === newItem.id)) {
      const result = cartItems.filter((item) => item.id !== newItem.id);
      setCartItems(result);
    } else {
      setCartItems((prevItems) => [...prevItems, newItem]);
    }
  }

  return (
    <Context.Provider
      value={{
        ecommerce_route,
        allPhotos,
        cartItems,
        setCartItems,
        toggleFavorite,
        addImageToCart,
      }}
    >
      {props.children}
    </Context.Provider>
  );
}
export { ContextProvider, Context };
