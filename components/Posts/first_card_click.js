export const firstCardOnClick = (scrollDownInfo, setScrollDownInfo, text) => {
  scrollDownInfo === '' ? setScrollDownInfo(text) : setScrollDownInfo('');
};

export const firstCardEffect = (scrollDownInfo, AdditionalInfoScrollDownRef) => {
  scrollDownInfo !== '' &&
    AdditionalInfoScrollDownRef.current.scrollIntoView &&
    AdditionalInfoScrollDownRef.current.scrollIntoView({ behavior: 'smooth' });
};
