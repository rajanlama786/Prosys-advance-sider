/**
 * Avatar Column Wrapper
 */
// Setup the block
import React, { Component } from "react";

import { __ } from "@wordpress/i18n";

import { MediaUpload, MediaUploadCheck } from "@wordpress/block-editor";

import { withSelect } from "@wordpress/data";

import { Button, ResponsiveWrapper } from "@wordpress/components";

// Import block dependencies and components
import classnames from "classnames";
import icons from "./icons";

// Create an SocialIcons wrapper Component
export default class SliderImage extends Component {
  constructor(props) {
    super(...arguments);
    console.log(this.props);
  }

  render() {
    const { attributes, setAttributes } = this.props;
    const media = this.props.media;
    console.log("rajan");
    console.log(media);
    const removeMedia = () => {
      media.setAttributes({
        id: 0,
        Url: "",
      });
    };

    const onSelectMedia = (media) => {
      props.setAttributes({
        mediaId: media.id,
        mediaUrl: media.url,
      });
    };

    // // const blockStyle = {
    // //   backgroundImage:
    // //     media.url != "" ? 'url("' + media.url + '")' : "none",
    // // };
    // console.log(media);

    return (
      <>
        <div class="ps-profile-column ps-profile-avatar-wrap">
          <div class="ps-profile-image-wrap">
            <div className="editor-post-featured-image">
              <MediaUploadCheck>
                <MediaUpload
                  onSelect={onSelectMedia}
                  value={media.url}
                  allowedTypes={["image"]}
                  render={({ open }) => (
                    <Button
                      className={
                        media.url == ""
                          ? "editor-post-featured-image__toggle"
                          : "editor-post-featured-image__preview"
                      }
                      onClick={open}
                    >
                      {media.url == "" && __("Choose an image", "awp")}
                      {media.url != undefined && (
                        <ResponsiveWrapper
                        // naturalWidth={props.media.media_details.width}
                        // naturalHeight={props.media.media_details.height}
                        >
                          <img src={media.url} />
                        </ResponsiveWrapper>
                      )}
                    </Button>
                  )}
                />
              </MediaUploadCheck>
              {media.url != "" && (
                <MediaUploadCheck>
                  <MediaUpload
                    title={__("Replace image", "awp")}
                    value={media.url}
                    onSelect={onSelectMedia}
                    allowedTypes={["image"]}
                    render={({ open }) => (
                      <Button onClick={open} isDefault isLarge>
                        {__("Replace image", "awp")}
                      </Button>
                    )}
                  />
                </MediaUploadCheck>
              )}
              {media.url != "" && (
                <MediaUploadCheck>
                  <Button onClick={removeMedia} isLink isDestructive>
                    {__("Remove image", "awp")}
                  </Button>
                </MediaUploadCheck>
              )}
            </div>
          </div>
        </div>
      </>
    );
  }
}
