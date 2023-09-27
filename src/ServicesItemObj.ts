export class ServicesItemObj {
    id: number = 0;
    techitems: string = '';
    title: string = '';
    icon: string = '';
  
    constructor(initializer?: any) {
      if (!initializer) return;
      if (initializer.id) this.id = initializer.id;
      if (initializer.techitems) this.techitems = initializer.techitems;
      if (initializer.title) this.title = initializer.title;
      if (initializer.icon) this.icon = initializer.icon;
    }
  }