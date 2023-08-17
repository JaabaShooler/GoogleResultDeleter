export const GOOGLE_FIRST_CHILD_SELECTOR = '#rso > div:first-child';
export const GOOGLE_URL_MATCH = 'https://www.google.com/search?q';

export const deleteFirstResult = () => {
  const res = document.querySelector(GOOGLE_FIRST_CHILD_SELECTOR);
  if (res) {
    res.remove();
  }
};
