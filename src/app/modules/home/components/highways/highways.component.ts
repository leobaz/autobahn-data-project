import { Component, OnInit } from '@angular/core';
import { HighwaysService } from '../../../../core/services/highways.service';
import { Highways } from '../../../../shared/models/highways.model';

@Component({
  selector: 'app-highways',
  templateUrl: './highways.component.html',
  styleUrl: './highways.component.scss',
})
export class HighwaysComponent implements OnInit {
  highways?: Highways;

  constructor(private highwaysService: HighwaysService) {}

  ngOnInit(): void {
    this.getAllAvailableHighways();
  }

  getAllAvailableHighways() {
    this.highwaysService.getHighways().subscribe((data) => {
      this.highways = data;
    });
  }
}
