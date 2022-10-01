import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleActorPeliculaComponent } from './detalle-actor-pelicula.component';

describe('DetalleActorPeliculaComponent', () => {
  let component: DetalleActorPeliculaComponent;
  let fixture: ComponentFixture<DetalleActorPeliculaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleActorPeliculaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleActorPeliculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
