const FORMITEMKEY = 'formItemKey';

interface FORMITEMCONTEXT {
  handlerControlChange(value: string): void;
  handlerControlBlur(value: string): void;
}
export {
  FORMITEMKEY,
  FORMITEMCONTEXT,
}