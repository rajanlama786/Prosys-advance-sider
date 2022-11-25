<?php

/**
 * The plugin bootstrap file
 *
 * This file is read by WordPress to generate the plugin information in the plugin
 * admin area. This file also includes all of the dependencies used by the plugin,
 * registers the activation and deactivation functions, and defines a function
 * that starts the plugin.
 *
 * @link              https://prosysthemes.com
 * @since             1.0.0
 * @package           Pt_Simple_Slider
 *
 * @wordpress-plugin
 * Plugin Name:       Simple Slider
 * Plugin URI:        https://prosysthemes.com
 * Description:       This a easy and simple slider for WordPress.
 * Version:           1.0.0
 * Author:            Prosys Themes
 * Author URI:        https://prosysthemes.com
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain:       pt-simple-slider
 * Domain Path:       /languages
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Currently plugin version.
 * Start at version 1.0.0 and use SemVer - https://semver.org
 * Rename this for your plugin and update it as you release new versions.
 */
define( 'PT_SIMPLE_SLIDER_VERSION', '1.0.0' );

/**
 * The code that runs during plugin activation.
 * This action is documented in includes/class-pt-simple-slider-activator.php
 */
function activate_pt_simple_slider() {
	require_once plugin_dir_path( __FILE__ ) . 'includes/class-pt-simple-slider-activator.php';
	Pt_Simple_Slider_Activator::activate();
}

/**
 * The code that runs during plugin deactivation.
 * This action is documented in includes/class-pt-simple-slider-deactivator.php
 */
function deactivate_pt_simple_slider() {
	require_once plugin_dir_path( __FILE__ ) . 'includes/class-pt-simple-slider-deactivator.php';
	Pt_Simple_Slider_Deactivator::deactivate();
}

register_activation_hook( __FILE__, 'activate_pt_simple_slider' );
register_deactivation_hook( __FILE__, 'deactivate_pt_simple_slider' );

/**
 * The core plugin class that is used to define internationalization,
 * admin-specific hooks, and public-facing site hooks.
 */
require plugin_dir_path( __FILE__ ) . 'includes/class-pt-simple-slider.php';

/**
 * Begins execution of the plugin.
 *
 * Since everything within the plugin is registered via hooks,
 * then kicking off the plugin from this point in the file does
 * not affect the page life cycle.
 *
 * @since    1.0.0
 */
function run_pt_simple_slider() {

	$plugin = new Pt_Simple_Slider();
	$plugin->run();

}
run_pt_simple_slider();

function create_block_pt_simple_slider_block_init() {
    register_block_type( __DIR__ . '/build/' );
    register_block_type( dirname(__FILE__) . '/build/block.json' );
}
add_action( 'init', 'create_block_pt_simple_slider_block_init' );
