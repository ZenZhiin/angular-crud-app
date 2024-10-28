import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudService } from '../../services/crud.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html'
})
export class UpdateComponent implements OnInit {
  id: number;
  data = { name: '', description: '' };

  constructor(
    private route: ActivatedRoute,
    private crudService: CrudService,
    private router: Router
  ) {
    this.id = +this.route.snapshot.params['id'];
  }

  ngOnInit() {
    this.crudService.getById(this.id).subscribe((data) => {
      this.data = data;
    });
  }

  updateData() {
    this.crudService.update(this.id, this.data).subscribe(() => {
      this.router.navigate(['/read']);
    });
  }
}
