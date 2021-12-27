
import React from 'react';
import { BrowserRouter as Router, useLocation } from 'react-router-dom';

import Orb from './Orb';

const useQuery = () => {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}

// only here for router purposes atm
const OrbWrapper = () => {
  let query = useQuery();

  return (
    <Orb colour={query.get('color')} percent={parseFloat(query.get('percent'))} size={parseInt(query.get('size'))} />
  );
}

function App() {
  return (
    <Router>
      <OrbWrapper />
    </Router>
  )
}

export default App;
