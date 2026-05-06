/**
 * Phone validation shared between forms (client) and the contact API (server).
 *
 * Counts only digits — ignores spaces, dashes, parentheses, leading "+".
 * Forms that prepend a country code (e.g. "+31") still pass since the prefix
 * adds 2 extra digits on top of the 9 the user types locally.
 */

export const PHONE_MIN_DIGITS = 9;

export function countPhoneDigits(input: string): number {
  return input.replace(/\D/g, "").length;
}

export function isPhoneValid(input: string): boolean {
  return countPhoneDigits(input) >= PHONE_MIN_DIGITS;
}
