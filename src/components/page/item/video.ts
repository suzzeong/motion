import { BaseComponent } from './../../component.js';
export class VideoComponent extends BaseComponent<HTMLElement> {
  constructor(title: string, url: string) {
    super(`<section class="video">
    <div class="video video__player">
      <iframe class='video__iframe'></iframe>
    </div>
      <h3 class="video__title"></h3>
  </section>`);

  const iframe = this.element.querySelector('.video__iframe')! as HTMLIFrameElement;
  console.log(url);
  iframe.src = this.convertToEmbeddedURL(url); // url -> videoId -> embed

  const titleElement = this.element.querySelector('.video__title')! as HTMLHeadingElement;
  titleElement.textContent = title;
  }

  // 정규표현식 Regex
  private convertToEmbeddedURL(url: string): string {
    const regExp = /^(?:https?:\/\/)?(?:www\.)?(?:(?:youtube.com\/(?:(?:watch\?v=)|(?:embed\/))([a-zA-Z0-9-]{11}))|(?:youtu.be\/([a-zA-Z0-9-]{11})))/;
    const match = url.match(regExp);
    console.log(match);
    
    const videoId = match? match[1] || match[2] : undefined;
    if(videoId) {
      return `https://www.youtube.com/embed/${videoId}`
    }
    return url;
  }
}

// <iframe
//   width='633'
//   height='356'
//   src='https://www.youtube.com/embed/0xHynKzX0Ko'
//   title='[𝒑𝒍𝒂𝒚𝒍𝒊𝒔𝒕] 벅차는 노래 좋아하는 사람 특'
//   frameborder='0'
//   allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
//   allowfullscreen
// ></iframe>;
