import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LargePage } from './large.page';

describe('LargePage', () => {
  let component: LargePage;
  let fixture: ComponentFixture<LargePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LargePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LargePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
