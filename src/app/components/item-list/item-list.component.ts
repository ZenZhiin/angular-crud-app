import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../services/item.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css'],
})
export class ItemListComponent implements OnInit {
  items: any[] = [];

  constructor(private itemService: ItemService, private router: Router) {}

  ngOnInit(): void {
    this.getItems();
  }

  getItems() {
    this.itemService.getItems().subscribe(
      (data) => (this.items = data),
      (error) => console.error(error)
    );
  }

  deleteItem(id: string) {
    if (confirm('Are you sure you want to delete this item?')) {
      this.itemService.deleteItem(id).subscribe(
        () => this.getItems(),
        (error) => console.error(error)
      );
    }
  }

  editItem(id: string) {
    this.router.navigate(['/edit', id]);
  }
}
