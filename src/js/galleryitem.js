class GalleryItem {
  constructor(title, content, format) {
    this.title = title
    this.content = content
    this.format = format
  }
}

class GalleryPicture extends GalleryItem {
  constructor(title, content, format) {
    super(title, content, format)
  }
  getCard() {
    return `
    <div class="picture-card card">
        <img src="${this.content}" alt="${this.title}"/>
        <h5>${this.title}</h5>
    </div>
    `
  }
}
class GalleryAudio extends GalleryItem {
  constructor(title, content, format) {
    super(title, content, format)
  }
  getCard() {
    return `
    <div class="audio-card card">
      <div class="audio-box">
        <audio controls>
        <source src="${this.content}" type="audio/${this.format}"/>
        </audio>
        </div>
        <h5>${this.title}</h5>
    </div>
    `
  }
}
class GalleryVideo extends GalleryItem {
  constructor(title, content, format) {
    super(title, content, format)
  }
  getCard() {
    return `
    <div class="video-card card">
    <video width="320" height="240" controls>
    <source src="${this.content}" type="audio/${this.format}"/>
  </video>
        <h5>${this.title}</h5>
    </div>
    `
  }
}

export { GalleryPicture, GalleryAudio, GalleryVideo }
