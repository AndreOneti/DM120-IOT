import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UmidadePage } from './umidade.page';

describe('UmidadePage', () => {
  let component: UmidadePage;
  let fixture: ComponentFixture<UmidadePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UmidadePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UmidadePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
