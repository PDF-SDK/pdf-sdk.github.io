<webpdf>
    <div class="fv__ui-mobile-header" name="fv--mobile-header">
        <div class="fv__ui-mobile-header-left" name="fv--mobile-header-left">
            <mobile:sidebar-toggler-button name="fv--mobile-sidebar-tottler-button"></mobile:sidebar-toggler-button>
        </div>
        <div class="fv__ui-mobile-header-main" name="fv--mobile-header-main">
            <dropdown name="tabs" class="fv__ui-mobile-tabs-dropdown" @selectable-dropdown="first" @controller="mobile:MobileDropdownTabController as mtabc">
                <dropdown-button tab="comment" @on.click="mtabc.switchTab($component)" active>toolbar.tabs.comment.title</dropdown-button>
                <dropdown-button tab="edit" visible='false' @on.click="mtabc.switchTab($component)">toolbar.tabs.edit.title</dropdown-button>
                <dropdown-button tab="protect" @on.click="mtabc.switchTab($component)">toolbar.tabs.protect.title</dropdown-button>
            </dropdown>
        </div>
        <div class="fv__ui-mobile-header-right" name="fv--mobile-header-right">
            <hand-button icon-class="fv__icon-mobile-topbar-hand"></hand-button>
            <mobile:pageview-dropdown name="fv--mobile-pageview-dropdown">
                <single-page-button></single-page-button>
                <continuous-page-button></continuous-page-button>
                <!-- <facing-page-button></facing-page-button>
                <continuous-facing-page-button></continuous-facing-page-button> -->
                <h-continuous:h-continuous-button></h-continuous:h-continuous-button>
                <!--<h-single:h-single-button></h-single:h-single-button>-->
                <!--<h-facing:h-facing-button></h-facing:h-facing-button>-->
            </mobile:pageview-dropdown>
            <xbutton name="fv--mobile-topbar-search-button" icon-class="fv__icon-mobile-topbar-search" @controller="mobile:SearchToggleButtonController"></xbutton>
            <dropdown class="fv__ui-mobile-topbar-tools-dropdown fv__ui-dropdown-hide-text" name="fv--mobile-topbar-tools-dropdown" @cannotBeDisabled>
                <open-localfile-button @cannotBeDisabled></open-localfile-button>
                <open-fromurl-button @cannotBeDisabled></open-fromurl-button>
                <print:print-button></print:print-button>
                <download-file-button></download-file-button>
                <full-screen:toggle-full-screen-button name="fv--toggle-full-screen-button" @hide-on-device="ios"></full-screen:toggle-full-screen-button>
                <fpmodule:file-property-button name="fv--file-property-button"></fpmodule:file-property-button>
            </dropdown>
        </div>
    </div>
    <toolbar>
        <div class="fv__ui-mobile-toolbar-tabs" name="fv--mobile-toolbar-tabs">
            <div class="fv__ui-mobile-toolbar-tab" tab="comment">
                <group-list shrink-size="-1">
                    <group>
                        <dropdown @selectable-dropdown="first" class="fv__ui-dropdown-hide-text">
                            <create-text-highlight-button></create-text-highlight-button>
                            <create-area-highlight-button></create-area-highlight-button>
                            <create-strikeout-button></create-strikeout-button>
                            <create-underline-button></create-underline-button>
                            <create-squiggly-button></create-squiggly-button>
                            <create-replace-button></create-replace-button>
                            <create-caret-button></create-caret-button>
                        </dropdown>
                        <dropdown @selectable-dropdown="first" class="fv__ui-dropdown-hide-text">
                            <create-textbox-button></create-textbox-button>
                            <create-typewriter-button></create-typewriter-button>
                            <create-callout-button></create-callout-button>
                        </dropdown>
                        <create-drawings-dropdown></create-drawings-dropdown>
                    </group>
                    <group>
                        <dropdown @selectable-dropdown="first" class="fv__ui-dropdown-hide-text">
                            <create-pencil-button></create-pencil-button>
                            <eraser-button></eraser-button>
                        </dropdown>
                        <stamp-dropdown align="client-center"></stamp-dropdown>
                        <dropdown name="fv-mobile-attachment-dropdown" @selectable-dropdown="first" class="fv__ui-dropdown-hide-text">
                            <create-note-button></create-note-button>
                            <create-attachment-button></create-attachment-button>
                            <create-image-button></create-image-button>
                            <create-link-button></create-link-button>
                        </dropdown>
                    </group>
                    <group name="fv--mobile-media-group">
                        <multi-media:multi-media-button></multi-media:multi-media-button>
                    </group>
                    <group name="home-tab-group-form" class="fv__ui-form-group">
                        <import-form-module:import-form-button></import-form-module:import-form-button>
                        <export-form-module:export-form-dropdown></export-form-module:export-form-dropdown>
                    </group>
                </group-list>
            </div>
            <div class="fv__ui-mobile-toolbar-tab" tab="edit">
                <group-list shrink-size="-1">
                    <group name="edit-tab-group-mode">
                        <edit-pageobjects:edit-all-objects-button></edit-pageobjects:edit-all-objects-button>
                        <add-image-button></add-image-button>
                        <edit-pageobjects:path-objects-dropdown></edit-pageobjects:path-objects-dropdown>
                        <!--<edit-image-button></edit-image-button>-->
                    </group>
                    <group name="edit-tab-group-font" retain-count="6">
                        <edit-text-object:add-text-button></edit-text-object:add-text-button>
                        <edit-text-object:text-bold-style-button></edit-text-object:text-bold-style-button>
                        <edit-text-object:text-italic-style-button></edit-text-object:text-italic-style-button>
                        <edit-text-object:font-color-picker></edit-text-object:font-color-picker>
                        <edit-text-object:font-style-dropdown align="right"></edit-text-object:font-style-dropdown>
                    </group>
                    <group name="edit-tab-group-layer" visible="false"></group>
                    <group name="edit-tab-group-redact" visible="false"></group>
                </group-list>
            </div>
            <div class="fv__ui-mobile-toolbar-tab" tab="protect">
                <group-list shrink-size="-1" name="protect-toolbar-group-list">
                    <group name="protect-tab-group-sign">
                        <ink-sign-dropdown name="fv--ink-sign-dropdown"></ink-sign-dropdown>
                    </group>
                    <group name="password-protect-group">
                        <password-protect:password-protect-button></password-protect:password-protect-button>
                        <password-protect:remove-protect-button></password-protect:remove-protect-button>
                    </group>
                    <group name="redaction">
                        <redaction:create-redactions-dropdown></redaction:create-redactions-dropdown>
                        <redaction:apply-redactions-button></redaction:apply-redactions-button>
                        <redaction:redaction-search-button></redaction:redaction-search-button>
                    </group>
                </group-list>
            </div>
        </div>
    </toolbar>
    <div class="fv__ui-body">
        <sidebar name="sidebar" @controller="sidebar:SidebarController" width="0.64" @mobile:sidebar-toggler>
            <bookmark-sidebar-panel></bookmark-sidebar-panel>
            <commentlist-sidebar-panel>
                <slot for="header">
                    <comment-list:toggle-commentlist-group-button></comment-list:toggle-commentlist-group-button>
                    <dropdown class="comment-list-dropdown" icon-class="fv__icon-toolbar-more">
                        <!-- <comment-list:expand-pages-button></comment-list:expand-pages-button>
                        <comment-list:collapse-pages-button></comment-list:collapse-pages-button> -->
                        <comment-list:import-comment-button></comment-list:import-comment-button>
                        <dropdown-item class="fv__ui-dropdown-container-item">
                            <comment-list:export-comment-dropdown></comment-list:export-comment-dropdown>
                        </dropdown-item>
                    </dropdown>
                </slot>
            </commentlist-sidebar-panel>
            <thumbnail-sidebar-panel></thumbnail-sidebar-panel>
            <layer-sidebar-panel></layer-sidebar-panel>
            <search-sidebar-panel></search-sidebar-panel>
            <attachment-sidebar-panel></attachment-sidebar-panel>
        </sidebar>
        <viewer @zoom-on-pinch @zoom-on-doubletap @touch-to-scroll></viewer>
        <page-nav-button></page-nav-button>
    </div>
    <template name="template-container">
        <create-stamp-dialog></create-stamp-dialog>
        <print:print-dialog></print:print-dialog>
        <loupe-tool-dialog></loupe-tool-dialog>
        <create-ink-sign-dialog></create-ink-sign-dialog>
        <measurement-popup></measurement-popup>
        <fpmodule:file-property-dialog></fpmodule:file-property-dialog>
        <redaction:redaction-page-dialog></redaction:redaction-page-dialog>
        <!-- contextmenus -->
        <page-contextmenu></page-contextmenu>
        <measurement-contextmenu></measurement-contextmenu>
        <default-annot-contextmenu></default-annot-contextmenu>
        <markup-contextmenu name="fv--line-contextmenu"></markup-contextmenu>
        <markup-contextmenu name="fv--linearrow-contextmenu"></markup-contextmenu>
        <markup-contextmenu name="fv--linedimension-contextmenu"></markup-contextmenu>
        <markup-contextmenu name="fv--polylinedimention-contextmenu"></markup-contextmenu>
        <markup-contextmenu name="fv--polygondimension-contextmenu"></markup-contextmenu>
        <markup-contextmenu name="fv--circle-contextmenu"></markup-contextmenu>
        <markup-contextmenu name="fv--square-contextmenu"></markup-contextmenu>
        <markup-contextmenu name="fv--polyline-contextmenu"></markup-contextmenu>
        <markup-contextmenu name="fv--polygon-contextmenu"></markup-contextmenu>
        <markup-contextmenu name="fv--polygoncloud-contextmenu"></markup-contextmenu>
        <markup-contextmenu name="fv--ink-contextmenu"></markup-contextmenu>
        <markup-contextmenu name="fv--stamp-contextmenu"></markup-contextmenu>
        <markup-contextmenu name="fv--text-contextmenu"></markup-contextmenu>
        <caret-contextmenu name="fv--areahighlight-contextmenu"></caret-contextmenu>
        <caret-contextmenu name="fv--replace-contextmenu"></caret-contextmenu>
        <markup-contextmenu></markup-contextmenu>
        <caret-contextmenu name="fv--caret-contextmenu"></caret-contextmenu>
        <textmarkup-contextmenu name="fv--highlight-contextmenu"></textmarkup-contextmenu>
        <textmarkup-contextmenu name="fv--strikeout-contextmenu"></textmarkup-contextmenu>
        <textmarkup-contextmenu name="fv--underline-contextmenu"></textmarkup-contextmenu>
        <textmarkup-contextmenu name="fv--squiggly-contextmenu"></textmarkup-contextmenu>
        <freetext-contextmenu name="fv--typewriter-contextmenu"></freetext-contextmenu>
        <freetext-contextmenu name="fv--callout-contextmenu"></freetext-contextmenu>
        <freetext-contextmenu name="fv--textbox-contextmenu"></freetext-contextmenu>
        <action-annot-contextmenu name="fv--image-contextmenu"></action-annot-contextmenu>
        <action-annot-contextmenu name="fv--link-contextmenu"></action-annot-contextmenu>
        <comment-card-contextmenu></comment-card-contextmenu>
        <fileattachment-contextmenu></fileattachment-contextmenu>
        <media-contextmenu></media-contextmenu>
        <sound-contextmenu></sound-contextmenu>
        <redact-contextmenu></redact-contextmenu>
        <edit-graphics:image-contextmenu></edit-graphics:image-contextmenu>
        <edit-pageobjects:path-contextmenu></edit-pageobjects:path-contextmenu>
        <text-sel:text-selection-tooltip></text-sel:text-selection-tooltip>
        <freetext:freetext-tooltip></freetext:freetext-tooltip>
    </template>
</webpdf>