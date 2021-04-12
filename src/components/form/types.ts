import { RuleItem } from 'async-validator';

const FORMKEY = 'formKey';
const FORMITEMKEY = 'formItemKey';

interface FORMCONTEXT {
  model: Record<string, any>;
  rules: FtFormRules,
}

interface FORMITEMCONTEXT {
  handlerControlChange(value: string): void;
  handlerControlBlur(value: string): void;
}

type ValidTrigger = 'change' | 'blur';

interface FtRuleItem extends RuleItem {
  trigger?: ValidTrigger;
}

interface FtFormRules {
  [key: string]: FtRuleItem | FtRuleItem[];
}

export {
  FORMKEY,
  FORMITEMKEY,
  FORMCONTEXT,
  FORMITEMCONTEXT,
  FtRuleItem,
  ValidTrigger,
  FtFormRules,
}