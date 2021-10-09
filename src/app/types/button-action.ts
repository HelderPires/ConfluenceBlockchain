
type ButtonAction = {
  text: string;
  type: string;
};
export type ButtonActionList = {
  align?: "start" | "end";
  width?: string;
  buttons: Array<ButtonAction>
}
