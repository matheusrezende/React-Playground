import {MATCH_INITIALS} from '../Constants/Regex';

export const getInitials = (name) => {
  let initials = name.match(MATCH_INITIALS) || [];
  initials = ((initials.shift() || '') + (initials.pop() || '')).toUpperCase();
  return initials
}
