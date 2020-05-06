import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SmallPage } from './small.page';

describe('SmallPage', () => {
  let component: SmallPage;
  let fixture: ComponentFixture<SmallPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmallPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SmallPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
