import { useState } from 'react'
import emotionReset from 'emotion-reset'
import { Global, css } from '@emotion/react'
import { CKEditor } from 'ckeditor4-react'

const App = () => {
  const [count, setCount] = useState(0)
  const styles = {
    global: css`
      body {
        font-family: 'Noto Sans JP', sans-serif;
      }
    `,
  }

  const config = {
    language: 'ja',
    templates_replaceContent: false,
    bodyClass: 'container content',
    contentsCss: '/cke/css/editor.css',
    toolbar: [
      ['Maximize', 'ShowBlocks', 'Source'],
      ['Undo', 'Redo', '-', 'RemoveFormat'],
      ['Templates', 'Format', 'FontSize'],
      ['TextColor', 'BGColor'],
      '/',
      ['Image'],
      ['Bold', 'Underline', 'Strike'],
      ['NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', 'Blockquote'],
      ['JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock'],
      ['Link', 'Unlink', 'Anchor'],
      ['Table', 'HorizontalRule'],
    ],
    removeButtons: 'Underline,Subscript,Superscript',
    format_tags: 'p;h2;h3;h4;h5',
    removeDialogTabs: 'image:advanced;link:advanced',
    allowedContent: true,
    emailProtection: 'encode',
    height: 500,
    templates_files: ['/cke/js/my-templates.js'],
  }

  return (
    <>
      <Global styles={styles.global}></Global>
      <div className='container p-5'>
        <CKEditor
          debug={true}
          config={config}
          initData={`
          <div class="buttons">
            <button class="button is-link">All</button>
            <button class="button is-link">Medium</button>
            <button class="button is-link">Size</button>
          </div>
        `}
        />
      </div>
    </>
  )
}

export default App
