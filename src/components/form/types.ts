import { ErrorList, RuleItem } from 'async-validator';

const FORMKEY = 'formKey';
const FORMITEMKEY = 'formItemKey';

type validateCb = (callback: (valid: boolean) => void) => Promise<boolean | ErrorList>

interface FORMCONTEXT {
  model: Record<string, any>;
  rules: FtFormRules,
  validate: validateCb;
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
  validateCb,
}