import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from '../../services/crud.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html'
})
export class CreateComponent {
  data = { name: '', description: '' };

  constructor(private crudService: CrudService, private router: Router) {}

  createData() {
    this.crudService.create(this.data).subscribe(() => {
      this.router.navigate(['/read']);
    });
  }
}
