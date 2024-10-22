import { useState } from "react";
// valami szöveg...



import { Children, createContext } from "react";

export const KattContext = createContext("")
export const KattProvider = ({children})=>{

    const [lista, setLista] = useState([" "," "," ","X","O"," "," ","X","O",])
    const [lepes, setLepes] = useState(0)
  
    function katt(adat){

    const slista = [...lista]

    if (lepes % 2 == 0){
        slista[adat] = "X";
    } else {
        slista[adat] = "O";
    }

    console.log(lepes)
    let sv = lepes;
    sv++;
    setLepes(sv);
    console.log(lepes);

    setLista([...slista])

    console.log(lista)
    }

    return <KattContext.Provider value={{lista, katt}}>
        {children}
        </KattContext.Provider>;
}

