import data from '../data/logements';
import { createContext } from 'react';

export const AnnounceContext = createContext(null)

const AnnounceContextProvider = (props) => {
    const contextValue = {data}
    return (
        <AnnounceContext.Provider value={contextValue}>
            {props.children}
        </AnnounceContext.Provider>
    )
}

export default AnnounceContextProvider
