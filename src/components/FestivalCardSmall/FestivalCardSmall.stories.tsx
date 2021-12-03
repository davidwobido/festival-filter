import FestivalCardSmall from "./FestivalCardSmall";

export default {
  component: FestivalCardSmall,
  title: "Components/Festival Card Small",
};

export const Card = () => (
  <FestivalCardSmall
    name="Southside"
    location="Neuhausen ob Eck"
    begin="17.06.2022"
    end="19.06.2022"
  />
);
