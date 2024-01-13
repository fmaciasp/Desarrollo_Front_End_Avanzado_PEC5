import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WinesService } from 'src/app/services/wines.service';
import { Wine } from '../models/wine.interface';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit{
  wine!: Wine;

  constructor(private winesService: WinesService,
    private activatedRoute: ActivatedRoute,
    private router: Router) 
  {}

  ngOnInit(): void {
    const identifier : string | null = this.activatedRoute.snapshot.paramMap.get('id') ?? "";
    console.log('identifier -> ', identifier);

    this.winesService.getWineById(identifier).subscribe((wine) => {
      if(!wine){
        return this.router.navigateByUrl('/');
      }

      this.wine = wine;
      console.log('Wine -> ', this.wine)
      return;
    })
  }
}
