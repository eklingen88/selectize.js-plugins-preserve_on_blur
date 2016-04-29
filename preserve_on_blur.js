/**
 * Plugin: "preserve_on_blur" (selectize.js)
 * Copyright (c) 2016 Eric M. Klingensmith
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this
 * file except in compliance with the License. You may obtain a copy of the License at:
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF
 * ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 *
 * @author Eric M. Klingensmith <eric.m.klingensmith@gmail.com>
 *
 * Based on methods used in restore_on_backspace plugin by Brian Reavis & contributors.
 */
 
 Selectize.define( 'preserve_on_blur', function( options ) {
    var self = this;

    options.text = options.text || function(option) {
        return option[this.settings.labelField];
    };
    
    this.onBlur = ( function( e ) {
        var original = self.onBlur;  
        
        return function( e ) {
            // Capture the current input value
            var $input = this.$control_input;
            var inputValue = $input.val();
            
            // Do the default actions
            original.apply( this, e );
            
            // Set the value back                    
            this.setTextboxValue( inputValue );
        };                                
    } )();
} );