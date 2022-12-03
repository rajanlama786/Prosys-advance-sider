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
        <SimpleSlider {...props} />
      </div>
    </>
  );
};
export default Edit;
