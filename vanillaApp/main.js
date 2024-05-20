const $maxEditorIcon = document.getElementById('max-editor')
const $maxPreviewerIcon = document.getElementById('max-previewer')
const $editorTextArea = document.getElementById('editor')
const $previewerDiv = document.getElementById('preview')
const $editorWrapperDiv = document.getElementById('editorWrapper')
const $previewWrapperDiv = document.getElementById('previewWrapper')

const maximizeWindow = (windowToMax, windowToMin) => {
    windowToMax.classList.toggle('expanded-window')
    windowToMin.classList.toggle('hide')
}

$maxEditorIcon.addEventListener('click', () => maximizeWindow($editorWrapperDiv, $previewWrapperDiv))
$maxPreviewerIcon.addEventListener('click', () => maximizeWindow($previewWrapperDiv, $editorWrapperDiv))
