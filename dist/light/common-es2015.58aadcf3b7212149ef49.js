(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"5dBV":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return GestionFormationModule}));class GestionFormationModule{}},"5vK5":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return CategoService}));var _angular_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("8Y7J"),_angular_common_http__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("IheW");let CategoService=(()=>{class CategoService{constructor(http){this.http=http}deleteCategorieService(id){return this.http.delete("http://localhost:8080/gestionCategorie/deleteCategorie/"+id,{responseType:"text"})}getCategorieListService(){return this.http.get("http://localhost:8080/gestionCategorie/listCategories")}addCategorieService(categorie){return this.http.post("http://localhost:8080/gestionCategorie/addCategorie",categorie)}editCategorieService(categorie,id){return this.http.put("http://localhost:8080/gestionCategorie/updateCategorie/"+id,categorie)}getCategorieService(id){return this.http.get("http://localhost:8080/gestionCategorie/getCategorie/"+id)}startCategorieService(id){return this.http.put("http://localhost:8080/gestionCategorie/startCategorie/"+id,"en cours")}getCategorieEnCoursService(){return this.http.get("http://localhost:8080/gestionCategorie/categorieByStatus/En Cours")}}return CategoService.ngInjectableDef=_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({factory:function(){return new CategoService(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.c))},token:CategoService,providedIn:"root"}),CategoService})()},QVqS:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return FormationService}));var _angular_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("8Y7J"),_angular_common_http__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("IheW");let FormationService=(()=>{class FormationService{constructor(http){this.http=http}deleteFormationService(id){return this.http.delete("http://localhost:8080/gestionFormation/deleteFormation/"+id,{responseType:"text"})}getFormationListService(){return this.http.get("http://localhost:8080/gestionFormation/listFormation")}addFormationService(formation){return this.http.post("http://localhost:8080/gestionFormation/addFormation",formation)}editFormationService(formation,id){return this.http.put("http://localhost:8080/gestionFormation/updateFormation/"+id,formation)}getFormationService(id){return this.http.get("http://localhost:8080/gestionFormation/getFormation/"+id)}startFormation(id){return this.http.put("http://localhost:8080/gestionFormation/startFormation/"+id,"")}getFormationEnCours(){return this.http.get("http://localhost:8080/gestionFormation/getFormationByStatus/En Cours")}}return FormationService.ngInjectableDef=_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({factory:function(){return new FormationService(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.c))},token:FormationService,providedIn:"root"}),FormationService})()},owVE:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return GestionFormateurService}));var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("IheW"),_angular_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("8Y7J");let GestionFormateurService=(()=>{class GestionFormateurService{constructor(http){this.http=http}deleteFormateurService(id){return this.http.delete("http://localhost:8080/gestionFormateur/deleteFormateur/"+id,{responseType:"text"})}getFormateurListService(){return this.http.get("http://localhost:8080/gestionFormateur/listFormateur")}addFormateurService(formdata){return this.http.post("http://localhost:8080/gestionFormateur/addFormateur",formdata)}editFormateurService(formadata,id){return this.http.put("http://localhost:8080/gestionFormateur/updateFormateur/"+id,formadata)}getFormateurService(id){return this.http.get("http://localhost:8080/gestionFormateur/getFormateur/"+id)}getFormateurCvService(filename){const param=(new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.g).set("cv",filename);return this.http.get("http://localhost:8080/gestionFormateur/getcv",{params:param,responseType:"arraybuffer"})}banFormateurService(id){return this.http.put("http://localhost:8080/gestionFormateur/banFormateur/"+id,"ancien")}getFormateurTravaillantActuel(){return this.http.get("http://localhost:8080/gestionFormateur/getFormateurByStatus/travaillant actuel")}}return GestionFormateurService.ngInjectableDef=_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({factory:function(){return new GestionFormateurService(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__.c))},token:GestionFormateurService,providedIn:"root"}),GestionFormateurService})()}}]);