import { Route, Routes } from "react-router-dom";
import { Layout } from "../layout/layout";


export const AppRoutes = () => (
  <div>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='/shift/all' element={<div>1</div>} />
        <Route path='/shift/current' element={<div>2</div>}/>
      </Route>
    </Routes>
  </div>
)