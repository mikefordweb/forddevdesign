export class PortfolioObj {
    id: number = 0;
    url: string = '';
    title: string = '';
    text: string = '';
    columns: number = 0;
    videoItem: string = '';
    imageArray: string[] = [];
    
    constructor(initializer?: any) {
      if (!initializer) return;
      if (initializer.id) this.id = initializer.id;
      if (initializer.url) this.url = initializer.url;
      if (initializer.title) this.title = initializer.title;
      if (initializer.text) this.text = initializer.text;
      if (initializer.columns) this.columns = initializer.columns;
      if (initializer.videoItem) this.videoItem = initializer.videoItem;
      if (initializer.imageArray) this.imageArray = initializer.imageArray;
    }
  }