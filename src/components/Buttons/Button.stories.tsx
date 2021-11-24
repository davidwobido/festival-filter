import Button from "./Button";

export default {
  component: Button,
  title: "Components/Button",
};

export const Normal = () => <Button size="normal" text="Filter" />;
export const Wide = () => <Button size="wide" text="hallo" />;
export const Small = () => <Button size="small" text="Filter" />;
