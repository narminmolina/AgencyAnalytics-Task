import { useEffect } from 'react';

import { Tab } from 'components/Tab';
import { Modal } from 'components/Modal';
import { Aside } from 'components/Aside';
import { classNames } from 'utils';
import { useBodyScrollLock } from 'hooks/useBodyScrollLock';
import { useDispatch, useSelector } from 'redux/store';
import { loadImages, selectIsAsideOpen } from 'redux/reducer';
import styles from 'styles/modules/App.module.css';

export const App = () => {
  const dispatch = useDispatch();
  const isAsideOpen = useSelector(selectIsAsideOpen);

  useBodyScrollLock(isAsideOpen);
  useEffect(() => {
    dispatch(loadImages());
  }, [dispatch]);

  return (
    <div className="container">
      <main className={classNames(styles.main, isAsideOpen ? styles.shrink : '')}>
        <h1 className={styles.title}>Photos</h1>
        {isAsideOpen && <div className="overlay" />}
        <Tab />
      </main>
      <Aside isOpen={isAsideOpen} />
      {isAsideOpen && <Modal />}
    </div>
  );
};
