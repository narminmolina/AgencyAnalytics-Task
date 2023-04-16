import { FigureDetails } from 'components/FigureDetails';
import styles from 'styles/modules/Modal.module.css';
import { CloseIcon } from 'svg/CloseIcon';
import { useDispatch } from 'redux/store';
import { setAsideProps } from 'redux/reducer';

export const Modal = () => {
  const dispatch = useDispatch();

  const handleCloseButtonClick = () => dispatch(setAsideProps({ isAsideOpen: false, activeImage: null }));

  return (
    <div className={styles.modal}>
      <button className={styles.closeButton} onClick={handleCloseButtonClick}>
        <CloseIcon />
      </button>
      <FigureDetails />
    </div>
  );
};
