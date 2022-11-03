import React, { useState, createContext } from 'react';

interface Variable {
    isSidebarActive: boolean,

}

const contextDefaultValues: Variable = {
    isSidebarActive: true
}

const VariableContext = createContext<any>(contextDefaultValues);

function VariableProvider(props: any) {

    const [variable, setVariable] = useState<Variable>()

    return (
        <VariableContext.Provider value={[variable, setVariable]}>
            {props.children}
        </VariableContext.Provider>
    );
}

export { VariableContext, VariableProvider };