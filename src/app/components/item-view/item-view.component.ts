import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemService } from '../../services/item.service';

@Component({
  selector: 'app-item-view',
  templateUrl: './item-view.component.html',
})
export class ItemViewComponent implements OnInit {
  item: any;

  constructor(private route: ActivatedRoute, private itemService: ItemService) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.itemService.getItemById(id!).subscribe((data) => {
      this.item = data;
    });
  }
}
