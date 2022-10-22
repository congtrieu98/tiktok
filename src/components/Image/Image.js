import PropTypes from 'prop-types';
import classNames from 'classnames';
import {forwardRef, useState} from 'react'

import images from '../../assets/images';
import styles from './Image.module.scss'

const Image = forwardRef(({src, classname, fallBack : customFallBack = images.noImage, ...props}, ref) => {
    const [_fallBack, setFallBack] = useState('')
    
    const handleError = () => {
        setFallBack(customFallBack)
    }
    return ( 
        <img className={classNames(styles.wrapper, classname)} src={_fallBack || src} ref={ref} {...props} alt="" onError={handleError} />
     );
})

Image.propTypes = {
    src: PropTypes.string,
    classname: PropTypes.string,
    fallBack: PropTypes.string
}

export default Image;