import { gallery } from './consts'
import { GalleryAudio, GalleryPicture, GalleryVideo } from './galleryitem'
import galleryData from '../gallery.json'

require('../style/css/style.css')
require.context('../../src/image/', true, /\.(png|jpe?g|gif)$/i)
require.context('../../src/audio/', true, /\.(mp3|wave)$/i)
require.context('../../src/video/', true, /\.(mp4|avi)$/i)

const galleryItem = galleryData.map((item) => {
  const { title, content } = item

  const fileFormat = content.split('.')
  const format = fileFormat[fileFormat.length - 1]
  switch (format) {
    case 'jpg':
      return new GalleryPicture(title, content, format).getCard()
    case 'jpeg':
      return new GalleryPicture(title, content, format).getCard()
    case 'png':
      return new GalleryPicture(title, content, format).getCard()
    case 'gif':
      return new GalleryPicture(title, content, format).getCard()
    case 'mp3':
      return new GalleryAudio(title, content, format).getCard()
    case 'wave':
      return new GalleryAudio(title, content, format).getCard()
    case 'mp4':
      return new GalleryVideo(title, content, format).getCard()
    case 'avi':
      return new GalleryVideo(title, content, format).getCard()
    default:
      return '<div>формат не поддерживается</div>'
  }
})
gallery.innerHTML = galleryItem.join('')
