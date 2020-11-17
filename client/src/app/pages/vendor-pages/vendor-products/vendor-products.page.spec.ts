import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VendorProductsPage } from './vendor-products.page';

describe('VendorProductsPage', () => {
  let component: VendorProductsPage;
  let fixture: ComponentFixture<VendorProductsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorProductsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VendorProductsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
