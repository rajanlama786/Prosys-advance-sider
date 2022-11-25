/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { useBlockProps } from "@wordpress/block-editor";

/**
 * Internal dependencies
 */
import "./style.scss";
import SimpleSlider from "./SimpleSlider";

const Edit = () => {
  //const blockProps = useBlockProps({ style: blockStyle });
  const blockProps = useBlockProps();
  return (
    <div {...blockProps}>
      {__("Hello World, step 1 (from the editor).", "gutenberg-examples")}
      <SimpleSlider />
    </div>
  );
};
export default Edit;
