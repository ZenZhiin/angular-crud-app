import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../services/crud.service';

@Component({
  selector: 'app-read',
  templateUrl: './view.component.html'
})
export class ViewComponent implements OnInit {
  items: any[] = [];

  constructor(private crudService: CrudService) {}

  ngOnInit() {
    this.crudService.getAll().subscribe((data: any[]) => {
      this.items = data;
    });
  }
}
