import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogHistoricoComponent } from './log-historico.component';

describe('LogHistoricoComponent', () => {
  let component: LogHistoricoComponent;
  let fixture: ComponentFixture<LogHistoricoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogHistoricoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogHistoricoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
