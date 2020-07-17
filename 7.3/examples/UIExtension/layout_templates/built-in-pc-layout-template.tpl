<webpdf>
    <toolbar name="toolbar" class="fv__ui-toolbar-scrollable">
        <tabs name="toolbar-tabs">
            <tab title="toolbar.tabs.home.title" name="home-tab">
                <paddle exclude-devices="tablet" name="fv--home-tab-paddle">
                    <group-list name="home-toolbar-group-list">
                        <group name="home-tab-group-hand" retain-count="3">
                            <hand-button></hand-button>
                            <selection-button></selection-button>
                            <snapshot-button></snapshot-button>
                        </group>
                        <group name="home-tab-group-io" retain-count="1" shrink-title="toolbar.more.document.title">
                            <open-file-dropdown></open-file-dropdown>
                            <download-file-button></download-file-button>
                            <print:print-button></print:print-button>
                        </group>
                        <group name="home-tab-group-nav" retain-count="3">
                            <goto-prev-page-button></goto-prev-page-button>
                            <goto-next-page-button></goto-next-page-button>
                            <goto-page-input></goto-page-input>
                        </group>
                        <group name="home-tab-group-zoom">
                            <zoom-out-button></zoom-out-button>
                            <zoom-in-button></zoom-in-button>
                            <editable-zoom-dropdown></editable-zoom-dropdown>
                        </group>
                        <group name="home-tab-group-page" retain-count="1">
                            <single-page-button></single-page-button>
                            <continuous-page-button></continuous-page-button>
                            <facing-page-button></facing-page-button>
                            <continuous-facing-page-button></continuous-facing-page-button>
                            <h-continuous:h-continuous-button></h-continuous:h-continuous-button>
                            <!--<h-single:h-single-button></h-single:h-single-button>-->
                            <!--<h-facing:h-facing-button></h-facing:h-facing-button>-->
                        </group>
                        <group name="home-tab-group-magnifier">
                            <loupe-tool-button></loupe-tool-button>
                        </group>
                        <group name="home-tab-group-marquee">
                            <marquee-tool-button></marquee-tool-button>
                        </group>
                        <group name="home-tab-group-form" retain-count="2" @require-modules="import-form-module,export-form-module">
                            <import-form-module:import-form-button></import-form-module:import-form-button>
                            <export-form-module:export-form-dropdown></export-form-module:export-form-dropdown>
                        </group>
                        <group name="file-property" @require-modules="fpmodule">
                            <fpmodule:file-property-button></fpmodule:file-property-button>
                        </group>
                    </group-list>
                </paddle>
            </tab>
            <tab title="toolbar.tabs.comment.title" name="comment-tab">
                <paddle exclude-devices="tablet" name="fv--comment-tab-paddle">
                    <group-list name="comment-toolbar-group-list">
                        <group name="comment-tab-group-hand" retain-count="3">
                            <hand-button></hand-button>
                            <selection-button></selection-button>
                            <zoom-dropdown></zoom-dropdown>
                        </group>
                        <group name="comment-tab-group-note" retain-count="3">
                            <create-note-button></create-note-button>                        
                        </group>
                        <group name="comment-tab-group-mark">
                            <create-text-highlight-button></create-text-highlight-button>
                            <create-strikeout-button></create-strikeout-button>
                            <create-underline-button></create-underline-button>
                            <create-squiggly-button></create-squiggly-button>
                            <create-replace-button></create-replace-button>
                            <create-caret-button></create-caret-button>
                        </group>
                        <group name="comment-tab-group-text">                      
                            <create-typewriter-button></create-typewriter-button>
                            <create-callout-button></create-callout-button>
                            <create-textbox-button></create-textbox-button>
                        </group>
                        <group name="comment-tab-group-drawing" retain-count="2">
                            <create-drawings-dropdown></create-drawings-dropdown>                       
                            <create-area-highlight-button></create-area-highlight-button>
                        </group>
                        <group name="comment-tab-group-pencil" retain-count="2">
                            <create-pencil-button></create-pencil-button>
                            <eraser-button></eraser-button>
                        </group>
                        <group name="comment-tab-group-stamp">
                            <stamp-dropdown></stamp-dropdown>
                        </group>
                        <group name="comment-tab-group-measurement">
                            <create-distance-button></create-distance-button>
                        </group>
                        <group name="comment-tab-group-media">
                            <create-attachment-button></create-attachment-button>
                            <create-image-button></create-image-button>
                            <create-link-button></create-link-button>
                            <multi-media:multi-media-button></multi-media:multi-media-button>
                        </group>
                        <group name="comment-tab-group-inksign" visible='false'></group>                    
                        <group name="comment-tab-group-other" visible='false'></group>
                    </group-list>
                </paddle>
            </tab>
            <tab title="toolbar.tabs.edit.title" name="edit-tab" visible="true" @device="desktop">
                <paddle exclude-devices="tablet" name="fv--edit-tab-paddle">
                    <group-list name="edit-toolbar-group-list">
                        <group name="edit-tab-group-hand" retain-count="3">
                            <hand-button></hand-button>
                            <selection-button></selection-button>
                            <zoom-dropdown></zoom-dropdown>
                        </group>
                        <group name="edit-tab-group-mode" retain-count="3">
                            <edit-pageobjects:edit-all-objects-button></edit-pageobjects:edit-all-objects-button>
                            <add-image-button></add-image-button>
                            <edit-pageobjects:path-objects-dropdown></edit-pageobjects:path-objects-dropdown>
                            <!--<edit-image-button></edit-image-button>-->
                            <edit-text-object:add-text-button></edit-text-object:add-text-button>
                        </group>
                        <group name="edit-tab-group-font" retain-count="5" @require-modules="edit-text-object">
                            <edit-text-object:text-bold-style-button></edit-text-object:text-bold-style-button>
                            <edit-text-object:text-italic-style-button></edit-text-object:text-italic-style-button>
                            <edit-text-object:font-color-picker></edit-text-object:font-color-picker>
                            <edit-text-object:font-style-dropdown></edit-text-object:font-style-dropdown>
                        </group>
                        <group name="edit-tab-group-layer" visible="false"></group>
                        <group name="edit-tab-group-redact" visible="false"></group>
                    </group-list>
                </paddle>
            </tab>
            <tab title="toolbar.tabs.protect.title" name="protect-tab" visible="true">
                <paddle exclude-devices="tablet" name="fv--protect-tab-paddle">
                    <group-list name="protect-toolbar-group-list">
                        <group name="protect-tab-group-hand" retain-count="4">
                            <hand-button></hand-button>
                            <selection-button></selection-button>
                            <zoom-dropdown></zoom-dropdown>
                        </group>
                        <group name="protect-tab-group-sign" retain-count="4">
                            <ink-sign-dropdown></ink-sign-dropdown>
                        </group>
                        <group name="password-protect-group" retain-count="2" @require-modules="password-protect">
                            <password-protect:password-protect-button></password-protect:password-protect-button>
                            <password-protect:remove-protect-button></password-protect:remove-protect-button>
                        </group>
                        <group name="redaction" @require-modules="redaction">
                            <redaction:create-redactions-dropdown></redaction:create-redactions-dropdown>
                            <redaction:apply-redactions-button></redaction:apply-redactions-button>
                            <redaction:redaction-search-button></redaction:redaction-search-button>
                        </group>
                    </group-list>
                </paddle>
            </tab>
        </tabs>
    </toolbar>
    <div class="fv__ui-body">
        <sidebar name="sidebar" @controller="sidebar:SidebarController">
          <bookmark-sidebar-panel></bookmark-sidebar-panel>
          <commentlist-sidebar-panel>
            <slot for="header">
              <comment-list:toggle-commentlist-group-button></comment-list:toggle-commentlist-group-button>
              <dropdown class="comment-list-dropdown" icon-class="fv__icon-toolbar-more">
                <!-- <comment-list:expand-pages-button></comment-list:expand-pages-button>
                <comment-list:collapse-pages-button></comment-list:collapse-pages-button> -->
                <comment-list:show-comment-button></comment-list:show-comment-button>
                <comment-list:hide-comment-button></comment-list:hide-comment-button>
                <comment-list:import-comment-button></comment-list:import-comment-button>
                <dropdown-item class="fv__ui-dropdown-container-item">
                  <comment-list:export-comment-dropdown></comment-list:export-comment-dropdown>
                </dropdown-item>
              </dropdown>
            </slot>
          </commentlist-sidebar-panel>
          <layer-sidebar-panel></layer-sidebar-panel>
          <search-sidebar-panel></search-sidebar-panel>
          <attachment-sidebar-panel></attachment-sidebar-panel>
        </sidebar>
        <distance:ruler-container name="pdf-viewer-container-with-ruler">
            <slot>
                <viewer @zoom-on-pinch @zoom-on-doubletap @zoom-on-wheel @touch-to-scroll></viewer>
            </slot>
        </distance:ruler-container>
    </div>
    <template name="template-container">
        <create-stamp-dialog></create-stamp-dialog>
        <print:print-dialog></print:print-dialog>
        <loupe-tool-dialog></loupe-tool-dialog>
        <create-ink-sign-dialog></create-ink-sign-dialog>
        <distance:measurement-popup></distance:measurement-popup>
        <fpmodule:file-property-dialog></fpmodule:file-property-dialog>
        <redaction:redaction-page-dialog></redaction:redaction-page-dialog>
        <!-- contextmenus -->
        <page-contextmenu></page-contextmenu>
        <default-annot-contextmenu></default-annot-contextmenu>
        <markup-contextmenu></markup-contextmenu>
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
        <measurement-contextmenu></measurement-contextmenu>
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