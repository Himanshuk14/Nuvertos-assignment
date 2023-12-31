import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CompoundService } from 'src/app/services/compound.service';
import { Compound } from 'src/app/interface/compound';

@Component({
  selector: 'app-specific-compoud',
  templateUrl: './specific-compoud.component.html',
  styleUrls: ['./specific-compoud.component.css'],
})
export class SpecificCompoudComponent implements OnInit {
  id: string;
  compound: Compound;
  constructor(
    private route: ActivatedRoute,
    private compoundService: CompoundService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.compoundService.getCompoundById(this.id).subscribe(
      (compound) => (this.compound = compound),
      (error) => this.router.navigate(['/404']),
    );
  }
}
