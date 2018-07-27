import React, { Fragment } from "react";
import ImageUploader from "react-images-upload";

export default class ImageUpload extends React.Component {
    state = { pictures: [] };

    onDrop = (picture, picUrls) => {
        this.setState({
            pictures: picUrls
        });
    };

    render() {
        return (
            <Fragment>
                <ImageUploader
                    withIcon={true}
                    buttonText="Add photo"
                    onChange={this.onDrop}
                    imgExtension={[".jpg", ".gif", ".png", ".gif"]}
                    maxFileSize={5242880}
                />
                {this.state.pictures.map(pic => <img key={pic} src={pic} />)}
            </Fragment>
        );
    }
}
