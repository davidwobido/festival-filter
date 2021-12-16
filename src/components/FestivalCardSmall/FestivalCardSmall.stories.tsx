import FestivalCardSmall from "./FestivalCardSmall";

export default {
  component: FestivalCardSmall,
  title: "Components/Festival Card Small",
};

export const Card = () => (
  <FestivalCardSmall
    name="Summer Breeze"
    location="Dinkelsbühl"
    begin="17.08.2022"
    end="20.08.2022"
    toSearch={() => ""}
  />
);
