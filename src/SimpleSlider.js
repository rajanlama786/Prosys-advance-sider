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

import { withSelect } from "@wordpress/data";

import { __ } from "@wordpress/i18n";

import { Button, ResponsiveWrapper } from "@wordpress/components";
import {
  useBlockProps,
  RichText,
  AlignmentToolbar,
  BlockControls,
  InspectorControls,
  MediaUpload,
  MediaUploadCheck,
} from "@wordpress/block-editor";

const ALLOWED_MEDIA_TYPES = ["image"];

export default class SimpleSlider extends Component {
  constructor(props) {
    super(...arguments);
    console.log(this.props);
  }
  render() {
    const { attributes, setAttributes } = this.props;
    const slides = attributes.slides;

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    //const slide = this.props.slide;
    const removeMedia = () => {
      setAttributes({
        slides: [
          {
            mediaID: "",
            mediaUrl: "",
          },
        ],
      });
    };

    const props = this.props;

    const onSelectMedia = (media) => {
      setAttributes({
        slides: [
          {
            mediaID: media.id,
            mediaUrl: media.url,
          },
        ],
      });
    };

    // // const blockStyle = {
    // //   backgroundImage:
    // //     slide.mediaUrl != "" ? 'url("' + slide.mediaUrl + '")' : "none",
    // // };
    // console.log(media);

    return (
      <>
        <div>
          <h2> Single Item</h2>
          <Slider {...settings}>
            {slides.length > 0 &&
              slides.map((slide, index) => {
                return (
                  <div key={index}>
                    <div class="ps-profile-column ps-profile-avatar-wrap">
                      <div class="ps-profile-image-wrap">
                        <div className="editor-post-featured-image">
                          <MediaUploadCheck>
                            <MediaUpload
                              onSelect={(media) => onSelectMedia(media)}
                              multiple={false}
                              value={slide.mediaUrl}
                              allowedTypes={["image"]}
                              render={({ open }) => (
                                <Button
                                  className={
                                    slide.mediaUrl == ""
                                      ? "editor-post-featured-image__toggle"
                                      : "editor-post-featured-image__preview"
                                  }
                                  onClick={open}
                                >
                                  {slide.mediaUrl == "" &&
                                    __("Choose an image", "awp")}
                                  {slide.mediaUrl != undefined && (
                                    <div
                                    // naturalWidth={props.media.media_details.width}
                                    // naturalHeight={props.media.media_details.height}
                                    >
                                      <img src={slide.mediaUrl} />
                                    </div>
                                  )}
                                </Button>
                              )}
                            />
                          </MediaUploadCheck>
                          {slide.mediaUrl != "" && (
                            <MediaUploadCheck>
                              <MediaUpload
                                title={__("Replace image", "awp")}
                                value={slide.mediaUrl}
                                onSelect={(media) => onSelectMedia(media)}
                                allowedTypes={["image"]}
                                render={({ open }) => (
                                  <Button onClick={open} isDefault isLarge>
                                    {__("Replace image", "awp")}
                                  </Button>
                                )}
                              />
                            </MediaUploadCheck>
                          )}
                          {slide.mediaUrl != "" && (
                            <MediaUploadCheck>
                              <Button
                                onClick={removeMedia}
                                isLink
                                isDestructive
                              >
                                {"X"}
                              </Button>
                            </MediaUploadCheck>
                          )}
                        </div>
                        <div className="ps-profile-image-square">
                          <div className="ps-slider-text">
                            <div className="ps-slider-subcontent">
                              Hello World, step 1 (from the editor).
                            </div>
                            <div className="ps-slider-header">
                              This is the slider
                            </div>
                            <div className="ps-slider-content">
                              Hello World, step 1 (from the editor). Hello
                              World, step 1 (from the editor).
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </Slider>
        </div>
      </>
    );
  }
}
