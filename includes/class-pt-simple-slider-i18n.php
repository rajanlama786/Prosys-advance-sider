<?php

/**
 * Define the internationalization functionality
 *
 * Loads and defines the internationalization files for this plugin
 * so that it is ready for translation.
 *
 * @link       https://prosysthemes.com
 * @since      1.0.0
 *
 * @package    Pt_Simple_Slider
 * @subpackage Pt_Simple_Slider/includes
 */

/**
 * Define the internationalization functionality.
 *
 * Loads and defines the internationalization files for this plugin
 * so that it is ready for translation.
 *
 * @since      1.0.0
 * @package    Pt_Simple_Slider
 * @subpackage Pt_Simple_Slider/includes
 * @author     Prosys Themes <prosysthemes@gmail.com>
 */
class Pt_Simple_Slider_i18n {


	/**
	 * Load the plugin text domain for translation.
	 *
	 * @since    1.0.0
	 */
	public function load_plugin_textdomain() {

		load_plugin_textdomain(
			'pt-simple-slider',
			false,
			dirname( dirname( plugin_basename( __FILE__ ) ) ) . '/languages/'
		);

	}



}
