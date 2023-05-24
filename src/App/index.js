import React from "react";

import { AppIU } from "./AppIU";
import { TareasProvider } from "./TareasContext";


function App() {
  

  return (
    <TareasProvider>
    <AppIU />
  </TareasProvider>
    
  );
}

export default App;
