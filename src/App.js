
import React from 'react';
import { BrowserRouter as Router, useLocation } from 'react-router-dom';

import Orb from './Orb';

const useQuery = () => {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}

const labels = [
  'Bligatory Score',
  'Community Score',
  'Team Score'
];

// only here for router purposes atm
const OrbWrapper = () => {
  let query = useQuery();

  const percents = query.get('percent').split(',');
  const colors = query.get('color').split(',');
  const sizes = query.get('size').split(',');

  return (
    <div style={{display: 'flex', flexFlow: 'row nowrap', justifyContent: 'space-between', alignItems: 'center'}}>
      {percents.map((perc, index) => (
        <Orb
          colour={colors[index] ?? colors[0] ?? 'red'}
          percent={perc}
          size={sizes[index] ?? sizes[0] ?? 200}
          label={labels[index] ?? labels[0]}
        />
      ))}
    </div>
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
