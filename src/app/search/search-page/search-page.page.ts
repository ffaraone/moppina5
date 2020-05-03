import { Component, OnInit } from '@angular/core';

import { MopidyService } from '../../services/mopidy.service'

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.page.html',
  styleUrls: ['./search-page.page.scss'],
})
export class SearchPagePage implements OnInit {

  constructor(private mopidy: MopidyService) { 
  }

  ngOnInit() {
  }

}
