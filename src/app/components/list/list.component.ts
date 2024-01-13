import { Component } from '@angular/core';
import { Wine } from '../models/wine.interface';
import { WinesService } from 'src/app/services/wines.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  wines: Wine[] = [];

  constructor(private winesService: WinesService) {}

  ngOnInit(): void {
    this.winesService.getAllWines().subscribe((wines) => this.wines = wines);
  }

}
