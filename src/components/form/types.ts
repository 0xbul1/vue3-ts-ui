import { RuleItem } from 'async-validator';

const FORMITEMKEY = 'formItemKey';

interface FORMITEMCONTEXT {
  handlerControlChange(value: string): void;
  handlerControlBlur(value: string): void;
}

interface FtRuleItem extends RuleItem {
  trigger?: 'change' | 'blur';
}

export {
  FORMITEMKEY,
  FORMITEMCONTEXT,
  FtRuleItem
}