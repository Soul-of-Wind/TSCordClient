import {FormRule} from '@/components/ui/form/assets/types/FormRule.ts';

export function defineRule(rule: FormRule, message: string) {
  return {
    check: rule,
    message
  };
}
