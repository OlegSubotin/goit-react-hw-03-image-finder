import { Component } from "react";
import imageAPI from '../services/imageApi';

const Status = {
    IDLE: 'idle',
    PENDING: 'pending',
    RESOLVED: 'resolved',
    REJECTED: 'rejected'
};

class ImageGallery extends Component {
    state = {
        img: null,
        error: null,
        status: Status.IDLE,
    };

    componentDidUpdate(prevProps, prevState) {
        const prevImage = prevProps.image;
        const nextImage = this.props.image;

        if (prevImage !== nextImage) {
            this.setState({ status: Status.PENDING });
        };

        imageAPI.fetchImage(nextImage)
            .then(image => this.setState({ img, status: Status.RESOLVED }))
            .catch(error => this.setState({ error, status: Status.REJECTED }));
    };

    render() {
        const { status, img, error } = this.state;
        if (status === Status.IDLE) {
            return <div>input interested topic</div>;
        };

        if (status === Status.PENDING) {
            return <ImagesPendingView />;
        };

        if (status === Status.REJECTED) {
            return <ImageErrorView message={error.message}/>;
        };

        if (status === Status.RESOLVED) {
            return <ImageGalleryItem image={img}/>
        }
     }
};

export default ImageGallery;