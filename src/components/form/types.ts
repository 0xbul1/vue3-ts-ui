import { RuleItem } from 'async-validator';

const FORMITEMKEY = 'formItemKey';

interface FORMITEMCONTEXT {
  handlerControlChange(value: string): void;
  handlerControlBlur(value: string): void;
}

type ValidTrigger = 'change' | 'blur';

interface FtRuleItem extends RuleItem {
  trigger?: ValidTrigger;
}

export {
  FORMITEMKEY,
  FORMITEMCONTEXT,
  FtRuleItem,
  ValidTrigger,
}