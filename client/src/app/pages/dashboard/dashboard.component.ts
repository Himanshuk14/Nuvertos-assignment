import { Component, OnInit } from '@angular/core';
import { Compound, CompoundResponse } from 'src/app/interface/compound';
import { CompoundService } from '../../services/compound.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  compounds: Compound[];
  page: number;
  totalCompounds: number;
  totalPages: number;

  constructor(
    private compoundService: CompoundService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      if (
        (Object.keys(params).length === 1 && !params['pg']) ||
        Object.keys(params).length > 1
      ) {
        this.router.navigate(['/404']);
        return;
      }
      if (params['pg'] && isNaN(Number(params['pg']))) {
        this.router.navigate(['/404']);
        return;
      }
      this.page = Number(params['pg']) || 1;
      this.compoundService.getCompounds(this.page).subscribe(
        (response) => {
          this.compounds = response.rows;
          this.totalCompounds = response.count;
          this.totalPages = Math.ceil(this.totalCompounds / 3);
        },
        (error) => this.router.navigate(['/404'])
      );
    });
  }

  deleteCompound(compound: Compound) {
    this.compoundService.deleteCompound(compound).subscribe(() => {
      this.compounds = this.compounds.filter((t) => t.id !== compound.id);
      if (this.compounds.length === 0) {
        this.router.navigate(['/compounds'], {
          queryParams: { pg: --this.page },
        });
      }
    });
  }
}
