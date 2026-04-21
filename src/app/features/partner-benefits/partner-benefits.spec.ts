import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnerBenefits } from './partner-benefits';

describe('PartnerBenefits', () => {
  let component: PartnerBenefits;
  let fixture: ComponentFixture<PartnerBenefits>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PartnerBenefits]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartnerBenefits);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
