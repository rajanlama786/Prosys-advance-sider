import { useBlockProps } from "@wordpress/block-editor";
import SimpleSlider from "./SimpleSlider";
import { Slider } from "react-slick";
import { __ } from "@wordpress/i18n";
import $ from "jquery";

export default function save({ attributes }) {
  const blockProps = useBlockProps.save();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <div {...blockProps}>
        <img className="classhere" src={attributes.imgUrl} />
        {__("Hello World, step 1 (from the editor).", "gutenberg-examples")}
        return (
        <div>
          <h2> Single Item</h2>
          <div className="testSLider" {...settings}>
            <div>
              <h3>1</h3>
            </div>
            <div>
              <h3>2</h3>
            </div>
            <div>
              <h3>3</h3>
            </div>
            <div>
              <h3>4</h3>
            </div>
            <div>
              <h3>5</h3>
            </div>
            <div>
              <h3>6</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
