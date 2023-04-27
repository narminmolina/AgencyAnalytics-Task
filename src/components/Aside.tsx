import { FigureDetails } from 'components/FigureDetails';
import { classNames } from 'utils';
import styles from 'styles/modules/Aside.module.css';
import { useDispatch } from 'redux/store';
import { useEscKeyPress } from 'hooks/useEscKeyPress';
import { setAsideProps } from 'redux/reducer';
import { useOnClickOutside } from 'hooks/useOnClickOutside';
import { useRef } from 'react';

interface AsideProps {
  isOpen: boolean;
}

export const Aside = ({ isOpen }: AsideProps) => {
  const asideRef = useRef(null);
  const dispatch = useDispatch();
  const handleCloseButtonClick = () => dispatch(setAsideProps({ isAsideOpen: false, activeImage: null }));

  useOnClickOutside(asideRef, handleCloseButtonClick);
  useEscKeyPress(() => dispatch(setAsideProps({ isAsideOpen: false, activeImage: null })));

  return (
    <aside ref={asideRef} className={classNames(styles.aside, isOpen ? styles.visible : '')}>
      <FigureDetails />
    </aside>
  );
};
