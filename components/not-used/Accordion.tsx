// import React from "react";
// import { createContext } from "vm";

// const AccordionContext = createContext();

// export default function Accordion({ children, value, onChange, ...props }) {

//   const [selected, setSelected] = React.useState(value);

//   React.useEffect(() => {
//     onChange?.(selected);
  
//     return () => {
      
//     }
//   }, [selected])
  
//   return (
//     <ul {...props}>
//       <AccordionContext.Provider value={{ selected, setSelected }}>
//         {children}
//       </AccordionContext.Provider>
//     </ul>
//   )
// }