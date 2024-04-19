import { Button as AButton } from "esrafil-btn-component";
import { Button } from "./components/Button";
import VerticalCarousel from "./components/VerticalCarousel";
import VerticalCarouselItem from "./components/VerticalCarouselItem";

function App() {
  const data = [
    {
      id: 1,
      name: "name 1",
    },
    {
      id: 2,
      name: "name 2",
    },
    {
      id: 3,
      name: "name 3",
    },
    {
      id: 4,
      name: "name 4",
    },
    {
      id: 4,
      name: "name 4",
    },
    {
      id: 4,
      name: "name 4",
    },
    {
      id: 4,
      name: "name 4",
    },
  ];

  return (
    <div className="w-full h-full">
      <div className="w-[30rem] mx-auto">
        <VerticalCarousel data={data} CardItem={VerticalCarouselItem} />
      </div>
    </div>
  );
}

export default App;
