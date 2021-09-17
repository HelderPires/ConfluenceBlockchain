
interface ButtonAction {
  text: string;
  type: string;
};
export interface ButtonActionList {
  align?: "start" | "end";
  width?: string;
  buttons: Array<ButtonAction>
}
