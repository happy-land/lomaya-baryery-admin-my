import { Route, Routes } from 'react-router-dom';
import { Horizontal } from '../../stories/stack/stack.stories';
import { Layout } from '../layout/layout';

export const AppRoutes = () => (
  <div>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='/shift/all' element={<Horizontal direction='row' />} />
        <Route path='/shift/current' element={<div>244</div>} />
        <Route path='/shift/new' element={<div>244</div>} />
      </Route>
    </Routes>
  </div>
);

// export const AppRoutes = () => (
//   <div>
//     <Routes>
//       <Route path='/' element={<Layout />} />
//       <Route path='/shift/all' element={<div>1</div>} />
//       <Route path='/shift/current' element={<div>2</div>} />
//     </Routes>
//   </div>
// );
