<?php

// Include Jupiter X.
require_once( get_template_directory() . '/lib/init.php' );

/**
 * Enqueue assets.
 *
 * Add theme style and script to Jupiter X assets files.
 */
jupiterx_add_smart_action( 'wp_enqueue_scripts', 'jupiterx_child_enqueue_scripts', 8 );

function jupiterx_child_enqueue_scripts() {

	// Add the theme style as a fragment to have access to all the variables.
	jupiterx_compiler_add_fragment( 'jupiterx', get_stylesheet_directory_uri() . '/assets/less/style.less', 'less' );

	// Add the theme script as a fragment.
	jupiterx_compiler_add_fragment( 'jupiterx', get_stylesheet_directory_uri() . '/assets/js/script.js', 'js' );

}
