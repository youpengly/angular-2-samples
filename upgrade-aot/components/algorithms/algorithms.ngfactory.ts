/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '../../../components/algorithms/algorithms';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/render/api';
import * as import3 from '@angular/core/src/linker/element';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/di/injector';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '@angular/core/src/metadata/view';
import * as import9 from '@angular/core/src/linker/component_factory';
import * as import10 from '../insertion-sort/insertion-sort.ngfactory';
import * as import11 from '../../../components/insertion-sort/insertion-sort';
export class Wrapper_Algorithms {
  context:import0.Algorithms;
  changed:boolean;
  constructor() {
    this.changed = false;
    this.context = new import0.Algorithms();
  }
  detectChangesInInputProps(view:import1.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this.changed;
    this.changed = false;
    return changed;
  }
  detectChangesInHostProps(view:import1.AppView<any>,el:any,throwOnChange:boolean):void {
  }
}
var renderType_Algorithms_Host:import2.RenderComponentType = (null as any);
class _View_Algorithms_Host0 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import3.AppElement;
  _Algorithms_0_4:Wrapper_Algorithms;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement) {
    super(_View_Algorithms_Host0,renderType_Algorithms_Host,import6.ViewType.HOST,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import3.AppElement {
    this._el_0 = import4.selectOrCreateRenderHostElement(this.renderer,'algorithms',import4.EMPTY_INLINE_ARRAY,rootSelector,(null as any));
    this._appEl_0 = new import3.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_Algorithms0(this.viewUtils,this.injector(0),this._appEl_0);
    this._Algorithms_0_4 = new Wrapper_Algorithms();
    this._appEl_0.initComponent(this._Algorithms_0_4.context,([] as any[]),compView_0);
    compView_0.create(this._Algorithms_0_4.context,this.projectableNodes,(null as any));
    this.init(([] as any[]).concat([this._el_0]),[this._el_0],([] as any[]),([] as any[]));
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.Algorithms) && (0 === requestNodeIndex))) { return this._Algorithms_0_4.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._Algorithms_0_4.detectChangesInInputProps(this,this._el_0,throwOnChange);
    this.detectContentChildrenChanges(throwOnChange);
    this._Algorithms_0_4.detectChangesInHostProps(this,this._el_0,throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_Algorithms_Host0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement):import1.AppView<any> {
  if ((renderType_Algorithms_Host === (null as any))) { (renderType_Algorithms_Host = viewUtils.createRenderComponentType('',0,import8.ViewEncapsulation.None,([] as any[]),{})); }
  return new _View_Algorithms_Host0(viewUtils,parentInjector,declarationEl);
}
export const AlgorithmsNgFactory:import9.ComponentFactory<import0.Algorithms> = new import9.ComponentFactory<import0.Algorithms>('algorithms',viewFactory_Algorithms_Host0,import0.Algorithms);
const styles_Algorithms:any[] = ([] as any[]);
var renderType_Algorithms:import2.RenderComponentType = (null as any);
class _View_Algorithms0 extends import1.AppView<import0.Algorithms> {
  _el_0:any;
  _text_1:any;
  _text_2:any;
  _el_3:any;
  _text_4:any;
  _text_5:any;
  _el_6:any;
  /*private*/ _appEl_6:import3.AppElement;
  _InsertionSort_6_4:import10.Wrapper_InsertionSort;
  _text_7:any;
  _el_8:any;
  _el_9:any;
  _text_10:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement) {
    super(_View_Algorithms0,renderType_Algorithms,import6.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import3.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._el_0 = import4.createRenderElement(this.renderer,parentRenderNode,'h1',import4.EMPTY_INLINE_ARRAY,(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'Insertion Sort Demo',(null as any));
    this._text_2 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    this._el_3 = import4.createRenderElement(this.renderer,parentRenderNode,'div',import4.EMPTY_INLINE_ARRAY,(null as any));
    this._text_4 = this.renderer.createText(this._el_3,'Watch the list get sorted as the algorithm traverses the list',(null as any));
    this._text_5 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    this._el_6 = import4.createRenderElement(this.renderer,parentRenderNode,'insertion-sort',import4.EMPTY_INLINE_ARRAY,(null as any));
    this._appEl_6 = new import3.AppElement(6,(null as any),this,this._el_6);
    var compView_6:any = import10.viewFactory_InsertionSort0(this.viewUtils,this.injector(6),this._appEl_6);
    this._InsertionSort_6_4 = new import10.Wrapper_InsertionSort();
    this._appEl_6.initComponent(this._InsertionSort_6_4.context,([] as any[]),compView_6);
    compView_6.create(this._InsertionSort_6_4.context,([] as any[]),(null as any));
    this._text_7 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    this._el_8 = import4.createRenderElement(this.renderer,parentRenderNode,'h4',import4.EMPTY_INLINE_ARRAY,(null as any));
    this._el_9 = import4.createRenderElement(this.renderer,this._el_8,'a',new import4.InlineArray2(2,'href','http://www.syntaxsuccess.com/viewarticle/timeouts-and-timerwrapper-in-angular-2.0'),(null as any));
    this._text_10 = this.renderer.createText(this._el_9,'Read more here',(null as any));
    this.init(([] as any[]),[
      this._el_0,
      this._text_1,
      this._text_2,
      this._el_3,
      this._text_4,
      this._text_5,
      this._el_6,
      this._text_7,
      this._el_8,
      this._el_9,
      this._text_10
    ]
    ,([] as any[]),([] as any[]));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import11.InsertionSort) && (6 === requestNodeIndex))) { return this._InsertionSort_6_4.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._InsertionSort_6_4.detectChangesInInputProps(this,this._el_6,throwOnChange);
    this.detectContentChildrenChanges(throwOnChange);
    this._InsertionSort_6_4.detectChangesInHostProps(this,this._el_6,throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
}
export function viewFactory_Algorithms0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement):import1.AppView<import0.Algorithms> {
  if ((renderType_Algorithms === (null as any))) { (renderType_Algorithms = viewUtils.createRenderComponentType('',0,import8.ViewEncapsulation.None,styles_Algorithms,{})); }
  return new _View_Algorithms0(viewUtils,parentInjector,declarationEl);
}