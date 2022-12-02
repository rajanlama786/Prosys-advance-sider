/**
 * Import the blocks
 */
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React, { Component } from "react";
import Slider from "react-slick";
import icons from "./icons";

/**
 * Import block.json
 */
import metadata from "./block.json";

import { Button } from "@wordpress/components";
import {
  useBlockProps,
  RichText,
  AlignmentToolbar,
  BlockControls,
  InspectorControls,
  MediaUpload,
  MediaUploadCheck,
} from "@wordpress/block-editor";
import SliderImage from "./slide";

const ALLOWED_MEDIA_TYPES = ["image"];

function sliderselectImage(value) {
  console.log(value.sizes.full.url);
  attributes.imgUrl = value.sizes.full.url;
  setAttributes({
    imgUrl: value.sizes.full.url,
  });
  console.log(attributes.imgUrl);
}

export default class SimpleSlider extends Component {
  render() {
    // // console.log(blockProps);
    // const blockProps = useBlockProps();
    const { attributes, setAttributes } = this.props;
    const media = attributes.media;
    const res_media = {};

    //const attributes = metadata.attributes;
    //const { imgUrl } = attributes;

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    // console.log("raja");
    // console.log(attributes);
    // console.log("rani");

    const props = this.props;

    return (
      <>
        <div>
          <h2> Single Item</h2>
          <Slider {...settings}>
            <div>
              <SliderImage media={attributes.media} />
              <div className="ps-profile-image-square">
                <div>1</div>
              </div>
            </div>
          </Slider>
        </div>
      </>
    );
  }
}
