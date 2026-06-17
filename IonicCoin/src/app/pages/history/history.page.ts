import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CurrencyService } from '../../services/currency';
import { Router } from '@angular/router';

// 1. IMPORTAR OS ÍCONES DO HISTÓRICO
import { addIcons } from 'ionicons'; 
import { arrowBackOutline, trashOutline, hourglassOutline } from 'ionicons/icons'; 

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule]
})
export class HistoryPage implements OnInit {
  historyList: any[] = [];

  constructor(
    private currencyService: CurrencyService,
    private router: Router
  ) {
    // 2. REGISTRAR OS ÍCONES NO CONSTRUTOR DO HISTÓRICO
    addIcons({ arrowBackOutline, trashOutline, hourglassOutline });
  }

  ngOnInit() {
    // Carrega o histórico assim que a página inicializa
    this.loadHistory();
  }

  // Evento do Ionic que roda toda vez que a página entra em foco na tela
  ionViewWillEnter() {
    this.loadHistory();
  }

  loadHistory() {
    this.historyList = this.currencyService.getHistory();
  }

  clearAll() {
    this.currencyService.clearHistory();
    this.historyList = [];
  }

  goBack() {
    this.router.navigate(['/home']);
  }
}