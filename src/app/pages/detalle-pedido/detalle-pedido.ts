import { Component, OnInit, signal } from '@angular/core';
import { Pedido } from '../../models/pedido';
import { PedidoService } from '../../services/pedido-service';
import { ActivatedRoute } from '@angular/router';

@Component({
  imports: [],
  selector: 'app-detalle-pedido',
  styleUrl: './detalle-pedido.css',
  templateUrl: './detalle-pedido.html',
})
export class DetallePedido implements OnInit{

  pedido = signal<Pedido | null>(null)

  constructor(
    private pService : PedidoService,
    private route : ActivatedRoute
  ){}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.selectPedido(id);
  }

  selectPedido(id: string):void{
    this.pService.getPedidoById(id).subscribe((data) => this.pedido.set(data))
  }

  calcularTotal(cant: number, monto: number): Number{
    return cant * monto
  }
}
