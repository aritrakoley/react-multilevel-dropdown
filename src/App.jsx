import { options, fruitsData } from "./data";
import MultiLevelDropdown from "./components/MultiLevelDropdown";
function App() {
  return (
    <div className="w-[100%] h-[100vh] flex flex-col gap-2 items-center justify-center">
      App
      <div className="flex flex-col border-4 rounded-lg border-gray-700 p-2">
        <MultiLevelDropdown options={fruitsData} direction="down-right" />
      </div>
    </div>
  );
}

export default App;
