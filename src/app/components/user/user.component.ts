import { Component,computed, EventEmitter, input, output, Output } from '@angular/core';
import { CardComponent } from '../tasks/card/card.component';


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  //  @Input({required: true}) avatar!: string;
  //  @Input({required: true}) name!: string;
  id = input.required<string>();
  avatar= input.required<string>();
  name = input.required<string>();
  selected = input.required<boolean>();
  imagePath = computed(()=>'assets/users/' + this.avatar())
  select = output<string>();



    protected onSelectUser():void {
      this.select.emit(this.id())
    }
}
