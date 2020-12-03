/* eslint-disable import/prefer-default-export */
import { CSS_TRAINING_DATA } from './data-css';

function check(item: number, value: string): boolean {
  const { answer } = CSS_TRAINING_DATA.tasks[item - 1];
  const newValue = value.trim();
  if (newValue.includes('. ') && newValue.includes('# ')) {
    return false;
  }
  if (newValue.split(' ').length !== answer.split(' ').length) {
    return false;
  }
  if (newValue.replace(/\s+/g, '') !== answer.replace(/\s+/g, '')) {
    return false;
  }
  return value.trim() === answer;
}

export { check };
