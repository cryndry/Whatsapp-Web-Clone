import LeftPanel from './components/LeftPanel/LeftPanel';
import RightPanel from './components/RightPanel/RightPanel';

const App = () => (
  <div className='App' style={{ display: "flex" }}>
    <LeftPanel />
    <RightPanel />
  </div>
)

export default App;