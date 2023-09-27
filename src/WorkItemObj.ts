export class WorkItemObj {
    id: number = 0;
    title: string = '';
    text: string = '';
    sizeStyle: number | undefined;
    pageUrl: string = '';
    imgSrc: string = '';
    imgClass: string = '';
  
    constructor(initializer?: any) {
      if (!initializer) return;
      if (initializer.id) this.id = initializer.id;
      if (initializer.title) this.title = initializer.title;
      if (initializer.text) this.text = initializer.text;
      if (initializer.sizeStyle) this.sizeStyle = initializer.sizeStyle;
      if (initializer.pageUrl) this.pageUrl = initializer.pageUrl;
      if (initializer.imgSrc) this.imgSrc = initializer.imgSrc;
      if (initializer.imgClass) this.imgClass = initializer.imgClass;
    }
  }