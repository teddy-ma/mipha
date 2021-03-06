import 'phoenix_html'
import 'bootstrap'
import 'jquery.caret'
import 'dropzone/dist/dropzone-amd-module'

// JS components
import Times from './app/components/times'
import Utils from './app/components/utils'
import Topic from './app/components/topic'
import Editor from './app/components/editor'

// Decorate
Times.humanize()
Utils.navActive()
// Topic
Topic.selectorNode()
Topic.hookPreview($('.editor-toolbar'), $('.topic-editor'))
Topic.hookReply()
// Editor
window._editor = new Editor()
