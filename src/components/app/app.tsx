import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from '../app-routes/app-routes';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </div>
  );
};

export default App;