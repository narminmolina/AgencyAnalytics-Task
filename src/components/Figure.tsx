import { KeyboardEvent } from 'react';
import { useSelector } from 'react-redux';

import { Image } from 'types';
import { classNames, convertBytesToMB } from 'utils';
import { useDispatch } from 'redux/store';
import { setAsideProps, selectActiveImage } from 'redux/reducer';
import styles from 'styles/modules/Figure.module.css';

interface FigureProps extends Image {
  tabIndex: number;
}

export const Figure = ({ id, url, tabIndex, filename, sizeInBytes, ...otherProps }: FigureProps) => {
  const dispatch = useDispatch();
  const activeImage = useSelector(selectActiveImage);

  const handleClick = () =>
    dispatch(setAsideProps({ isAsideOpen: true, activeImage: { id, url, filename, sizeInBytes, ...otherProps } }));

  const handleKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key === 'Enter') {
      handleClick();
    }
  };

  return (
    <figure
      className={styles.figure}
      tabIndex={tabIndex + 1} // NOTE: This for making the figure element accessible by keyboard.
      onClick={handleClick}
      onKeyDown={handleKeyDown}
    >
      <img
        src={url}
        alt={filename}
        loading="lazy"
        className={classNames(activeImage?.url === url && styles.activeImage)}
      />
      <figcaption>
        <h2>{filename}</h2>
        <span>{convertBytesToMB(sizeInBytes)} MB</span>
      </figcaption>
    </figure>
  );
};
