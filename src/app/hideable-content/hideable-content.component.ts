import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hideable-content',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hideable-content.component.html',
  styleUrls: ['./hideable-content.component.css']
})
export class HideableContentComponent {
  public isHidden : boolean = true ;

  public handleClickEvent() : void {
    this.isHidden = !this.isHidden;
  }
}
