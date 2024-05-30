import data from '../data/logements.json';
import { createContext } from 'react';
import PropTypes from 'prop-types';

export const AnnounceContext = createContext(null)

const AnnounceContextProvider = (props) => {
    const contextValue = {data}
    return (
        <AnnounceContext.Provider value={contextValue}>
            {props.children}
        </AnnounceContext.Provider>
    )
}

AnnounceContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };

export default AnnounceContextProvider
