import {Component, ElementRef, HostListener, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';

@Component({
  selector: 'app-barrage',
  templateUrl: './barrage.component.html',
  styleUrls: ['./barrage.component.scss']
})
export class BarrageComponent implements OnInit, OnChanges {

  @ViewChild('branche') branche: ElementRef;
  @ViewChild('barage') barage: ElementRef;
  @Input() lvlBarrage: number;
  hidingLvl: number;
  clippingHeight: number;
  clippingWidth: number;
  woodWidth = 507;
  woodHeight = 624;

  constructor() {}

  ngOnInit() {
    this.computeSize();
  }

  ngOnChanges(change: SimpleChanges) {
    if (change.lvlBarrage && change.lvlBarrage.currentValue) {
      this.computeSize();
    }
  }

  private computeSize() {
    this.clippingHeight = this.branche.nativeElement.clientHeight;
    this.woodWidth = ((507 / 624 * this.barage.nativeElement.clientHeight || 507) - 50);
    this.woodHeight = this.barage.nativeElement.clientHeight - 20;
    this.clippingWidth = this.woodWidth;
    console.log(this.woodWidth);
    console.log(this.woodHeight);
    this.hidingLvl = this.woodHeight - ( this.woodHeight / 100 * this.lvlBarrage) ;
  }
  @HostListener('window:resize') onResize() {
    this.computeSize();
  }

}
