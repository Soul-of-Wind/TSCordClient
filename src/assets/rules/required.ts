import {FormRule} from '@/components/ui/form/assets/types/FormRule.ts';

const TRUE_VALUES: unknown[] = [0, false];

const required: FormRule = (v: unknown): boolean => TRUE_VALUES.includes(v) || Boolean(v);

export default required;