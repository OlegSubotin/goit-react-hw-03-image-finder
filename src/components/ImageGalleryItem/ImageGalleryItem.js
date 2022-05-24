import PropTypes from 'prop-types';
import s from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ src, name, onImageClick, id }) => {
    return (
        <li className={s.item}>
            <img 
                className={s.image}
                src={src}
                alt={name}
                onClick={() => onImageClick(id)}
            />
        </li>
    );
};

ImageGalleryItem.propTypes = {
    id: PropTypes.string,
    src: PropTypes.string,
    name: PropTypes.string,
    onImageClick: PropTypes.func,
};

export default ImageGalleryItem;
