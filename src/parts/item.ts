
// import { Mouse } from "../core/mouse";
import { MyDisplay } from "../core/myDisplay";
// import { Param } from "../core/param";
import { Update } from "../libs/update";
import { Util } from "../libs/util";

// -----------------------------------------
//
// -----------------------------------------
export class Item extends MyDisplay {

  private _id:number;
  private _text:HTMLTextAreaElement | undefined;
  private _str:Array<string> = ['🔴', '🟠', '🟡', '🟢', '🔵', '🟣'];

  constructor(opt:any) {
    super(opt)

    this._id = opt.id;
    this._c = this._id * 2;

    this._text = document.createElement('textarea');
    this.getEl().append(this._text);
    this._text.rows = 5;

    let txt = '';
    const num = 40;
    for(let i = 0; i < num; i++) {
      txt += this._str[this._id % this._str.length];
    }
    this._text.value = txt;
  }


  protected _update(): void {
    super._update();



    if(this._text != undefined && Update.instance.cnt % 2 == 0) {
      // const mx = Mouse.instance.normal.x;
      // const my = Mouse.instance.normal.y;

      const rad = Util.instance.radian(this._c * 10);
      // this._text.rows = ~~(Util.instance.map(my, 1, 20, -1, 1));
      // this._text.cols = ~~(Util.instance.map(mx, 1, 20, -1, 1));
      // this._text.rows = ~~(Util.instance.map(Math.sin(rad), 1, 20, -1, 1));
      this._text.cols = ~~(Util.instance.map(Math.sin(rad), 1, 25, -1, 1));

      // if(this._c % 10 == 0) {
      //   let txt = '';
      //   const num = this._text.rows * this._text.cols;
      //   for(let i = 0; i < num; i++) {
      //     txt += this._str[~~(this._c + ~~(i / this._text.cols)) % this._str.length];
      //     if(i != 0 && i % this._text.cols == 0) txt += '\n'
      //   }
      //   this._text.value = txt;
      // }
    }
  }
}