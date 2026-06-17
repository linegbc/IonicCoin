import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CurrencyService } from '../../services/currency';
import { Router } from '@angular/router';

// 1. IMPORTAR AS FUNÇÕES DE ÍCONES DO IONICONS
import { addIcons } from 'ionicons'; 
import { timeOutline, swapHorizontalOutline } from 'ionicons/icons'; 

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule]
})
export class HomePage implements OnInit {
  amount: number = 1;
  fromCurrency: string = 'BRL';
  toCurrency: string = 'USD';
  result: number = 0;
  rates: any = {};
  currencies: string[] = [];
  errorMessage: string = '';

  constructor(
    private currencyService: CurrencyService,
    private router: Router
  ) {
    addIcons({ timeOutline, swapHorizontalOutline });
  }

  ngOnInit() {
    this.loadRates();
  }

  loadRates() {
    this.currencyService.getRates(this.fromCurrency).subscribe({
      next: (data) => {
        this.rates = data.rates;
        this.currencies = Object.keys(this.rates);
        this.errorMessage = '';
        this.convert();
      },
      error: (err) => {
        this.errorMessage = 'Erro ao carregar taxas de câmbio.';
        console.error(err);
      }
    });
  }

  convert() {
    if (this.rates && this.rates[this.toCurrency]) {
      const rate = this.rates[this.toCurrency];
      this.result = this.amount * rate;
    }
  }

  onConvertClick() {
    this.convert();
    if (this.result > 0) {
      this.currencyService.saveToHistory(
        this.fromCurrency,
        this.toCurrency,
        this.amount,
        this.result
      );
    }
  }

  reverseCurrencies() {
    const temp = this.fromCurrency;
    this.fromCurrency = this.toCurrency;
    this.toCurrency = temp;
    this.loadRates();
  }

  goToHistory() {
    this.router.navigate(['/history']);
  }
}