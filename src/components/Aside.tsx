import { FigureDetails } from 'components/FigureDetails';
import { classNames } from 'utils';
import styles from 'styles/modules/Aside.module.css';
import { useDispatch } from 'redux/store';
import { useEscKeyPress } from 'hooks/useEscKeyPress';
import { setAsideProps } from 'redux/reducer';

interface AsideProps {
  isOpen: boolean;
}

export const Aside = ({ isOpen }: AsideProps) => {
  const dispatch = useDispatch();
  useEscKeyPress(() => dispatch(setAsideProps({ isAsideOpen: false, activeImage: null })));

  return (
    <aside className={classNames(styles.aside, isOpen ? styles.visible : '')}>
      <FigureDetails />
    </aside>
  );
};
