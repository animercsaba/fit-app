import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
  Output,
  EventEmitter
} from "@angular/core";

@Component({
  selector: "list-item",
  templateUrl: "./list-item.component.html",
  styleUrls: ["./list-item.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListItemComponent implements OnInit {
  @Input() item: any;
  @Output() remove = new EventEmitter();

  toggled: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  getRoute(item: any) {
    return [`../meals`, item.$key];
  }

  toggle() {
    this.toggled = !this.toggled;
  }

  removeItem() {
    this.remove.emit(this.item);
  }
}
