import { Component, OnInit } from '@angular/core';
import { PedidoService } from '../../services/pedido-service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  imports: [ReactiveFormsModule, CommonModule, RouterModule],
  selector: 'app-nuevo-pedido',
  styleUrl: './nuevo-pedido.css',
  templateUrl: './nuevo-pedido.html',
})
export class NuevoPedido implements OnInit{
  
  formulario! : FormGroup
  pedidoId? : string

  constructor(
    private pService: PedidoService,
    private fb : FormBuilder,
    private router: Router,
  ){}

  ngOnInit(): void {
    this.formulario = this.fb.group({
      cliente:['', [Validators.required, Validators.minLength(3)]] ,
      plato: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]],
      cantidad: ['', [Validators.required, Validators.pattern('^[0-9]+$'), Validators.min(1)]],
      precioUnitario: ['', [Validators.required, Validators.pattern('^[0-9]+$'), Validators.min(1)]],
      estado: ['', Validators.required]
    });
  }

  onSubmit(){

    if (this.formulario.invalid) return alert('Completar correctamente el formulario!!!!')

    const newPedido = this.formulario.value;

    this.pService.addPedido(newPedido).subscribe({
      next: () => {
        this.router.navigate(['/listadoPedidos'])},
      error: (e) => console.error(e)
    })

    this.formulario.reset()
  }
  

}
