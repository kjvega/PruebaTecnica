"use strict";(self.webpackChunkplataforma_maxi_front=self.webpackChunkplataforma_maxi_front||[]).push([[194],{194:(C,c,i)=>{i.r(c),i.d(c,{AuthModule:()=>_});var g=i(895),r=i(377),n=i(256);const s=[{path:"",component:(()=>{class t{constructor(e){this.router=e}ngOnInit(){}verifyAuth(){this.router.navigate(["/app"])}}return t.\u0275fac=function(e){return new(e||t)(n.Y36(r.F0))},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-login"]],decls:34,vars:0,consts:[[1,"container-auth"],[1,"container-image"],["src","assets/images/trabajo.jpg","alt","logo-maxi"],[1,"container-login"],[1,"container-login-image"],[1,"container-title"],[1,"container-description"],[1,"container-form-auth"],[1,"container-field"],[1,"container-text-form"],[1,"container-input"],["type","text","placeholder","ingresa tu usuario"],["type","password","placeholder","ingresa tu contrase\xf1a"],[1,"container-routes"],[1,"container-routes-register"],["routerLink","register"],[1,"container-button"],["type","button",3,"click"]],template:function(e,a){1&e&&(n.TgZ(0,"div",0)(1,"div",1),n._UZ(2,"img",2),n.qZA(),n.TgZ(3,"div",3),n._UZ(4,"div",4),n.TgZ(5,"div",5)(6,"span"),n._uU(7," \xa1Hola bienvenido a MaxiTrabajo! "),n.qZA()(),n.TgZ(8,"div",6)(9,"span"),n._uU(10,"Inicia secion para administrar tu cuenta"),n.qZA()(),n.TgZ(11,"div",7)(12,"form")(13,"div",8)(14,"div",9)(15,"label"),n._uU(16,"Usuario"),n.qZA()(),n.TgZ(17,"div",10),n._UZ(18,"input",11),n.qZA()(),n.TgZ(19,"div",8)(20,"div",9)(21,"label"),n._uU(22,"Contrase\xf1a"),n.qZA()(),n.TgZ(23,"div",10),n._UZ(24,"input",12),n.qZA()(),n.TgZ(25,"div",13)(26,"div",14)(27,"p"),n._uU(28,"\xbfNo tienes cuenta?"),n.qZA(),n.TgZ(29,"span",15),n._uU(30,"Registrate"),n.qZA()()(),n.TgZ(31,"div",16)(32,"button",17),n.NdJ("click",function(){return a.verifyAuth()}),n._uU(33,"Iniciar secion"),n.qZA()()()()()())},dependencies:[r.rH],styles:['.container-auth[_ngcontent-%COMP%]{height:100%;width:100%;display:grid;grid-template-columns:1.4fr .6fr;grid-template-rows:1fr auto;gap:0 0;grid-auto-flow:row;grid-template-areas:"container-image container-login"}.container-auth[_ngcontent-%COMP%]   .container-image[_ngcontent-%COMP%]{grid-area:container-image;width:100%;height:100%;overflow:hidden}.container-auth[_ngcontent-%COMP%]   .container-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover}.container-auth[_ngcontent-%COMP%]   .container-login[_ngcontent-%COMP%]{grid-area:container-login;width:100%;height:100%;padding:0 20px;display:flex;flex-direction:column;align-items:center;justify-content:center}.container-auth[_ngcontent-%COMP%]   .container-login[_ngcontent-%COMP%]   .container-login-image[_ngcontent-%COMP%]{width:100%;margin-bottom:12px}.container-auth[_ngcontent-%COMP%]   .container-login[_ngcontent-%COMP%]   .container-title[_ngcontent-%COMP%]{width:100%;display:flex;align-items:center;justify-content:center;text-align:center;margin-bottom:16px}.container-auth[_ngcontent-%COMP%]   .container-login[_ngcontent-%COMP%]   .container-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:28px;font-weight:700;color:#34b0ff}.container-auth[_ngcontent-%COMP%]   .container-login[_ngcontent-%COMP%]   .container-description[_ngcontent-%COMP%]{width:100%;margin-bottom:12px;text-align:center}.container-auth[_ngcontent-%COMP%]   .container-login[_ngcontent-%COMP%]   .container-description[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:16px;color:#5e5c5cdb}.container-auth[_ngcontent-%COMP%]   .container-login[_ngcontent-%COMP%]   .container-form-auth[_ngcontent-%COMP%]{width:100%}.container-auth[_ngcontent-%COMP%]   .container-login[_ngcontent-%COMP%]   .container-form-auth[_ngcontent-%COMP%]   .container-field[_ngcontent-%COMP%]{width:100%;margin-bottom:16px}.container-auth[_ngcontent-%COMP%]   .container-login[_ngcontent-%COMP%]   .container-form-auth[_ngcontent-%COMP%]   .container-field[_ngcontent-%COMP%]   .container-text-form[_ngcontent-%COMP%]{width:100%;margin-bottom:8px}.container-auth[_ngcontent-%COMP%]   .container-login[_ngcontent-%COMP%]   .container-form-auth[_ngcontent-%COMP%]   .container-field[_ngcontent-%COMP%]   .container-text-form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-size:16px;font-weight:700;color:#2daefdba}.container-auth[_ngcontent-%COMP%]   .container-login[_ngcontent-%COMP%]   .container-form-auth[_ngcontent-%COMP%]   .container-field[_ngcontent-%COMP%]   .container-input[_ngcontent-%COMP%]{width:100%}.container-auth[_ngcontent-%COMP%]   .container-login[_ngcontent-%COMP%]   .container-form-auth[_ngcontent-%COMP%]   .container-field[_ngcontent-%COMP%]   .container-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:100%;border:none;padding:8px;border-bottom:solid 2px rgba(94,92,92,.86);outline:none}.container-auth[_ngcontent-%COMP%]   .container-login[_ngcontent-%COMP%]   .container-form-auth[_ngcontent-%COMP%]   .container-field[_ngcontent-%COMP%]   .container-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus{border-bottom:solid 2px rgba(52,176,255,.73);caret-color:#5e5c5cdb;transition:.6s}.container-auth[_ngcontent-%COMP%]   .container-login[_ngcontent-%COMP%]   .container-form-auth[_ngcontent-%COMP%]   .container-routes[_ngcontent-%COMP%]{width:100%;display:flex;flex-direction:column;gap:8px;margin-top:16px}.container-auth[_ngcontent-%COMP%]   .container-login[_ngcontent-%COMP%]   .container-form-auth[_ngcontent-%COMP%]   .container-routes[_ngcontent-%COMP%]   .container-routes-register[_ngcontent-%COMP%]{width:100%;display:flex;align-items:center;justify-content:center;gap:6px}.container-auth[_ngcontent-%COMP%]   .container-login[_ngcontent-%COMP%]   .container-form-auth[_ngcontent-%COMP%]   .container-routes[_ngcontent-%COMP%]   .container-routes-register[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#5e5c5cdb;font-size:14px}.container-auth[_ngcontent-%COMP%]   .container-login[_ngcontent-%COMP%]   .container-form-auth[_ngcontent-%COMP%]   .container-routes[_ngcontent-%COMP%]   .container-routes-register[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:inline-block;font-size:14px;color:#34b0ffba;font-weight:700;transition:transform .3s ease-in-out}.container-auth[_ngcontent-%COMP%]   .container-login[_ngcontent-%COMP%]   .container-form-auth[_ngcontent-%COMP%]   .container-routes[_ngcontent-%COMP%]   .container-routes-register[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:hover{transform:scale(1.1);color:#34b0ff80}.container-auth[_ngcontent-%COMP%]   .container-login[_ngcontent-%COMP%]   .container-form-auth[_ngcontent-%COMP%]   .container-routes[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:14px;color:#5e5c5cdb;font-weight:700}.container-auth[_ngcontent-%COMP%]   .container-login[_ngcontent-%COMP%]   .container-form-auth[_ngcontent-%COMP%]   .container-routes[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:hover{font-weight:700;color:#34b0ffba;cursor:pointer;transition:.7s}.container-auth[_ngcontent-%COMP%]   .container-login[_ngcontent-%COMP%]   .container-form-auth[_ngcontent-%COMP%]   .container-button[_ngcontent-%COMP%]{width:100%;margin-top:10px}.container-auth[_ngcontent-%COMP%]   .container-login[_ngcontent-%COMP%]   .container-form-auth[_ngcontent-%COMP%]   .container-button[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:100%;padding:10px;border-radius:8px;color:#fff;border:none;outline:none;cursor:pointer;background:rgba(52,176,255,.73);font-size:18px}.container-auth[_ngcontent-%COMP%]   .container-login[_ngcontent-%COMP%]   .container-form-auth[_ngcontent-%COMP%]   .container-button[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background:white;color:#34b0ffba;outline:solid 1px rgba(52,176,255,.73);font-weight:700;transition:.7s}.example-container[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] + mat-form-field[_ngcontent-%COMP%]{margin-left:8px}.example-right-align[_ngcontent-%COMP%]{text-align:right}input.example-right-align[_ngcontent-%COMP%]::-webkit-outer-spin-button, input.example-right-align[_ngcontent-%COMP%]::-webkit-inner-spin-button{display:none}input.example-right-align[_ngcontent-%COMP%]{-moz-appearance:textfield}']}),t})()},{path:"register",component:(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-register"]],decls:45,vars:0,consts:[[1,"main-container-register"],[1,"container-image"],["src","assets/images/register.jpg"],[1,"container-register"],[1,"container-title"],[1,"container-description"],[1,"container-form-auth"],[1,"container-field"],[1,"container-text-form"],[1,"container-input"],["type","text","placeholder","ingresa tu usuario"],["type","password","placeholder","ingresa tu contrase\xf1a"],["type","text","placeholder","ingresa tu Nombre"],["type","text","placeholder","ingresa tus apellidos"],["type","number","placeholder","ingresa tu edad"],[1,"container-button"],["type","button"]],template:function(e,a){1&e&&(n.TgZ(0,"div",0)(1,"div",1),n._UZ(2,"img",2),n.qZA(),n.TgZ(3,"div",3)(4,"div",4)(5,"span"),n._uU(6," \xa1Registrate! "),n.qZA()(),n.TgZ(7,"div",5)(8,"span"),n._uU(9,"Registra tus datos para crear tu cuenta"),n.qZA()(),n.TgZ(10,"div",6)(11,"form")(12,"div",7)(13,"div",8)(14,"label"),n._uU(15,"Usuario"),n.qZA()(),n.TgZ(16,"div",9),n._UZ(17,"input",10),n.qZA()(),n.TgZ(18,"div",7)(19,"div",8)(20,"label"),n._uU(21,"Contrase\xf1a"),n.qZA()(),n.TgZ(22,"div",9),n._UZ(23,"input",11),n.qZA()(),n.TgZ(24,"div",7)(25,"div",8)(26,"label"),n._uU(27,"Nombres"),n.qZA()(),n.TgZ(28,"div",9),n._UZ(29,"input",12),n.qZA()(),n.TgZ(30,"div",7)(31,"div",8)(32,"label"),n._uU(33,"Apellidos"),n.qZA()(),n.TgZ(34,"div",9),n._UZ(35,"input",13),n.qZA()(),n.TgZ(36,"div",7)(37,"div",8)(38,"label"),n._uU(39,"Edad"),n.qZA()(),n.TgZ(40,"div",9),n._UZ(41,"input",14),n.qZA()(),n.TgZ(42,"div",15)(43,"button",16),n._uU(44,"Registrate"),n.qZA()()()()()())},styles:['.main-container-register[_ngcontent-%COMP%]{height:100%;width:100%;display:grid;grid-template-columns:1.4fr .6fr;grid-template-rows:1fr auto;gap:0 0;grid-auto-flow:row;grid-template-areas:"container-image container-register"}.main-container-register[_ngcontent-%COMP%]   .container-image[_ngcontent-%COMP%]{grid-area:container-image;width:100%;height:100%;background:rgba(253,253,253,.86);display:flex;align-items:center;justify-content:center;overflow:hidden}.main-container-register[_ngcontent-%COMP%]   .container-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border-radius:100%}.main-container-register[_ngcontent-%COMP%]   .container-register[_ngcontent-%COMP%]{grid-area:container-register;width:100%;height:100%;padding:0 20px;display:flex;flex-direction:column;align-items:center;justify-content:center}.main-container-register[_ngcontent-%COMP%]   .container-register[_ngcontent-%COMP%]   .container-login-image[_ngcontent-%COMP%]{width:100%;margin-bottom:12px}.main-container-register[_ngcontent-%COMP%]   .container-register[_ngcontent-%COMP%]   .container-title[_ngcontent-%COMP%]{width:100%;display:flex;align-items:center;justify-content:center;text-align:center;margin-bottom:16px}.main-container-register[_ngcontent-%COMP%]   .container-register[_ngcontent-%COMP%]   .container-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:28px;font-weight:700;color:#34b0ff}.main-container-register[_ngcontent-%COMP%]   .container-register[_ngcontent-%COMP%]   .container-description[_ngcontent-%COMP%]{width:100%;margin-bottom:12px;text-align:center}.main-container-register[_ngcontent-%COMP%]   .container-register[_ngcontent-%COMP%]   .container-description[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:16px;color:#5e5c5cdb}.main-container-register[_ngcontent-%COMP%]   .container-register[_ngcontent-%COMP%]   .container-form-auth[_ngcontent-%COMP%]{width:100%}.main-container-register[_ngcontent-%COMP%]   .container-register[_ngcontent-%COMP%]   .container-form-auth[_ngcontent-%COMP%]   .container-field[_ngcontent-%COMP%]{width:100%;margin-bottom:16px}.main-container-register[_ngcontent-%COMP%]   .container-register[_ngcontent-%COMP%]   .container-form-auth[_ngcontent-%COMP%]   .container-field[_ngcontent-%COMP%]   .container-text-form[_ngcontent-%COMP%]{width:100%;margin-bottom:8px}.main-container-register[_ngcontent-%COMP%]   .container-register[_ngcontent-%COMP%]   .container-form-auth[_ngcontent-%COMP%]   .container-field[_ngcontent-%COMP%]   .container-text-form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-size:16px;font-weight:700;color:#2daefdba}.main-container-register[_ngcontent-%COMP%]   .container-register[_ngcontent-%COMP%]   .container-form-auth[_ngcontent-%COMP%]   .container-field[_ngcontent-%COMP%]   .container-input[_ngcontent-%COMP%]{width:100%}.main-container-register[_ngcontent-%COMP%]   .container-register[_ngcontent-%COMP%]   .container-form-auth[_ngcontent-%COMP%]   .container-field[_ngcontent-%COMP%]   .container-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:100%;border:none;padding:8px;border-bottom:solid 2px rgba(94,92,92,.86);outline:none}.main-container-register[_ngcontent-%COMP%]   .container-register[_ngcontent-%COMP%]   .container-form-auth[_ngcontent-%COMP%]   .container-field[_ngcontent-%COMP%]   .container-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus{border-bottom:solid 2px rgba(52,176,255,.73);caret-color:#5e5c5cdb;transition:.6s}.main-container-register[_ngcontent-%COMP%]   .container-register[_ngcontent-%COMP%]   .container-form-auth[_ngcontent-%COMP%]   .container-routes[_ngcontent-%COMP%]{width:100%;display:flex;flex-direction:column;gap:8px;margin-top:16px}.main-container-register[_ngcontent-%COMP%]   .container-register[_ngcontent-%COMP%]   .container-form-auth[_ngcontent-%COMP%]   .container-routes[_ngcontent-%COMP%]   .container-routes-register[_ngcontent-%COMP%]{width:100%;display:flex;align-items:center;justify-content:center;gap:6px}.main-container-register[_ngcontent-%COMP%]   .container-register[_ngcontent-%COMP%]   .container-form-auth[_ngcontent-%COMP%]   .container-routes[_ngcontent-%COMP%]   .container-routes-register[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#5e5c5cdb;font-size:14px}.main-container-register[_ngcontent-%COMP%]   .container-register[_ngcontent-%COMP%]   .container-form-auth[_ngcontent-%COMP%]   .container-routes[_ngcontent-%COMP%]   .container-routes-register[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:inline-block;font-size:14px;color:#34b0ffba;font-weight:700;transition:transform .3s ease-in-out}.main-container-register[_ngcontent-%COMP%]   .container-register[_ngcontent-%COMP%]   .container-form-auth[_ngcontent-%COMP%]   .container-routes[_ngcontent-%COMP%]   .container-routes-register[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:hover{transform:scale(1.1);color:#34b0ff80}.main-container-register[_ngcontent-%COMP%]   .container-register[_ngcontent-%COMP%]   .container-form-auth[_ngcontent-%COMP%]   .container-routes[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:14px;color:#5e5c5cdb;font-weight:700}.main-container-register[_ngcontent-%COMP%]   .container-register[_ngcontent-%COMP%]   .container-form-auth[_ngcontent-%COMP%]   .container-routes[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:hover{font-weight:700;color:#34b0ffba;cursor:pointer;transition:.7s}.main-container-register[_ngcontent-%COMP%]   .container-register[_ngcontent-%COMP%]   .container-form-auth[_ngcontent-%COMP%]   .container-button[_ngcontent-%COMP%]{width:100%;margin-top:10px}.main-container-register[_ngcontent-%COMP%]   .container-register[_ngcontent-%COMP%]   .container-form-auth[_ngcontent-%COMP%]   .container-button[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:100%;padding:10px;border-radius:8px;color:#fff;border:none;outline:none;cursor:pointer;background:rgba(52,176,255,.73);font-size:18px}.main-container-register[_ngcontent-%COMP%]   .container-register[_ngcontent-%COMP%]   .container-form-auth[_ngcontent-%COMP%]   .container-button[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background:white;color:#34b0ffba;outline:solid 1px rgba(52,176,255,.73);font-weight:700;transition:.7s}']}),t})()}];let u=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[r.Bz.forChild(s),r.Bz]}),t})(),_=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[g.ez,u]}),t})()}}]);