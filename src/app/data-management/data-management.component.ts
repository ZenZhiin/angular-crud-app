import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { DataItem } from '../../models/data.model';

@Component({
  selector: 'app-data-management',
  templateUrl: './data-management.component.html',
  styleUrls: ['./data-management.component.css']
})
export class DataManagementComponent implements OnInit {
  dataList: DataItem[] = [];
  dataItem: DataItem = { name: '' };

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.dataService.getData().subscribe(data => this.dataList = data);
  }

  saveData(): void {
    if (this.dataItem.id) {
      this.dataService.updateData(this.dataItem.id, this.dataItem).subscribe(() => this.loadData());
    } else {
      this.dataService.addData(this.dataItem).subscribe(() => this.loadData());
    }
    this.resetForm();
  }

  editData(item: DataItem): void {
    this.dataItem = { ...item }; // Clone to prevent two-way binding issues
  }

  deleteData(id: number): void {
    this.dataService.deleteData(id).subscribe(() => this.loadData());
  }

  resetForm(): void {
    this.dataItem = { name: '' };
  }
}
