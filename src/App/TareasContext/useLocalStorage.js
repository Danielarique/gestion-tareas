import React from "react";

function useLocalStorage(itemName, initialValue){
    const  [item, setItem] = React.useState(initialValue);
    React.useEffect(()=>{
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
          setItem(parsedItem);
        }
    }, [])

    const guardarItem = (newItems) => {
      localStorage.setItem("Tareas", JSON.stringify(newItems));
      setItem(newItems);
    };
   

    return { item, guardarItem }
}

export { useLocalStorage };
