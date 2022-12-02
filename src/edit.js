/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
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

import AvatarColumn from "./slide";

/**
 * Import block.json
 */
import metadata from "./block.json";

/**
 * Internal dependencies
 */
import "./style.scss";
import SimpleSlider from "./SimpleSlider";

const Edit = (props) => {
  //const blockProps = useBlockProps({ style: blockStyle });
  const blockProps = useBlockProps();

  return (
    <>
      <div {...blockProps}>
        {__("Hello World, step 1 (from the editor).", "gutenberg-examples")}
        {/* <AvatarColumn {...props} /> */}
        <SimpleSlider {...props} />
      </div>
    </>
  );
};
export default Edit;
