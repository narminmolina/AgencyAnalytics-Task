import { useEffect } from 'react';
import { useDispatch } from 'redux/store';
import { loadImages } from 'redux/reducer';
import { Tab } from './Tab';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadImages());
  }, [dispatch]);

  return (
    <div className="container">
      <main>
        <h1>Photos</h1>
        <Tab />
      </main>
    </div>
  );
};
