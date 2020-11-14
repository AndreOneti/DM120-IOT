import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LuminosidadePage } from './luminosidade.page';

describe('LuminosidadePage', () => {
  let component: LuminosidadePage;
  let fixture: ComponentFixture<LuminosidadePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LuminosidadePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LuminosidadePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
