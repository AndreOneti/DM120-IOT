import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LedPage } from './led.page';

describe('LedPage', () => {
  let component: LedPage;
  let fixture: ComponentFixture<LedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LedPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
