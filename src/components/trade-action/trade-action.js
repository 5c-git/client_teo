import './trade-action.scss';

const tradeActionInit = () => {
  let isOpen = false;

  const closeAll = () => {
    document.querySelectorAll('.trade-action--active').forEach((el) => {
      el.classList.remove('trade-action--active');
      isOpen = false;
    });
  };

  const onDocumentClick = (evt) => {
    if (isOpen) {
      closeAll();
    }
    if (evt.target.classList.contains('trade-action__button')
      && !evt.target.parentElement.classList.contains('trade-action--active')) {
      evt.target.parentElement.classList.add('trade-action--active');
      isOpen = true;
    }
  };

  document.addEventListener('click', onDocumentClick);
};

tradeActionInit();

export default tradeActionInit;
