import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { QuillComponent } from "./components/quill/quill.component";
import { ParentComponent } from "./components/parent/parent/parent.component";
import { ChildComponent } from "./components/child/child/child.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, QuillComponent, ParentComponent, ChildComponent]
})
export class AppComponent {
  title = 'editor-project';
}
