import hljs from "highlight.js";
import Quill from "quill";

hljs.configure({ languages: ['javascript', 'python'] });

export const formats = [
  'font',
  'header',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'code-block',
  'list',
  'bullet',
  'indent',
  'link',
  'align',
  'color',
  'background',
  'size',
  'h1',
];

export const modules = {
  toolbar: {
    container: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      [{ size: ['small', false, 'large', 'huge'] }],
      [{ align: [] }],
      ['bold', 'italic', 'underline', 'strike', 'code-block'],
      [{ list: 'ordered' }, { list: 'bullet' }, 'link', { indent: '-1' }, { indent: '+1' }],
      [
        {
          color: [
            
          ],
        },
        { background: [] },
        ['clean'],
      ],
    ],
  },
  syntax: {
    highlight: (text: string) => hljs.highlightAuto(text).value,
  },
};