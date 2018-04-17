import {Component, ElementRef, HostListener, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';

@Component({
  selector: 'app-waingunga',
  templateUrl: './waingunga.component.html',
  styleUrls: ['./waingunga.component.scss']
})
export class WaingungaComponent implements OnInit, OnChanges {

  @Input() lvlWaingunga: number;
  oceanWidth = 558;
  oceanHeight;
  oceanOriginalHeight: number;
  @ViewChild('frameRock') frameRock: ElementRef;
  @ViewChild('ocean') ocean: ElementRef;
  constructor() {
  }

  ngOnInit() {
    this.computeSizes();
  }

  private computeSizes(){
    if (!this.oceanOriginalHeight){
      this.oceanOriginalHeight = this.ocean.nativeElement.clientHeight;
    }
    if (this.frameRock.nativeElement.clientHeight) {
      this.oceanWidth = this.frameRock.nativeElement.naturalWidth
        / this.frameRock.nativeElement.naturalHeight
        * this.frameRock.nativeElement.clientHeight;
    }
    this.oceanHeight = this.oceanOriginalHeight / 100 * this.lvlWaingunga;
  }

  ngOnChanges(change: SimpleChanges) {
    if(change && change && change.lvlWaingunga.currentValue) {
      this.computeSizes();
    }
  }

  @HostListener('window:resize') onResize() {
    this.computeSizes();
  }

  getData() {
  }

}
