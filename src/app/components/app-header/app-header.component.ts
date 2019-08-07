import {
  Component,
  Output,
  EventEmitter,
  Input,
  ChangeDetectionStrategy
} from "@angular/core";
import { User } from "../../../auth/shared/services/auth/auth.service";

@Component({
  selector: "app-header",
  templateUrl: "./app-header.component.html",
  styleUrls: ["./app-header.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppHeaderComponent {
  @Output() logout: EventEmitter<any> = new EventEmitter();
  @Input() user: User;

  logoutUser() {
    this.logout.emit();
  }
}
