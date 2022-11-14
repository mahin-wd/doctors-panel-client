import { RouterProvider } from 'react-router-dom';
import router from './Routes/Common/Routes';
import './App.css';

function App() {
  return (
    <div className="App max-w-[1440px] mx-auto text-accent">
      <RouterProvider  router={router}/>
      
    </div>
  );
}

export default App;
