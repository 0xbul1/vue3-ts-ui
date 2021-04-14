import { ErrorList, RuleItem } from 'async-validator';

const FORMKEY = 'formKey';
const FORMITEMKEY = 'formItemKey';

type validateCb = (callback: (valid: boolean) => void) => Promise<boolean | ErrorList>

interface FORMCONTEXT {
  model: Record<string, any>;
  rules: FtFormRules;
  validate: validateCb;
  addItem(item: Partial<FORMITEMCONTEXT>): void;
  removeItem(id: string): void;
}

interface FORMITEMCONTEXT {
  id: string;
  prop: string;
  validate: (value: string) => Promise<boolean | ErrorList>;
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