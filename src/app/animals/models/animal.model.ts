export type tiposValidos = 'leones' | 'gatos' | 'tigres' | null;

export class Animal {
  public id: number;
  public name: string;
  public tipo: tiposValidos;
  public vida: number;
  public dano: number;

  constructor(name: string, tipo: tiposValidos) {
    this.name = name;
    this.id = Math.random();
    this.tipo = tipo;

    if (tipo === 'leones') {
      this.vida = 27;
      this.dano = 5;
    } else if (tipo === 'tigres') {
      this.vida = 18;
      this.dano = 3;
    } else if (tipo === 'gatos') {
      this.vida = 9;
      this.dano = 1;
    } else {
      this.vida = 0;
      this.dano = 0;
    }

    // switch (tipo) {
    //   case 'leon': {
    //     this.vida = 27;
    //     this.dano = 5;
    //   }
    //   case 'tigre': {
    //     this.vida = 18;
    //     this.dano = 3;
    //   }
    //   case 'gato': {
    //     this.vida = 9;
    //     this.dano = 1;
    //   }
    //   default: {
    //     this.vida = 0;
    //     this.dano = 0;
    //   }
    // }
  }
}
