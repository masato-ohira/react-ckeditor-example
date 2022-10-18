CKEDITOR.addTemplates('default', {
  imagesPath: '/app/img/templates',

  templates: [
    {
      title: 'Image and Title',
      image: 'thum.png',
      description:
        'One main image with a title and text that surround the image.',
      html:
        '<h3>' +
        // Use src=" " so image is not filtered out by the editor as incorrect (src is required).
        '<img src=" " alt="" style="margin-right: 10px" height="100" width="100" align="left" />' +
        'Type the title here' +
        '</h3>' +
        '<p>' +
        'Type the text here' +
        '</p>',
    },
  ],
})
