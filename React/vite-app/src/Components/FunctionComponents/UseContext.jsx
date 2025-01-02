
import Component2 from './ContextComponent/Component2'
import React from 'react'

export var ThemeProvider=React.createContext();
var ExamResults=()=>
{

    return(
        <section>
            <ThemeProvider.Provider value={{GPA:"10",CGPA:"9"}}>
            <h1>This is an example for UseContext - Parent Component</h1>
            <Component2/>
            </ThemeProvider.Provider>
        </section>
    )
}
export default ExamResults