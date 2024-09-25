import { useInView } from 'react-intersection-observer';
import PropTypes from 'prop-types';

const Image = ({ src, alt, width, height, className, priority = false }) => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <>
      {priority && (
        <img
          src={src}
          alt={alt}
          height={height}
          width={width}
          className={className}
        />
      )}
      {!priority && inView && (
        <div ref={ref}>
          <img
            src={src}
            alt={alt}
            height={height}
            width={width}
            className={className}
          />
        </div>
      )}
    </>
  );
};

export default Image;

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  className: PropTypes.string,
  priority: PropTypes.bool,
};
