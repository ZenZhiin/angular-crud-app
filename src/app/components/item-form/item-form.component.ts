import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ItemService } from '../../services/item.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.css'],
})
export class ItemFormComponent implements OnInit {
  itemForm: FormGroup;
  isEditMode: boolean = false;
  itemId: string | null = null;

  constructor(
    private fb: FormBuilder,
    private itemService: ItemService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.itemForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      price: [0, [Validators.required, Validators.min(0)]],
      stock: [0, [Validators.required, Validators.min(0)]],
    });
  }

  ngOnInit(): void {
    this.itemId = this.route.snapshot.paramMap.get('id');
    if (this.itemId) {
      this.isEditMode = true;
      this.itemService.getItemById(this.itemId).subscribe((item) => {
        this.itemForm.patchValue(item);
      });
    }
  }

  onSubmit() {
    if (this.itemForm.valid) {
      if (this.isEditMode) {
        this.itemService.updateItem(this.itemId!, this.itemForm.value).subscribe(() => {
          this.router.navigate(['/']);
        });
      } else {
        this.itemService.createItem(this.itemForm.value).subscribe(() => {
          this.router.navigate(['/']);
        });
      }
    }
  }
}
