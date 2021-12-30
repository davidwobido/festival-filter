export type FestivalPlaceholderTypes = {
  id: string;
  name: string;
  location: string;
  begin: string;
  end: string;
  visitors: number;
  acts: number;
  price: number;
  allacts: string;
  electronic?: number;
  metal?: number;
  reggae?: number;
  pop?: number;
  classic?: number;
  jazz?: number;
  punk?: number;
  indie?: number;
  rock?: number;
  hiphop?: number;
  value: number;
};

export type GenrePlaceholderTypes = {
  electronic?: number;
  metal?: number;
  reggae?: number;
  pop?: number;
  classic?: number;
  jazz?: number;
  punk?: number;
  indie?: number;
  rock?: number;
  hiphop?: number;
};

export type NavigateToProps = {
  navigateTo: string;
};

export type ButtonProps = {
  size: "normal" | "wide" | "small";
  text: string;
  onClick?: () => void;
};

export type FestivalCardLargeProps = {
  name: string;
  location: string;
  begin: string;
  end: string;
  visitors: number;
  acts: number;
  price: number;
  allacts: string;
  website: string;
  close?: () => void;
};

export type FestivalCardMediumProps = {
  name: string;
  location: string;
  begin: string;
  end: string;
  price: number;
  allacts: string;
  value?: number;
  color: "green" | "orange";
  toSearch: (value: string) => void;
};

export type FestivalCardSmallProps = {
  name: string;
  location: string;
  begin: string;
  end: string;
  toSearch: (value: string) => void;
};

export type GenreTagProps = {
  tag: {
    text: string;
    selected: boolean;
    id: number;
  };
  onClick: (value: number) => void;
};

export type SearchBarProps = {
  onSearch: (value: string) => void;
};
