import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VendorMenuPage } from './vendor-menu.page';

describe('VendorMenuPage', () => {
  let component: VendorMenuPage;
  let fixture: ComponentFixture<VendorMenuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorMenuPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VendorMenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
