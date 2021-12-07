import GenreTag from "./GenreTag";

export default {
  component: GenreTag,
  title: "Components/Genre Tag",
};

export const Metal = () => (
  <GenreTag tag={{ text: "Metal", selected: true, id: 1 }} onClick={() => ""} />
);

export const Indie = () => (
  <GenreTag
    tag={{ text: "Indie", selected: false, id: 2 }}
    onClick={() => ""}
  />
);
