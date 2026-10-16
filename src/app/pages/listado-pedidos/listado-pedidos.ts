import { Component, OnInit, signal } from '@angular/core';
import { Pedido } from '../../models/pedido';
import { PedidoService } from '../../services/pedido-service';
import { Router, RouterOutlet, RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-listado-pedidos',
  styleUrl: './listado-pedidos.css',
  templateUrl: './listado-pedidos.html',
})
export class ListadoPedidos implements OnInit{
  pedidos = signal<Pedido[]>([])

  constructor(
    private pService: PedidoService,
    private router: Router
  ){}

  ngOnInit(): void {
    this.loadPedidos()
  }

  loadPedidos(){
    this.pService.getPedidos().subscribe((data) => this.pedidos.set(data))
  }

  deletePedido(id: string){
    if(confirm('Estas seguro que deseas eliminar?')){
      this.pService.deletePedido(id).subscribe(() => this.loadPedidos())
    }
  }

}
