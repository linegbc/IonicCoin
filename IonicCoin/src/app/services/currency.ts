import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService { // <-- Ajustado para CurrencyService
  // URL pública e gratuita da ExchangeRate-API (não precisa de chave para testes rápidos)
  private apiUrl = 'https://open.er-api.com/v6/latest'; 

  constructor(private http: HttpClient) { }

  /**
   * 1. Busca as taxas de câmbio atualizadas.
   * Se o usuário estiver offline, a requisição falha e o catchError recupera os últimos dados salvos.
   */
  getRates(baseCurrency: string = 'BRL'): Observable<any> {
    return this.http.get(`${this.apiUrl}/${baseCurrency}`).pipe(
      tap(response => {
        // Atualização Automática: Sempre que buscar com sucesso, salva localmente para uso offline [cite: 38]
        localStorage.setItem(`rates_${baseCurrency}`, JSON.stringify(response));
      }),
      catchError(error => {
        console.warn('Usuário offline ou erro de rede. Usando dados locais.', error);
        const cachedData = localStorage.getItem(`rates_${baseCurrency}`);
        if (cachedData) {
          return of(JSON.parse(cachedData));
        }
        throw error; // Se não houver dados locais nem internet, repassa o erro
      })
    );
  }

  /**
   * 2. Gerenciamento do Histórico de Conversões (Salva no Local Storage) [cite: 32]
   */
  getHistory(): any[] {
    const history = localStorage.getItem('ioniccoin_history');
    return history ? JSON.parse(history) : [];
  }

  saveToHistory(fromCurrency: string, toCurrency: string, amount: number, result: number) {
    const history = this.getHistory();
    const newEntry = {
      id: Date.now(),
      date: new Date().toLocaleString('pt-BR'),
      from: fromCurrency,
      to: toCurrency,
      amount: amount,
      result: result
    };
    
    history.unshift(newEntry); // Adiciona no início da lista (mais recente primeiro)
    localStorage.setItem('ioniccoin_history', JSON.stringify(history));
  }

  clearHistory() {
    localStorage.removeItem('ioniccoin_history');
  }
}