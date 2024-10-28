import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudService } from '../../services/crud.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html'
})
export class DeleteComponent {
  id: number;

  constructor(
    private route: ActivatedRoute,
    private crudService: CrudService,
    private router: Router
  ) {
    this.id = +this.route.snapshot.params['id'];
  }

  deleteData() {
    this.crudService.delete(this.id).subscribe(() => {
      this.router.navigate(['/read']);
    });
  }
}
