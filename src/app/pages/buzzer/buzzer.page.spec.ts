import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BuzzerPage } from './buzzer.page';

describe('BuzzerPage', () => {
  let component: BuzzerPage;
  let fixture: ComponentFixture<BuzzerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuzzerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BuzzerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
