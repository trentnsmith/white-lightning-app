import React from 'react';
import DATA from './dummy-data';

const SpiritContext = React.createContext({
    distills: DATA.distills,
    spirits: DATA.spirits
});

export default SpiritContext;