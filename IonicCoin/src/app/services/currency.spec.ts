import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { CurrencyService } from './currency'; // <-- Importa o serviço correto

describe('CurrencyService', () => {
  let service: CurrencyService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient() // <-- Adicionado para o teste não quebrar por falta do cliente HTTP
      ]
    });
    service = TestBed.inject(CurrencyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});