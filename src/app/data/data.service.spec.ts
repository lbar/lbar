import { TestBed } from '@angular/core/testing';
import { DataService } from './data.service';

describe('DataService', () => {
  beforeEach(() =>
      TestBed.configureTestingModule({
        providers: [DataService],
      })
  );

  it('should be created', () => {
    const service: DataService = TestBed.get(DataService);
    expect(service).toBeTruthy();
  });

  it('should compute age', () => {
    const service: DataService = TestBed.get(DataService);
    const age = service.getAge();
    expect(age).toBeGreaterThanOrEqual(35);
  });
});
