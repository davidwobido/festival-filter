import Button from "./Button";

export default {
  component: Button,
  title: "Components/Button",
};

export const Normal = () => <Button size="normal" text="Enter" />;
export const Wide = () => <Button size="wide" text="Filter" />;
export const Small = () => <Button size="small" text="More" />;
