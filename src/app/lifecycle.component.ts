import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, Input, ViewChild, ContentChild } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  template: `
    <h1>
      lifecycle Works!
    </h1>
    <ng-content></ng-content>
    <hr>
    <p #boundParagraph>{{bindable}}</p>
    <p>{{boundParagraph.textContent}}</p>
  `, //the #boundParagraph is a variable to reference to use this local variable, it's not ususable in the class body, only availble in the local template unless you use @ViewChild
  styles: []
})
export class LifecycleComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy { //onInit is the default hook the comps are created with

  @Input() bindable = 1000
  
  @ViewChild('boundParagraph') 
  boundParagraph: HTMLElement;

  @ContentChild('boundContent')
  boundContent: HTMLElement;

  constructor() { }

  ngOnChanges(){ //for every implementation hook, you have to repeat that hook here after the constructor
    this.log('ngOnChanges')
  }
  ngOnInit() {
    this.log('ngOnInit')
  }
  ngDoCheck(){
    this.log('ngDoCheck')
  }
  ngAfterContentInit(){
    this.log('ngAfterContentInit')
  }
  ngAfterContentChecked(){
    this.log('ngAfterContentChecked')
    console.log(this.boundParagraph, "before"); //this variable won't work here so the log will be undefined, at least it shouldn't but it did for some reason
  }
  ngAfterViewInit(){
    this.log('ngAfterViewInit')
    console.log(this.boundParagraph); //only works here because the view hasn't been initialized yet
    console.log(this.boundContent, "bound Content");
  }
  ngAfterViewChecked(){
    this.log('ngAfterViewChecked')
  }
  ngOnDestroy(){
    this.log('ngOnDestroy')
  }
  private log(hook: string){
    console.log(hook)
  }

}
