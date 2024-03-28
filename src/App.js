import React, { Suspense, lazy } from 'react';
import './App.css';
import { Routes, Route} from 'react-router-dom';

const Home = lazy(() => import('./pages/home'));
const Test1 = lazy(() => import('./pages/test1'));
const Test2 = lazy(() => import('./pages/test2'));
const Test3 = lazy(() => import('./pages/test3'));
const Test4 = lazy(() => import('./pages/test4'));
const Test5 = lazy(() => import('./pages/test5'));
const Test6 = lazy(() => import('./pages/test6'));
const Final = lazy(() => import('./pages/final'));
const Dhekq1 = lazy(() => import('./pages/dhekq1'));
const Dhekq2 = lazy(() => import('./pages/dhekq2'));

function App() {
  return (
    <Suspense fallback={<Home />}>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/test1' element={<Test1 />} />
          <Route path='/test2' element={<Test2 />} />
          <Route path='/test3' element={<Test3 />} /> {/* db 연동 할 땐 NoteList/:_id로 변경해야함*/}
          <Route path='/test4' element={<Test4 />} /> {/* db 연동 할 땐 MeetingDetail/:_id로 변경해야함*/}
          <Route path='/test5' element={<Test5 />} />
          <Route path='/test6' element={<Test6 />} />{/* db 연동 할 땐 NoteDetail/:_id로 변경해야함*/}
          <Route path='/Final' element={<Final />} />
          <Route path='/Dhekq1' element={<Dhekq1 />} />
          <Route path='/Dhekq2' element={<Dhekq2 />} />
        </Routes>
    </Suspense>
  );
}

export default App;

