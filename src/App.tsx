import { useAppSelector } from "./store";
import { Gallery } from "./components";
import { selectFiles } from "./store/paginationSlice";

import "./index.css";

const App = () => {
  const files = useAppSelector(selectFiles);

  return (
    <div className="app">
      <Gallery images={files} />
    </div>
  );
};

export default App;
