export type NavbarComponentType = {
  type: 'button' | 'text' | 'icon' | 'dropdown';
  text?: string,
  link?: string
  icon?: any,
  options?: Array<DropdownOptions>
  value?: any
}
type DropdownOptions = {
  text: string,
  value: any
}
