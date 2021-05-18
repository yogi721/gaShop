import React from 'react';
import Image from 'gatsby-image';
import { ImageThumbnailWrapper } from './styles';

export default function ImageThumbnail({ isActive, onClick, image }) {
    const hadleClick = () => {
        onClick(image);
    }
    return (
        <ImageThumbnailWrapper
            onClick={hadleClick}
            isActive={isActive}
        >
            <Image fluid={image.localFile.childImageSharp.fluid} />
        </ImageThumbnailWrapper>
    );
}