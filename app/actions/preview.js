// @flow
export const PREVIEW = 'PREVIEW';

export function preview(markdown: string = '') {
  return {
    type: PREVIEW,
    markdown
  };
}
