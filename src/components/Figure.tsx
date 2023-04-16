import { Image } from 'types';
import { useDispatch } from 'redux/store';
import styles from 'styles/modules/Figure.module.css';

interface FigureProps extends Image {
  tabIndex: number;
}

export const Figure = ({ id, url, tabIndex, filename, sizeInBytes, ...otherProps }: FigureProps) => {
  const dispatch = useDispatch();

  return (
    <figure className={styles.figure} tabIndex={tabIndex + 1}>
      <img src={url} alt={filename} loading="lazy" />
      <figcaption>
        <h2>{filename}</h2>
        <span>{sizeInBytes} MB</span>
      </figcaption>
    </figure>
  );
};
