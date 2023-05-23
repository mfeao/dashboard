import React, { FunctionComponent } from 'react';
import { useRoutes } from 'react-router-dom';
import routes from './routes';

const App: FunctionComponent = () => {
  const content = useRoutes(routes);

  return (
    <div className="container">
      {content}
    </div>
  );
};

export default App;
