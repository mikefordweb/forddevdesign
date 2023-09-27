export class ClientsObj {
    id: number = 0;
    name: string = '';
    icon: string = '';
  
    constructor(initializer?: any) {
      if (!initializer) return;
      if (initializer.id) this.id = initializer.id;
      if (initializer.name) this.name = initializer.name;
      if (initializer.icon) this.icon = initializer.icon;
    }
  }