export interface FormField {
  label: string;
  type: 'color' | 'date' | 'datetime-local' | 'email' | 'month' | 'number' | 'password' | 'search' | 'tel' |  'text' | 'time' | 'url' | 'week';
  controlName: string;
};
